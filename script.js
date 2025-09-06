const popup = document.querySelector(".popup");
const x = document.querySelector(".title h5");
window.addEventListener("load", () => {
  popup.classList.add("showpopup");
  popup.childNodes[1].classList.add("showpopup");
});
x.addEventListener("click", () => {
  popup.classList.remove("showpopup");
  popup.childNodes[1].classList.remove("showpopup");
});
function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
var depts = {
  CSE: ["B.Tech CSE", "M.Tech CSE", "PhD CSE"],
  ECE: ["B.Tech ECE", "M.Tech ECE", "PhD ECE"],
  ME: ["B.Tech ME", "M.Tech ME", "PhD ME"],
  CE: ["B.Tech CE", "M.Tech CE", "PhD CE"],
  EE: ["B.Tech EE", "M.Tech EE", "PhD EE"],
  BT: ["B.Tech BT", "M.Tech BT", "PhD BT"],
  MBA: ["MBA"],
  MCA: ["MCA"],
  BBA: ["BBA"],
  BCA: ["BCA"],
  LAW: ["LLB", "LLM"],
  OPT: ["B.Optom", "M.Optom"],
  IT: ["B.Tech IT", "M.Tech IT", "PhD IT"],
  HUMANITIES: ["BA HUMANITIES", "MA HUMANITIES", "PhD HUMANITIES"],
  SCIENCE: ["B.Sc SCIENCE", "M.Sc SCIENCE", "PhD SCIENCE"],
  SOCIALWORK: ["BSW", "MSW", "PhD SOCIALWORK"],
  LIBRARY: ["B.Lib", "M.Lib", "PhD LIBRARY"],
  FOODTECH: ["B.Tech FOODTECH", "M.Tech FOODTECH", "PhD FOODTECH"],
  AGRI: ["B.Sc AGRICULTURE", "M.Sc AGRICULTURE", "PhD AGRICULTURE"],
  FASHION: ["B.Des FASHION", "M.Des FASHION", "PhD FASHION"],
  ARCHITECTURE: ["B.Arch", "M.Arch", "PhD ARCHITECTURE"],
  PHARMACY: ["B.Pharma", "M.Pharma", "PhD PHARMACY"],
  NURSING: ["B.Sc NURSING", "M.Sc NURSING", "PhD NURSING"],
  DENTAL: ["BDS", "MDS", "PhD DENTAL"],
  MEDICAL: ["MBBS", "MD", "PhD MEDICAL"],
  VETERINARY: ["BVSc", "MVSc", "PhD VETERINARY"],
  HOTELMANAGEMENT: ["BHM", "MHM"],
  JOURNALISM: ["BJMC", "MJMC", "PhD JOURNALISM"],
  EDUCATION: ["B.Ed", "M.Ed", "PhD EDUCATION"],
  PSYCHOLOGY: ["BA PSYCHOLOGY", "MA PSYCHOLOGY", "PhD PSYCHOLOGY"],
  SOCIALSCIENCE: ["BA SOCIALSCIENCE", "MA SOCIALSCIENCE", "PhD SOCIALSCIENCE"],
  ENVIRONMENTALSCIENCE: [
    "B.Sc ENVIRONMENTALSCIENCE",
    "M.Sc ENVIRONMENTALSCIENCE",
  ],
  LIBERALARTS: ["BA LIBERALARTS", "MA LIBERALARTS", "PhD LIBERALARTS"],
  PHILOSOPHY: ["BA PHILOSOPHY", "MA PHILOSOPHY", "PhD PHILOSOPHY"],
  HISTORY: ["BA HISTORY", "MA HISTORY", "PhD HISTORY"],
  GEOGRAPHY: ["BA GEOGRAPHY", "MA GEOGRAPHY", "PhD GEOGRAPHY"],
  POLITICALSCIENCE: ["BA POLITICALSCIENCE", "MA POLITICALSCIENCE"],
  ECONOMICS: ["BA ECONOMICS", "MA ECONOMICS", "PhD ECONOMICS"],
  SOCIOLOGY: ["BA SOCIOLOGY", "MA SOCIOLOGY", "PhD SOCIOLOGY"],
  ANTHROPOLOGY: ["BA ANTHROPOLOGY", "MA ANTHROPOLOGY", "PhD ANTHROPOLOGY"],
  STATISTICS: ["B.Sc STATISTICS", "M.Sc STATISTICS", "PhD STATISTICS"],
  MATHEMATICS: ["B.Sc MATHEMATICS", "M.Sc MATHEMATICS", "PhD MATHEMATICS"],
  PHYSICS: ["B.Sc PHYSICS", "M.Sc PHYSICS", "PhD PHYSICS"],
  CHEMISTRY: ["B.Sc CHEMISTRY", "M.Sc CHEMISTRY", "PhD CHEMISTRY"],
  BIOLOGY: ["B.Sc BIOLOGY", "M.Sc BIOLOGY", "PhD BIOLOGY"],
  ZOOLOGY: ["B.Sc ZOOLOGY", "M.Sc ZOOLOGY", "PhD ZOOLOGY"],
  BOTANY: ["B.Sc BOTANY", "M.Sc BOTANY", "PhD BOTANY"],
  MICROBIOLOGY: ["B.Sc MICROBIOLOGY", "M.Sc MICROBIOLOGY", "PhD MICROBIOLOGY"],
  BIOTECHNOLOGY: [
    "B.Sc BIOTECHNOLOGY",
    "M.Sc BIOTECHNOLOGY",
    "PhD BIOTECHNOLOGY",
  ],
  FOODSCIENCE: ["B.Sc FOODSCIENCE", "M.Sc FOODSCIENCE", "PhD FOODSCIENCE"],
  ENVIRONMENTALSTUDIES: ["B.Sc ENVIRONMENTALSTUDIES"],
  FORESTRY: ["B.Sc FORESTRY", "M.Sc FORESTRY", "PhD FORESTRY"],
  AGRONOMY: ["B.Sc AGRONOMY", "M.Sc AGRONOMY", "PhD AGRONOMY"],
  HORTICULTURE: ["B.Sc HORTICULTURE", "M.Sc HORTICULTURE", "PhD HORTICULTURE"],
  SOILSCIENCE: ["B.Sc SOILSCIENCE", "M.Sc SOILSCIENCE", "PhD SOILSCIENCE"],
  ENTOMOLOGY: ["B.Sc ENTOMOLOGY", "M.Sc ENTOMOLOGY", "PhD ENTOMOLOGY"],
  PLANTPATHOLOGY: [
    "B.Sc PLANTPATHOLOGY",
    "M.Sc PLANTPATHOLOGY",
    "PhD PLANTPATHOLOGY",
  ],
  AGRICULTURALECONOMICS: ["B.Sc AGRICULTURALECONOMICS"],
  AGRICULTURALENGINEERING: ["B.Tech AGRICULTURALENGINEERING"],
  FOODENGINEERING: [
    "B.Tech FOODENGINEERING",
    "M.Tech FOODENGINEERING",
    "PhD FOODENGINEERING",
  ],
  FASHIONTECHNOLOGY: ["B.Tech FASHIONTECHNOLOGY"],
  TEXTILETECHNOLOGY: [
    "B.Tech TEXTILETECHNOLOGY",
    "M.Tech TEXTILETECHNOLOGY",
    "PhD TEXTILETECHNOLOGY",
  ],
  LEATHERTECHNOLOGY: [
    "B.Tech LEATHERTECHNOLOGY",
    "M.Tech LEATHERTECHNOLOGY",
    "PhD LEATHERTECHNOLOGY",
  ],
  FOOTWEARTECHNOLOGY: ["B.Tech FOOTWEARTECHNOLOGY"],
  ACCESSORYDESIGN: [
    "B.Des ACCESSORYDESIGN",
    "M.Des ACCESSORYDESIGN",
    "PhD ACCESSORYDESIGN",
  ],
  INTERIORDESIGN: [
    "B.Des INTERIORDESIGN",
    "M.Des INTERIORDESIGN",
    "PhD INTERIORDESIGN",
  ],
  GRAPHICDESIGN: [
    "B.Des GRAPHICDESIGN",
    "M.Des GRAPHICDESIGN",
    "PhD GRAPHICDESIGN",
  ],
  ANIMATION: ["B.Des ANIMATION", "M.Des ANIMATION", "PhD ANIMATION"],
  FASHIONMERCHANDISING: ["B.Des FASHIONMERCHANDISING"],
};
var deptdd = document.getElementById("dept");
var coursedd = document.getElementById("course");
function getcourse() {
  coursedd.innerHTML = '<option value="">choose a course</option>';
  var selecteddept = deptdd.value;
  if (selecteddept) {
    var coursesoptions = depts[selecteddept];
    coursesoptions.forEach(function (course) {
      var option = document.createElement("option");
      option.value = course;
      option.text = course;
      coursedd.appendChild(option);
    });
  }
}