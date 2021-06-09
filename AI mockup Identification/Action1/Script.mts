'Primero se debe crear un contexto para que el AI reconozca los textos/elementos creados a partir de la imagen
AIUtil.SetContext Browser("creationtime:=0")
'AIUtil("profile").Click
'AIUtil("search").Search
'AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("LA'PT OPS").Click
'Si intentamos cambiar el nombre y poner bien el nombre ya no lo reconoce
'AIUtil.FindTextBlock("LAPTOPS").Click
AIUtil.FindTextBlock("dvawtageDEMD").CheckExists

