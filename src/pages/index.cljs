(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

(set! *warn-on-infer* true)

(h/html
 (h/head
  (h/title "Hoplon Drift test"))
 (h/body
  (h/div "Hi")))
