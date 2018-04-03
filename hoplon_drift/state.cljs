(ns hoplon-drift.state
 (:require
  [javelin.core :as j]
  [hoplon.core :as h]
  hoplon-drift.api))

(def ready?
 (let [c (j/cell nil)
       f (fn f []
          (if (hoplon-drift.api/lib?)
           (oops.core/ocall (hoplon-drift.api/lib) "on" "ready" #(reset! c true))
           (h/with-timeout 100 (f))))]
  (hoplon-drift.api/ensure-lib!)
  (f)
  (j/cell= c)))
