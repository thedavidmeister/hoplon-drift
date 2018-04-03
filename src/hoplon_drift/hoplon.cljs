(ns hoplon-drift.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon-drift.api.widget
  hoplon-drift.api
  hoplon-drift.state
  auth.state
  hoplon-drift.data
  [cljs.test :refer-macros [deftest is]]))

(defn snippet
 ([] (snippet hoplon-drift.data/id))
 ([id]
  (hoplon-drift.api/ensure-lib!)
  (let [e 3e5
        i (-> (.now js/Date) (/ e) Math/ceil (* e))]
   ; only show drift widget when logged out
   (j/cell=
    (when hoplon-drift.state/ready?
     (if auth.state/logged-in?
      (hoplon-drift.api.widget/hide)
      (hoplon-drift.api.widget/show))))

   (h/script
    :type "text/javascript"
    :async true
    :crossorigin "anonymous"
    :src (str "https://js.driftt.com/include/" i "/" id ".js")))))

(deftest ??snippet
 (snippet)
 (is (hoplon-drift.api/lib?)))
