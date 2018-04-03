(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon-drift.hoplon
  hoplon-drift.api.widget))

(set! *warn-on-infer* true)

(h/html
 (h/head
  (h/title "Hoplon Drift test")
  (hoplon-drift.hoplon/snippet))
 (h/body
  (h/div "Hi, this is an example Drift widget in Hoplon.")
  (h/br)
  (h/div
   "Interact with the Drift widget API:"
   (h/div
    (h/button
     :click hoplon-drift.api.widget/show!
     "Show widget")
    (h/button
     :click hoplon-drift.api.widget/hide!
     "Hide widget")))
  (h/br)
  (h/div
   (h/a
    :href "https://github.com/thedavidmeister/hoplon-drift"
    "Github"))
  (h/div
   (h/a
    :href "http://drift.com/"
    "Drift"))))
