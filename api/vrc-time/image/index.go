package image

import (
	"net/http"
	"strconv"

	"lumina-api/pkg/vrc-time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	tzStr := r.URL.Query().Get("tz")
	tz, err := strconv.Atoi(tzStr)
	if err != nil || tz == 0 {
		tz = vrc_time.DefaultTimeZone
	}
	vrc_time.TimeBuilder(w, tz)
	w.Header().Add("Content-Type", "image/jpeg")
}
