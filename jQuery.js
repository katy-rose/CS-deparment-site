$(document).ready(function(){

//variables for XML parsing
var parser, xmlDoc;
var results = "";
var lab, researchArea, director, member;

//Functions for Research page to show information
$("#cyberSecurity").click(function(){
	$("#cyberSecurityInfo").slideToggle();
});

$("#computingTheory").click(function(){
	$("#computingTheoryInfo").slideToggle();
});

$("#computerSystems").click(function(){
	$("#computerSystemsInfo").slideToggle();
});

$("#AI").click(function(){
	$("#AIInfo").slideToggle();
});

$("#softwareEngineering").click(function(){
	$("#softwareEngineeringInfo").slideToggle();
});

$("#network").click(function(){
	$("#networkInfo").slideToggle();
});

$("#labs").click(function (){
	$("#labsInfo").slideToggle();
});

//***************************XML*************************** 

var text = "<labs>" +
"<lab>" + 
	"<labName>Computer Graphics and Animation Lab</labName>" +
	"<researchArea>Its main research agenda includes computer graphics, computer animation and simulation, geometric and physically-based modeling, computer-aided geometric design, virtual reality, scientific visualization, and medical imaging.</researchArea>" +
	"<director>Professor Xiaohu Guo</director>" +
	"<members>" +
		"<memberName>Chao Li</memberName>" +
		"<memberName>Yeqi Wang</memberName>" +
		"<memberName>Steven Hogue</memberName>" +
	"</members>" + 
"</lab>" +

"<lab>" + 
	"<labName>Multimedia Lab</labName>" +
	"<researchArea>Coupled with high-speed and mobile networks, Multimedia Computer Systems have opened a wide spectrum of applications by combining a variety of information sources, such as text, voice, graphics, animation, images, audio, and video. Apart from these “traditional” sources, new and rich media types such as haptic, on-body and other sensors are being incorporated. In general, multimedia System is characterized by different components: generation, processing, storage, manipulation, transmission, and rendition of these multiple media of information. New modes of rendition have given raise to exciting virtual / mixed / augmented reality applications.</researchArea>" +
	"<director>Professor B. Prabhakaran</director>" +
	"<members>" +
		"<memberName>Arvind Balasubramanian</memberName>" +
		"<memberName>Suraj Raghuraman</memberName>" +
		"<memberName>Rittika Shamsuddin</memberName>" +
	"</members>" + 
"</lab>" +

"<lab>" + 
	"<labName>Speech Processing Lab</labName>" +
	"<researchArea>The focus of the Center for Robust Speech Systems is to provide excellent education in modern speech signal processing and language technology with an emphasis on fundamental engineering breakthroughs, balanced with core foundations in speech, language, audio and hearing sciences, as well as related aspects of machine learning. Our graduates are uniquely qualified for rewarding and successful careers in education, industry and research laboratories interested in speech and human-computer interaction.</researchArea>" +
	"<director>Prof. John H.L. Hansen</director>" +
	"<members>" +
		"<memberName>Lakshmish Kaushik</memberName>" +
		"<memberName>Abinav Misra</memberName>" +
		"<memberName>Qian Zhang</memberName>" +
	"</members>" + 
"</lab>" +
"</labs>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");
var l = xmlDoc.documentElement.childNodes;

//Loop through labs
for (var i = 0; i < l.length; i++) {
	lab = l[i].childNodes[0].nodeName + ": " + l[i].childNodes[0].childNodes[0].nodeValue;
	researchArea = l[i].childNodes[1].nodeName + ": " + l[i].childNodes[1].childNodes[0].nodeValue;
	director = l[i].childNodes[2].nodeName + ": " + l[i].childNodes[2].childNodes[0].nodeValue;

	results += lab + "<br>" + researchArea + "<br>" + director + "<br>";

	//get members into an array
	var members = l[i].getElementsByTagName("memberName");
	//loop through members array to get names
	for (var j = 0; j < members.length; j++) {
			memberName = members[j].nodeName + ": " + members[j].childNodes[0].nodeValue;
			results += memberName + "<br>";
		}
	results += "<br>";
}

document.getElementById("labsInfo").innerHTML = results;


});