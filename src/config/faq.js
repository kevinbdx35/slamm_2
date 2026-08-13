/**
 * Configuration centralisée de la FAQ
 *
 * Source unique des questions/réponses, réutilisée par :
 * - la page /faq (intégralité, par catégories)
 * - la mini-FAQ de la page d'accueil (sélection des questions clés)
 *
 * Chaque question porte un `id` stable pour permettre une sélection
 * ciblée depuis la home sans dupliquer le contenu.
 */

export const FAQ_CATEGORIES = [
  {
    title: 'Débuter au club',
    questions: [
      {
        id: 'experience',
        q: "Faut-il avoir de l'expérience pour commencer le MMA ?",
        a: "Non, aucune expérience n'est nécessaire. Nos cours sont ouverts à tous les niveaux. Nos encadrants t'accompagnent pas à pas, en t'enseignant les bases avec pédagogie, pour te permettre de progresser à ton rythme.",
      },
      {
        id: 'age',
        q: "À partir de quel âge peut-on pratiquer le MMA ?",
        a: "L'âge minimum pour adhérer à notre association est de 16 ans.",
      },
      {
        id: 'femmes',
        q: "Y a-t-il des femmes au club ?",
        a: "Oui ! Nous accueillons des femmes et des hommes de tous niveaux. Le MMA est un sport mixte et nos entraînements sont ouverts à tous. Chacun travaille avec ses partenaires dans le respect mutuel, quelle que soit sa morphologie ou son genre.",
      },
      {
        id: 'equipement',
        q: "Quel équipement est nécessaire pour débuter ?",
        a: "Pour venir essayer, il te suffit d'une tenue de sport confortable, d'une bouteille d'eau et éventuellement d'une serviette. Par la suite, il sera nécessaire d'acquérir gants, protège-tibias, protège-dents et coquille.",
      },
      {
        id: 'observer',
        q: "Peut-on venir observer un cours sans s'inscrire ?",
        a: "Oui, bien sûr ! Tu peux venir observer un cours gratuitement pour découvrir l'ambiance et voir comment se déroule une séance, sans aucun engagement. Contacte-nous avant de venir pour qu'on te prévienne du meilleur créneau.",
      },
      {
        id: 'essai',
        q: "Comment s'inscrire aux cours d'essai ?",
        a: "Tu peux participer à 2 cours d'essai. En début de saison (septembre–octobre), ils sont gratuits. En cours d'année, ils sont proposés au tarif de 5 € par séance, déductible de l'adhésion si tu t'inscris par la suite.",
      },
      {
        id: 'aides',
        q: "Acceptez-vous le Pass'Sport et le Chèque jeunesse ?",
        a: "Oui, les deux. Le Pass'Sport est une aide de l'État accordée sous conditions d'éligibilité. Le Chèque jeunesse est une aide de 60 € de la mairie de Saint-Lunaire, destinée aux jeunes de 3 à 18 ans pour financer une inscription annuelle en association sportive ou culturelle — chez nous, elle concerne donc les 16-18 ans, puisque l'âge minimum d'adhésion est de 16 ans. Dans les deux cas, le montant est déduit de ton adhésion : préviens-nous avant de finaliser ton inscription pour qu'on t'indique les justificatifs à fournir.",
      },
    ],
  },
  {
    title: 'La pratique',
    questions: [
      {
        id: 'certificat',
        q: "Faut-il un certificat médical ?",
        a: "Oui, un certificat médical de non contre-indication à la pratique du MMA est obligatoire pour l'inscription. Il doit dater de moins d'un an. Pour les cours d'essai, il n'est pas nécessaire immédiatement.",
      },
      {
        id: 'frequence',
        q: "Quelle est la fréquence d'entraînement recommandée ?",
        a: "Pour progresser régulièrement, nous recommandons de participer à 2 à 3 séances par semaine. Même une séance hebdomadaire peut te permettre d'évoluer. L'essentiel reste la régularité et l'engagement lors des entraînements.",
      },
      {
        id: 'danger',
        q: "Le MMA est-il dangereux ?",
        a: "Comme tout sport de combat, le MMA comporte des risques. Mais encadré par nos coachs diplômés, avec un équipement adapté et des règles de sécurité strictes, la pratique reste maîtrisée. Nos cours sont progressifs, axés sur la technique et le respect du partenaire.",
      },
      {
        id: 'deroule',
        q: "Comment se déroule un cours type ?",
        a: "Un cours dure entre 1h15 et 2h selon le créneau. Il débute par un échauffement spécifique MMA (debout, clinch, sol), suivi d'un travail technique, d'une mise en situation thématique, puis d'un retour au calme avec étirements.",
      },
      {
        id: 'competition',
        q: "Est-ce que je dois participer à des compétitions ?",
        a: "Absolument pas. La compétition est entièrement optionnelle et s'adresse uniquement à ceux qui le souhaitent. La majorité de nos membres pratiquent pour le loisir, la condition physique ou simplement par plaisir.",
      },
    ],
  },
];

/**
 * Retourne une liste plate de questions sélectionnées par leur id,
 * dans l'ordre demandé. Utilisé pour la mini-FAQ de la home.
 * @param {string[]} ids
 * @returns {{id: string, q: string, a: string}[]}
 */
export function getFaqByIds(ids) {
  const all = FAQ_CATEGORIES.flatMap(c => c.questions);
  return ids
    .map(id => all.find(q => q.id === id))
    .filter(Boolean);
}

export default { FAQ_CATEGORIES, getFaqByIds };
