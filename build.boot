(def project 'thedavidmeister/hoplon-drift)
(def version "0.3.0")
(def description "Drift in Hoplon.")
(def github-url "https://github.com/thedavidmeister/hoplon-drift")

(set-env!
 :source-paths #{"src"}
 :dependencies
 '[; scaffolding...
   [org.clojure/clojure "1.10.0-alpha4"]
   [org.clojure/clojurescript "1.9.946"]
   [hoplon "7.3.0-SNAPSHOT"]
   [pandeiro/boot-http "0.8.3"]
   [adzerk/boot-reload "0.5.1"]
   [adzerk/boot-cljs "2.1.4"]
   [tailrecursion/boot-jetty  "0.1.3"]
   [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]
   [crisptrutski/boot-cljs-test "0.3.5-SNAPSHOT"]
   [adzerk/bootlaces "0.1.13"]

   ; everything else...
   [binaryage/oops "0.5.8"]
   [environ "1.1.0"]])

(task-options!
 pom {:project project
      :version version
      :description description
      :url github-url
      :scm {:url github-url}})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]]
 '[adzerk.bootlaces :refer :all]
 'hoplon-drift.compile)

(bootlaces! version)

(def compiler-options
 (-> {:externs ["externs.js"]}
  hoplon-drift.compile/with-closure-defines))

(deftask front-dev
 "Build for local development."
 [a advanced-compilation? bool "Compile CLJS with advanced compilation"]
 (comp
  (watch)
  (speak)
  (hoplon)
  (cljs
   :optimizations (if advanced-compilation? :advanced :none)
   :compiler-options compiler-options)
  (serve :port 8000)))

(deftask build
 []
 (comp
  (hoplon)
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)))

(deftask deploy-gh-pages
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))

(deftask deploy-clojars
 []
 (comp
  (build-jar)
  (push-release)))

(deftask deploy
 []
 (comp
  (deploy-gh-pages)
  (deploy-clojars)))
