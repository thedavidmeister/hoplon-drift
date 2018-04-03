(ns hoplon-drift.compile
 (:require
  environ.core))

(defn with-closure-defines
 ([config]
  (with-closure-defines
   config
   (environ.core/env :drift-id)))
 ([config id]
  (-> config
   (assoc-in [:closure-defines 'hoplon-drift.data/id] id))))
