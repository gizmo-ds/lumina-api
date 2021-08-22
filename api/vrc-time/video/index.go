package video

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/icza/mjpeg"
	"lumina-api/pkg/vrc-time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	checkError := func(err error) {
		if err != nil {
			log.Fatal(err)
		}
	}
	tzStr := r.URL.Query().Get("tz")
	tz, err := strconv.Atoi(tzStr)
	if err != nil || tz == 0 {
		tz = vrc_time.DefaultTimeZone
	}
	buf := new(bytes.Buffer)
	vrc_time.TimeBuilder(buf, tz)
	filename := fmt.Sprintf("/tmp/%d.avi", time.Now().Unix())
	aw, err := mjpeg.New(filename, 64, 64, 1)
	checkError(err)
	checkError(aw.AddFrame(buf.Bytes()))
	checkError(aw.Close())
	file, err := os.Open(filename)
	checkError(err)
	_, _ = io.Copy(w, file)
	w.Header().Add("Content-Type", "video/avi")
}
