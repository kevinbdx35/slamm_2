import React, { useState } from 'react'
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Chip,
  Divider,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo'
import HomeIcon from '@mui/icons-material/Home'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SeoHelmet from '../components/SeoHelmet'

const hygieneRules = [
  {
    category: "Hygiène corporelle",
    icon: <CleaningServicesIcon sx={{ color: 'primary.main' }} />,
    rules: [
      {
        title: "Avant l'entraînement",
        content: "Je veille à une bonne hygiène personnelle avant chaque cours. Ongles coupés courts et propres. Si j'ai les cheveux longs, je les attache. Pas de bijoux (bagues, colliers, boucles d'oreilles).",
        priority: "high"
      },
      {
        title: "Après l'entraînement", 
        content: "Douche immédiate recommandée. Changement complet de vêtements. Désinfection des mains.",
        priority: "medium"
      },
      {
        title: "Tenue vestimentaire",
        content: "Tenue propre et adaptée à chaque séance. Short/legging sans poches ni fermetures. Je ne marche jamais pieds nus en dehors du tatami (prévoir claquettes ou tongs).",
        priority: "high"
      }
    ]
  },
  {
    category: "Équipements personnels",
    icon: <PersonalVideoIcon sx={{ color: 'primary.main' }} />,
    rules: [
      {
        title: "Matériel obligatoire",
        content: "Serviette personnelle. Bouteille d'eau individuelle. Protège-dents personnel (jamais partagé).",
        priority: "high"
      },
      {
        title: "Gants et protections",
        content: "Nettoyage systématique des gants après usage. Séchage complet avant rangement. Remplacement si usure excessive.",
        priority: "medium"
      },
      {
        title: "Sac de sport",
        content: "Compartiment séparé pour les affaires sales. Aération régulière du sac. Nettoyage hebdomadaire.",
        priority: "low"
      }
    ]
  },
  {
    category: "Prévention des infections",
    icon: <HealthAndSafetyIcon sx={{ color: 'primary.main' }} />,
    rules: [
      {
        title: "Infections cutanées",
        content: "Surveillance de toute lésion cutanée suspecte. Éviction temporaire si infection active (mycose, impétigo, verrue, teigne). Certificat médical nécessaire pour la reprise.",
        priority: "high"
      },
      {
        title: "Blessures ouvertes",
        content: "Désinfection immédiate de toute plaie. Pansement étanche obligatoire. Arrêt de l'entraînement si saignement.",
        priority: "high"
      },
      {
        title: "État de santé",
        content: "Ne pas venir en cas de fièvre, gastro-entérite ou infection respiratoire. Respecter les périodes de contagiosité.",
        priority: "high"
      }
    ]
  },
  {
    category: "Respect des lieux",
    icon: <HomeIcon sx={{ color: 'primary.main' }} />,
    rules: [
      {
        title: "Espaces communs",
        content: "Je garde les espaces communs propres.",
        priority: "high"
      },
      {
        title: "Protection des tatamis",
        content: "Pas de chaussures, nourriture ou boissons (autres que l'eau) sur les tatamis.",
        priority: "high"
      },
      {
        title: "Philosophie du club",
        content: "Le club est comme une deuxième maison : si je salis, je nettoie ; si je casse, je répare.",
        priority: "high"
      }
    ]
  }
]

const clubMeasures = [
  "Désinfection du matériel partagé entre chaque utilisation",
  "Formation continue des encadrants aux protocoles d'hygiène",
  "Contrôles visuels réguliers de l'état sanitaire des équipements",
  "Collaboration étroite avec la mairie pour l'entretien des locaux"
]

export default function HygienePage() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'error'
      case 'medium': return 'warning'
      case 'low': return 'info'
      default: return 'default'
    }
  }

  const getPriorityLabel = (priority) => {
    switch(priority) {
      case 'high': return 'Obligatoire'
      case 'medium': return 'Recommandé'
      case 'low': return 'Conseil'
      default: return ''
    }
  }

  return (
    <>
      <SeoHelmet
        title="Hygiène et Sécurité | SLAMM MMA Saint-Lunaire"
        description="Règles d'hygiène et protocoles de sécurité pour la pratique du MMA au club SLAMM Saint-Lunaire, Côte d'Émeraude."
        url="https://mma-saint-lunaire.fr/hygiene"
        keywords="hygiène MMA Saint-Lunaire, sécurité club MMA Dinard, protocole sanitaire dojo Saint-Malo, règles hygiène arts martiaux Bretagne"
      />

      <Box
        sx={{
          mt: 4,
          px: 3,
          maxWidth: 1200,
          mx: 'auto',
          width: '100%',
          mb: 10,
        }}
      >
        <Box component="header" sx={{ borderBottom: '4px solid', borderColor: 'primary.main', pb: 2 }}>
          <Typography variant="h1" sx={{ letterSpacing: '-1px' }}>
            Hygiène & Sécurité Sanitaire
          </Typography>
          <Typography variant="body1" mt={1} maxWidth={1000}>
            Pour la santé et le bien-être de tous nos pratiquants, le respect de ces règles d'hygiène est essentiel dans la pratique du MMA.
          </Typography>
        </Box>

        <Alert 
          severity="warning" 
          icon={<WarningIcon />}
          sx={{ mt: 4, mb: 4 }}
        >
          <Typography variant="body2" fontWeight="medium">
            Le non-respect des règles d'hygiène peut entraîner l'exclusion temporaire ou définitive des entraînements pour préserver la santé de la communauté.
          </Typography>
        </Alert>

        <Box mt={6}>
          <Typography
            variant="h2"
            mb={3}
            sx={{
              borderBottom: '2px solid',
              borderColor: 'primary.main',
              display: 'inline-block',
            }}
          >
            Règles d'hygiène par catégorie
          </Typography>

          {hygieneRules.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {category.icon}
                <Typography variant="h3" sx={{ ml: 1, fontWeight: 600 }}>
                  {category.category}
                </Typography>
              </Box>
              
              {category.rules.map((rule, ruleIndex) => {
                const panelId = `panel-${categoryIndex}-${ruleIndex}`
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
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                        <Typography fontWeight="medium" sx={{ flex: 1 }}>
                          {rule.title}
                        </Typography>
                        <Chip
                          label={getPriorityLabel(rule.priority)}
                          color={getPriorityColor(rule.priority)}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ lineHeight: 1.7 }}>
                        {rule.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 6, borderColor: 'primary.main', borderWidth: 1 }} />

        <Box>
          <Typography
            variant="h2"
            mb={3}
            sx={{
              borderBottom: '2px solid',
              borderColor: 'primary.main',
              display: 'inline-block',
            }}
          >
            Mesures du club SLAMM
          </Typography>
          
          <Typography variant="body1" mb={3}>
            En complément de l'entretien assuré par la mairie de Saint-Lunaire, le club SLAMM applique ses propres mesures d'hygiène :
          </Typography>

          <Box sx={{ display: 'grid', gap: 2 }}>
            {clubMeasures.map((measure, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  {measure}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Alert
          severity="info"
          icon={<HealthAndSafetyIcon />}
          sx={{ mt: 6 }}
        >
          <Typography variant="body2">
            <strong>En cas de doute :</strong> N'hésite pas à consulter nos encadrants pour toute question concernant l'hygiène ou les protocoles sanitaires. Ta santé et celle de tes partenaires d'entraînement sont notre priorité.
          </Typography>
        </Alert>
      </Box>
    </>
  )
}