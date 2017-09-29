var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUppercase = dinosaur.toUpperCase();

var text2 = text.replace('Velociraptor', dinosaurUppercase);

var text2Length = text2.length;

var text3 = text2.substr(0, (text2Length / 2));

console.log(text3);

