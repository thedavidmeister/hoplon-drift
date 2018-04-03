(ns hoplon-drift.api.widget
 (:require
  hoplon-drift.api
  oops.core))

(defn widget
 []
 (oops.core/oget
  (hoplon-drift.api/lib)
  "api.widget"))

(defn show!
 []
 (hoplon-drift.api/ensure-lib!)
 (oops.core/ocall
  (widget)
  "show"))

(defn hide!
 []
 (hoplon-drift.api/ensure-lib!)
 (oops.core/ocall
  (widget)
  "hide"))
