// pages/FaqPage.jsx
import React, { useState } from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SeoHelmet from '../components/SeoHelmet'

const faqs = [
  {
    question: "Faut-il avoir de l'expérience pour commencer le MMA ?",
    answer:
      "Non, aucune expérience n’est nécessaire. Nos cours sont ouverts à tous les niveaux. Nos encadrants vous accompagnent pas à pas, en vous enseignant les bases avec pédagogie, pour vous permettre de progresser à votre rythme. Une expérience préalable peut aider, mais elle n’est en aucun cas obligatoire.",
  },
  {
    question: "À partir de quel âge peut-on pratiquer le MMA ?",
    answer: "L’âge minimum pour adhérer à notre association est de 16 ans.",
  },
  {
    question: "Quel équipement est nécessaire pour débuter ?",
    answer:
      "Pour venir essayer, il vous suffit d’une tenue de sport confortable, d’une bouteille d’eau et éventuellement d’une serviette. Par la suite, il sera nécessaire d’acquérir un équipement spécifique : gants, protège-tibias, protège-dents et coquille ou protection pelvienne. Nos encadrants vous conseilleront sur le choix du matériel dès vos premiers cours.",
  },
  {
    question: "Quelle est la fréquence d'entraînement recommandée ?",
    answer:
      "Pour progresser régulièrement, nous recommandons de participer à 2 à 3 séances par semaine. Cela dit, même une séance hebdomadaire peut vous permettre d’évoluer et de bénéficier des bienfaits du MMA. Tout dépend de vos objectifs personnels et de votre disponibilité. L’essentiel reste la régularité et l’engagement lors des entraînements.",
  },
  {
    question: "Le MMA est-il dangereux ?",
    answer:
      "Comme tout sport de combat, le MMA comporte des risques. Mais encadré par nos coachs diplômés, avec un équipement adapté et des règles de sécurité strictes, la pratique reste maîtrisée. Nos cours sont progressifs, axés sur la technique et le respect du partenaire.",
  },
  {
    question: "Comment se déroule un cours type ?",
    answer:
      "Un cours typique dure entre 1h30 et 2h. Il débute par un échauffement dynamique, suivi d’exercices techniques propres à la discipline. La séance se poursuit généralement par des mises en application ou du sparring léger, pour ceux qui le souhaitent. Elle se termine par un retour au calme accompagné d’étirements.",
  },
  {
    question: "Est-ce que je dois participer à des compétitions ?",
    answer:
      "Absolument pas. La compétition est entièrement optionnelle et s’adresse uniquement à ceux qui le souhaitent. La majorité de nos membres pratiquent le MMA pour le loisir, la condition physique, l’apprentissage technique ou simplement par plaisir. Nous respectons les objectifs de chacun.",
  },
  {
    question: "Comment s'inscrire aux cours d'essai ?",
    answer:
      "En septembre et octobre, vous avez la possibilité de participer à 2 cours d’essai gratuits. À partir de novembre, les cours d’essai sont proposés au tarif de 5 € par séance, dans la limite de 2 cours maximum par personne. Ce montant sera déduit de l'adhésion si vous vous inscrivez par la suite. Pour réserver, contactez-nous par téléphone au 07 82 77 92 88 ou par email à slamm35800@gmail.com. Merci de prévoir une arrivée 15 minutes avant le début du cours pour l’accueil et la présentation des installations.",
  },
]

export default function FaqPage() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <SeoHelmet
        title="FAQ – MMA Saint-Lunaire"
        description="Toutes les réponses à vos questions sur la pratique du MMA au sein de l'association SLAMM à Saint-Lunaire. Inscriptions, équipement, âge, sécurité, etc."
        url="https://mma-saint-lunaire.fr/faq"
      />

      <Container>
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2, mt: 4 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            FAQ – Questions fréquentes
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Toutes les réponses à vos questions sur la pratique du MMA au sein de notre association.
          </Typography>
        </Box>

        <Box mt={6}>
          <Typography
            variant="h2"
            mb={2}
            sx={{
              borderBottom: '2px solid',
              borderColor: 'primary.main',
              display: 'inline-block',
            }}
          >
            Vos questions les plus fréquentes
          </Typography>

          {faqs.map((item, index) => {
            const panelId = `panel-${index}`
            return (
              <Accordion
                key={panelId}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{ mb: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${panelId}-content`}
                  id={`${panelId}-header`}
                >
                  <Typography fontWeight="medium">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>
      </Container>
    </>
  )
}
