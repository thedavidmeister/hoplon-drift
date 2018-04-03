(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon-drift.hoplon))

(set! *warn-on-infer* true)

(h/html
 (h/head
  (h/title "Hoplon Drift test")
  (hoplon-drift.hoplon/snippet))
 (h/body
  (h/div "Hi")))
