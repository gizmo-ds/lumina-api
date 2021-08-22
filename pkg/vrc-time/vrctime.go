package vrc_time

import (
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"io"
	"time"
)

// DefaultTimeZone Japan UTC offset
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
const DefaultTimeZone = 9

func TimeBuilder(w io.Writer, tz int) {
	rectImage := image.NewRGBA(image.Rect(0, 0, 64, 64))
	draw.Draw(rectImage, rectImage.Bounds(), &image.Uniform{
		C: color.RGBA{A: 255},
	}, image.Point{}, draw.Src)

	now := time.Now().In(time.FixedZone("offsetTime", int((time.Duration(tz) * time.Hour).Seconds())))
	year := now.Year() - 1900
	month := int(now.Month()) - 1
	day := now.Day()
	hour := now.Hour()
	minute := now.Minute()
	second := now.Second()
	ms := int(now.UnixNano() / 1e6)
	weekday := now.Weekday()
	moonAge := (((now.Year()-2009)%19)*11 + (int(now.Month()) + 1) + (now.Day() + 1)) % 30

	drawCall(rectImage, 0, 0, hour&0b111)
	drawCall(rectImage, 1, 0, hour>>3)
	drawCall(rectImage, 2, 0, minute&0b111)
	drawCall(rectImage, 3, 0, minute>>3)
	drawCall(rectImage, 4, 0, second&0b111)
	drawCall(rectImage, 5, 0, second>>3)
	drawCall(rectImage, 6, 0, ms&0b111)
	drawCall(rectImage, 7, 0, ms>>3)

	drawCall(rectImage, 0, 1, year&0b111)
	drawCall(rectImage, 1, 1, (year>>3)&0b111)
	drawCall(rectImage, 2, 1, (year>>6)&0b111)
	drawCall(rectImage, 3, 1, month&0b111)
	drawCall(rectImage, 4, 1, month>>3)
	drawCall(rectImage, 5, 1, day&0b111)
	drawCall(rectImage, 6, 1, day>>3)
	drawCall(rectImage, 7, 1, int(weekday))

	drawCall(rectImage, 0, 2, moonAge&0b111)
	drawCall(rectImage, 1, 2, moonAge>>3)

	_ = jpeg.Encode(w, rectImage, &jpeg.Options{
		Quality: 100,
	})
	//_ = png.Encode(w, rectImage)
}

func drawCall(rectImage *image.RGBA, x, y, val int) {
	x0 := x * 8
	y0 := y * 8
	x1 := (x + 1) * 8
	y1 := (y + 1) * 8
	f := func(o uint) int {
		if val&(1<<o) != 0 {
			return 255
		}
		return 0
	}
	r := f(0)
	g := f(1)
	b := f(2)

	draw.Draw(rectImage,
		image.Rect(x0, y0, x1, y1),
		&image.Uniform{
			C: color.RGBA{R: uint8(r), G: uint8(g), B: uint8(b), A: 255},
		}, image.Point{}, draw.Src,
	)
}
