package main

import "fmt"

func main() {
	var a string
	var s string
	fmt.Scan(&a) // データを格納する変数のアドレスを指定
	s := "ぷえぷえ体操いくぷえよ～！  （∩ ๑•﹏•๑｀)ぷえ〜っwwwぷえぷえぷえええ〜っwww (∩ ๑•﹏•๑｀⊃)ぷぇっ～///ぷぇっ～/// (⊂ ๑•﹏•๑｀∩) ぷえええええーーーっ！！(∩ ๑•﹏•๑｀∩)ぷえぷえーっ！！"
	fmt.Println((strings.Replace(s,"ぷえ",a,-1))
}
