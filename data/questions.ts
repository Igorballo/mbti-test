import type { Question } from "@/types/question"

export const questionsOriginales: Question[] = [
  // Axe Extraversion (E) / Introversion (I) - 10 questions
  { text: "Je n'ai aucun problème à être le centre de l'attention.", preference: "E" },
  { text: "Je préfère avoir des interactions individuelles plutôt qu'en grand groupe.", preference: "I" },
  { text: "Je me sens plus énergisé(e) après avoir passé du temps avec d'autres personnes.", preference: "E" },
  { text: "J'ai besoin de moments de solitude pour réfléchir et me ressourcer.", preference: "I" },
  { text: "J'aime initier les conversations.", preference: "E" },
  { text: "Je préfère écouter attentivement plutôt que de parler en premier.", preference: "I" },
  { text: "On me décrit souvent comme quelqu'un d'extraverti et enthousiaste.", preference: "E" },
  { text: "Je me sens parfois mal à l'aise dans des environnements très stimulants ou bruyants.", preference: "I" },
  { text: "Je suis plus à l'aise pour exprimer mes pensées verbalement.", preference: "E" },
  { text: "J'apprécie la profondeur des discussions plus que la superficialité des échanges.", preference: "I" },

  // Axe Sensation (S) / Intuition (N) - 10 questions
  { text: "Je m'intéresse aux faits concrets et aux détails pratiques.", preference: "S" },
  { text: "J'aime imaginer les possibilités et les implications futures.", preference: "N" },
  { text: "Je suis plus réaliste et terre-à-terre qu'abstrait(e).", preference: "S" },
  {
    text: "J'apprécie explorer de nouvelles idées et concepts, même s'ils ne sont pas immédiatement applicables.",
    preference: "N",
  },
  { text: "Je fais confiance à mon expérience directe et aux informations tangibles.", preference: "S" },
  { text: "J'ai souvent des intuitions ou des pressentiments sur les événements.", preference: "N" },
  { text: "Je préfère des instructions étape par étape et bien définies.", preference: "S" },
  { text: "J'aime réfléchir aux significations profondes et aux liens entre les choses.", preference: "N" },
  { text: "Je suis doué(e) pour remarquer les détails et les faits précis.", preference: "S" },
  {
    text: 'J\'aime résoudre des problèmes en utilisant mon imagination et en pensant "hors des sentiers battus".',
    preference: "N",
  },

  // Axe Pensée (T) / Sentiment (F) - 10 questions
  { text: "Je prends des décisions en me basant sur une analyse logique et objective.", preference: "T" },
  { text: "Je suis attentif(ve) aux sentiments des autres et à l'impact de mes actions.", preference: "F" },
  {
    text: "Je crois qu'il est important d'être honnête et direct, même si cela peut blesser parfois.",
    preference: "T",
  },
  { text: "Je cherche l'harmonie dans mes relations et j'évite les conflits autant que possible.", preference: "F" },
  { text: "J'ai tendance à analyser les situations de manière impartiale.", preference: "T" },
  { text: "Je suis souvent ému(e) par les expériences des autres.", preference: "F" },
  { text: "Je crois que la justice et l'équité sont des principes fondamentaux.", preference: "T" },
  { text: "Je suis sensible à l'ambiance émotionnelle d'un groupe ou d'un lieu.", preference: "F" },
  {
    text: "J'essaie de prendre des décisions justes et équitables pour toutes les personnes concernées.",
    preference: "T",
  },
  { text: "Je valorise la compassion et la compréhension dans mes interactions.", preference: "F" },

  // Axe Jugement (J) / Perception (P) - 10 questions
  { text: "J'aime planifier mon travail et respecter les échéances.", preference: "J" },
  { text: "Je préfère garder mes options ouvertes et m'adapter aux circonstances.", preference: "P" },
  { text: "Je me sens plus à l'aise lorsque les choses sont organisées et prévisibles.", preference: "J" },
  { text: "Je suis adaptable et je n'ai pas de problème à changer mes plans à la dernière minute.", preference: "P" },
  { text: "J'aime prendre des décisions rapidement et passer à l'action.", preference: "J" },
  { text: "Je préfère explorer toutes les possibilités avant de prendre une décision finale.", preference: "P" },
  { text: "J'apprécie avoir des objectifs clairs et un calendrier précis.", preference: "J" },
  { text: "Je préfère un environnement de travail flexible et sans contraintes strictes.", preference: "P" },
  { text: "J'ai tendance à vouloir que les choses soient réglées et finalisées.", preference: "J" },
  {
    text: "Je suis souvent en train de démarrer de nouveaux projets avant d'avoir terminé les précédents.",
    preference: "P",
  },
]
