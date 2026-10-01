const ADMIN_PASSWORD = "admin123";
const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "pediatrie-aso-asi-2024",
      "title": "Pédiatrie ASO ASI 2024",
      "matter": "Pédiatrie",
      "description": "120 questions : QCD et deux séries de QCM.",
      "instructions": "Répondez aux QCD puis aux deux séries de QCM. Respectez le nombre de bonnes réponses indiqué dans chaque question. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM et absence de réponse : 0.",
      "duration": 30,
      "programmed": true,
      "openDate": "2026-01-01",
      "openTime": "00:00",
      "closeDate": "2030-12-31",
      "closeTime": "23:59",
      "marking": {
        "correct": 1,
        "wrong": -1,
        "empty": 0
      },
      "questions": [
        {
          "id": "pediatrie-as-1",
          "type": "qcd",
          "text": "QCD · Question 1\nLes signes suivants peuvent évoquer une fièvre chez l’enfant : frissons, augmentation de la température, agitation ou prostration, modification de la couleur des téguments, cri, pâleur et douleur.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Ces manifestations peuvent accompagner la fièvre, sans être toutes présentes ni spécifiques. La température doit être mesurée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 3 (énoncé).Documentation AS : pediatrie.pdf, pages 47–48 du PDF.",
          "section": "QCD",
          "originalNumber": 1,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-2",
          "type": "qcd",
          "text": "QCD · Question 2\nDans la subdivision de ce diaporama, le petit prématuré naît entre 34 SA et 36 SA + 6 jours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Selon la subdivision du diaporama, le petit prématuré correspond à la prématurité tardive : de 34 SA à moins de 37 SA. À 37 SA révolues, il n’est plus prématuré.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 3 (énoncé).Documentation AS : pediatrie.pdf, pages 34 du PDF.Organisation mondiale de la Santé, Preterm birth. https://www.who.int/news-room/fact-sheets/detail/preterm-birth Documentation DE : Pédiatrie L1.pdf, pages 63 du PDF.",
          "section": "QCD",
          "originalNumber": 2,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-3",
          "type": "qcd",
          "text": "QCD · Question 3\nLa détresse respiratoire est une insuffisance respiratoire aigüe s’accompagnant d’une anoxie et des troubles métaboliques chez le nouveau-né",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Une détresse respiratoire est reconnue par des signes de difficulté respiratoire. Elle peut entraîner une hypoxémie puis des troubles métaboliques, mais l’anoxie complète n’est pas obligatoire pour la définir.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 3 (énoncé).Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCD",
          "originalNumber": 3,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-4",
          "type": "qcd",
          "text": "QCD · Question 4\nLe score de Silverman permet d’apprécier la gravité de la détresse respiratoire",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il apprécie la sévérité des signes de lutte respiratoire ; cinq éléments cotés de 0 à 2 donnent un total de 0 à 10.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 3 (énoncé).Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCD",
          "originalNumber": 4,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-5",
          "type": "qcd",
          "text": "QCD · Question 5\nSelon la classification du cours AS, la diarrhée chronique évolue depuis plus de 21 jours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours AS définit la diarrhée chronique au-delà de 21 jours. Cette limite est pédagogique : l’OMS définit une diarrhée persistante à partir de 14 jours, sans borne supérieure de 21 jours.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 6 (énoncé).Documentation AS : pediatrie.pdf, pages 55 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 5,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-6",
          "type": "qcd",
          "text": "QCD · Question 6\nLe vomissement désigne le rejet par la bouche d’une partie ou de la totalité du contenu gastrique avec ou non la participation des muscles abdominaux, du diaphragme et des muscles du thorax",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le vomissement est une expulsion active du contenu gastrique. Un rejet passif sans contractions correspond plutôt à une régurgitation.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 6 (énoncé).Documentation AS : pediatrie.pdf, pages 58 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 167–169 du PDF.",
          "section": "QCD",
          "originalNumber": 6,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-7",
          "type": "qcd",
          "text": "QCD · Question 7\nLa réhydratation orale est un volet du traitement curatif de la diarrhée chez l’enfant",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La réhydratation orale remplace l’eau et les électrolytes perdus ; la voie de réhydratation dépend de l’état clinique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 6 (énoncé).Documentation AS : pediatrie.pdf, pages 56–57 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 7,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-8",
          "type": "qcd",
          "text": "QCD · Question 8\nLes vomissements sont des rejets volontaires par la bouche de la totalité ou d’une partie du contenu gastrique",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les vomissements sont habituellement involontaires ; « volontaires » doit être remplacé par « involontaires ».",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 6 (énoncé).Documentation AS : pediatrie.pdf, pages 58 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 167–169 du PDF.",
          "section": "QCD",
          "originalNumber": 8,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-9",
          "type": "qcd",
          "text": "QCD · Question 9\nDans le cours DE, l’âge inférieur à trois mois est classé comme facteur environnemental des infections respiratoires aiguës.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours DE classe l’âge inférieur à trois mois parmi les facteurs de gravité liés à l’enfant. Il ne s’agit pas d’un facteur environnemental.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 9 (énoncé).Documentation DE : Pédiatrie L2.pdf, page imprimée 97, page 98 du PDF, facteurs favorisants et facteurs de gravité.",
          "section": "QCD",
          "originalNumber": 9,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-10",
          "type": "qcd",
          "text": "QCD · Question 10\nLes indicateurs de croissance permettent de suivre le développement somatique de l’enfant à partir de 1 an jusqu’à l’adolescence.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La surveillance commence dès la naissance, et non à partir d’un an.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 9 (énoncé).Documentation AS : pediatrie.pdf, pages 9 du PDF.",
          "section": "QCD",
          "originalNumber": 10,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-11",
          "type": "qcd",
          "text": "QCD · Question 11\nLa fièvre est définie comme une élévation de la température corporelle au-dessus de 37º5 Celsius le matin et 39º Celsius le soir",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "39 °C le soir n’est pas le seuil de définition de la fièvre. Le support AS indique plus de 37,5 °C le matin et 38 °C le soir ; en pratique pédiatrique actuelle, le repère usuel est une température d’au moins 38 °C, avec méthode de mesure précisée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 9 (énoncé).Documentation AS : pediatrie.pdf, pages 47 du PDF.National Institute for Health and Care Excellence, Fever in under 5s: assessment and initial management, NG143, recommandations. https://www.nice.org.uk/guidance/ng143/chapter/recommendations",
          "section": "QCD",
          "originalNumber": 11,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-12",
          "type": "qcd",
          "text": "QCD · Question 12\nLe poids moyen à la naissance d’un nouveau-né à terme est de 4,5 kg.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’expression « en moyenne 3 kg et 4,5 kg » est incohérente. Le poids moyen d’un nouveau-né à terme est de l’ordre de 3 à 3,5 kg ; 4,5 kg ne représente pas une moyenne.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 9 (énoncé).Documentation DE : Pédiatrie L1.pdf, pages 32, 130 du PDF.",
          "section": "QCD",
          "originalNumber": 12,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-13",
          "type": "qcd",
          "text": "QCD · Question 13\nParmi les mensurations citées dans le cours AS, les indicateurs de croissance sont au nombre de quatre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours AS cite cinq mensurations : poids, taille, périmètres crânien, thoracique et brachial. Il ne s’agit pas du nombre universel de tous les indicateurs possibles.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 13 (énoncé).Documentation AS : pediatrie.pdf, pages 9 du PDF.",
          "section": "QCD",
          "originalNumber": 13,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-14",
          "type": "qcd",
          "text": "QCD · Question 14\nLe pèse-bébé doit être nettoyé avec un antiseptique entre deux pesées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le principe du nettoyage entre les enfants est correct ; pour une balance, on choisit un produit de nettoyage/désinfection compatible avec le matériel. L’antisepsie concerne les tissus vivants.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 13 (énoncé).Documentation AS : pediatrie.pdf, pages 10–11 du PDF.Centers for Disease Control and Prevention, Recommendations for Environmental Infection Control in Health-Care Facilities, entretien du matériel non critique. https://www.cdc.gov/infection-control/hcp/environmental-control/recommendations.html",
          "section": "QCD",
          "originalNumber": 14,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-15",
          "type": "qcd",
          "text": "QCD · Question 15\nEn début de tétée, pendant la mise au sein, le lait est riche en eau et en sucre",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le lait de début de tétée est riche en eau et contient du lactose ; sa teneur en graisses tend à augmenter au cours de la tétée. Il ne s’agit pas de deux laits totalement distincts.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 13 (énoncé).Documentation AS : pediatrie.pdf, pages 73 du PDF.",
          "section": "QCD",
          "originalNumber": 15,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-16",
          "type": "qcd",
          "text": "QCD · Question 16\nIl ne faut pas déshabiller l’enfant avant de le peser",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Pour une mesure fiable chez le nourrisson, on le pèse nu, après avoir taré le linge de protection, tout en évitant le refroidissement et les chutes.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 13 (énoncé).Documentation AS : pediatrie.pdf, pages 11 du PDF.",
          "section": "QCD",
          "originalNumber": 16,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-17",
          "type": "qcd",
          "text": "QCD · Question 17\nLa taille d’un enfant de 1 an est 93 cm",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "À un an, le repère du support est environ 70 à 75 cm ; 93 cm est associé à environ trois ans. Les mensurations doivent être interprétées sur une courbe.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 13 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositives 11 et 17 ; Documentation DE : Pédiatrie L1.pdf, pages 130 du PDF.",
          "section": "QCD",
          "originalNumber": 17,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-18",
          "type": "qcd",
          "text": "QCD · Question 18\nÀ 3 mois et demi, un nourrisson allaité doit être limité à cinq tétées par jour.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’allaitement maternel est proposé à la demande. Le nombre de cinq repas du tableau correspond à un rythme programmé et ne doit pas limiter les tétées d’un nourrisson allaité.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 18 (énoncé).Documentation AS : pediatrie.pdf, pages 69–74 du PDF.Organisation mondiale de la Santé, Breastfeeding, allaitement à la demande. https://www.who.int/health-topics/breastfeeding",
          "section": "QCD",
          "originalNumber": 18,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-19",
          "type": "qcd",
          "text": "QCD · Question 19\nLa diarrhée aigue est une diarrhée qui évolue de plus de 14 jours",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Une diarrhée aiguë dure moins de 14 jours. À partir de 14 jours, elle est persistante selon l’OMS.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 18 (énoncé).Documentation AS : pediatrie.pdf, pages 55 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 19,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-20",
          "type": "qcd",
          "text": "QCD · Question 20\nPour le dépistage standardisé de la malnutrition aiguë chez l’enfant de 6 à 59 mois, le périmètre brachial est utilisé à partir de six mois.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le périmètre brachial est utilisé pour le dépistage standardisé de la malnutrition aiguë chez les enfants de 6 à 59 mois. Cela ne signifie pas qu’il est physiquement impossible de le mesurer avant six mois.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 18 (énoncé).Documentation AS : pediatrie.pdf, pages 14–15 du PDF.Organisation mondiale de la Santé, Identification of severe acute malnutrition in children 6–59 months of age. https://www.who.int/tools/elena/interventions/sam-identification",
          "section": "QCD",
          "originalNumber": 20,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-21",
          "type": "qcd",
          "text": "QCD · Question 21\nLa dénutrition est une complication des vomissements aigus du nourrisson",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Des vomissements répétés ou prolongés diminuent les apports et peuvent entraîner une dénutrition ; une déshydratation peut survenir plus rapidement. Une dénutrition n’est pas automatique après quelques vomissements.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 18 (énoncé).Documentation AS : pediatrie.pdf, pages 58–60 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 171 du PDF.",
          "section": "QCD",
          "originalNumber": 21,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-22",
          "type": "qcd",
          "text": "QCD · Question 22\nLa diarrhée est définie comme l’émission de plus de trois selles dures ou molles par 24 heures",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La diarrhée correspond à au moins trois selles molles ou liquides en 24 heures, ou à des selles plus fréquentes que d’habitude. Les selles dures ne la définissent pas.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 22 (énoncé).Documentation AS : pediatrie.pdf, pages 55 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 22,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-23",
          "type": "qcd",
          "text": "QCD · Question 23\nL’examen physique systématique des vomissements prend en compte le degré de déshydratation, de dénutrition et d’amaigrissement",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il faut rechercher les conséquences des vomissements : déshydratation, perte de poids et altération nutritionnelle.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 22 (énoncé).Documentation AS : pediatrie.pdf, pages 58–60 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 171 du PDF.",
          "section": "QCD",
          "originalNumber": 23,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-24",
          "type": "qcd",
          "text": "QCD · Question 24\nLa pesée est une technique qui permet de mesurer la croissance pondérale de l’enfant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Des pesées successives permettent de suivre la croissance pondérale ; une pesée isolée donne seulement le poids du jour.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 24 (énoncé).Documentation AS : pediatrie.pdf, pages 9–11 du PDF.",
          "section": "QCD",
          "originalNumber": 24,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-25",
          "type": "qcd",
          "text": "QCD · Question 25\nUn nourrisson né à terme double généralement son poids de naissance vers 4 à 6 mois.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le doublement du poids de naissance autour de cinq mois est un repère moyen, avec des variations individuelles. Il ne dépend pas d’une règle obligatoire opposant lait maternel et préparation pour nourrisson.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 24 (énoncé).Manuel MSD, Nutrition and Feeding in Infants, reprise et doublement du poids. https://www.msdmanuals.com/professional/pediatrics/care-of-newborns-and-infants/nutrition-and-feeding-in-infants",
          "section": "QCD",
          "originalNumber": 25,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-26",
          "type": "qcd",
          "text": "QCD · Question 26\nAvant la pesée d’un nourrisson au pèse-bébé, il faut le déshabiller partiellement et faire la toilette du siège, si nécessaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours demande de déshabiller complètement le nourrisson et de faire la toilette du siège si nécessaire. Pour un enfant plus grand, des vêtements légers peuvent être tolérés selon la technique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 24 (énoncé).Documentation AS : pediatrie.pdf, pages 11 du PDF.",
          "section": "QCD",
          "originalNumber": 26,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-27",
          "type": "qcd",
          "text": "QCD · Question 27\nLa mesure du périmètre crânien se fait avec une toise.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le périmètre crânien se mesure avec un mètre ruban non extensible ; la toise sert à la longueur/taille.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 26 (énoncé).Documentation AS : pediatrie.pdf, pages 13–14 du PDF.",
          "section": "QCD",
          "originalNumber": 27,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-28",
          "type": "qcd",
          "text": "QCD · Question 28\nPendant l’épisode de diarrhée, il faut conseiller la mère de poursuivre l’alimentation",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "L’allaitement et une alimentation adaptée doivent être poursuivis pour limiter la dénutrition.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 26 (énoncé).Documentation AS : pediatrie.pdf, pages 57 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 28,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-29",
          "type": "qcd",
          "text": "QCD · Question 29\nLa détresse respiratoire du nouveau-né est la difficulté pour le nouveau-né de respirer",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle se manifeste par une difficulté respiratoire ; les signes de lutte et l’état du nouveau-né doivent être évalués.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 26 (énoncé).Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCD",
          "originalNumber": 29,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-30",
          "type": "qcd",
          "text": "QCD · Question 30\nLa pédiatrie est la branche de la Médecine qui s’occupe uniquement du traitement curatif des maladies des enfants jusqu’à l’âge de 21 ans",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La pédiatrie comprend prévention, suivi du développement, diagnostic et traitement. « Uniquement curatif » rend l’affirmation fausse ; la limite d’âge varie selon les services.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 26 (énoncé).Documentation AS : pediatrie.pdf, pages 4 du PDF.",
          "section": "QCD",
          "originalNumber": 30,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-31",
          "type": "qcd",
          "text": "QCD · Question 31\nLa fièvre est définie comme une élévation de la température corporelle au-dessus de 37º5 Celsius le matin et 39º 5 Celsius le soir",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le seuil de 39,5 °C le soir n’est pas une définition correcte. Voir la distinction entre le seuil du support et le repère actuel d’au moins 38 °C.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 28 (énoncé).Documentation AS : pediatrie.pdf, pages 47 du PDF.National Institute for Health and Care Excellence, Fever in under 5s: assessment and initial management, NG143, recommandations. https://www.nice.org.uk/guidance/ng143/chapter/recommendations",
          "section": "QCD",
          "originalNumber": 31,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-32",
          "type": "qcd",
          "text": "QCD · Question 32\nL’extraction manuelle est plus sûre et comporte plus de risques d’infection que l’extraction par pompe",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le risque infectieux dépend de l’hygiène des mains, du récipient et du matériel. L’expression manuelle n’entraîne pas, par principe, davantage d’infections ; la pompe doit être correctement nettoyée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 28 (énoncé).Documentation AS : pediatrie.pdf, pages 75–76 du PDF.",
          "section": "QCD",
          "originalNumber": 32,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-33",
          "type": "qcd",
          "text": "QCD · Question 33\nÀ 8 mois et demi, le nombre de prises alimentaires doit tenir compte du lait reçu et des repas complémentaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Après six mois, le nombre de prises alimentaires dépend de l’allaitement ou du lait de remplacement et des repas complémentaires. Un nombre fixe de quatre repas doit préciser ce qui est compté.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 28 (énoncé).Documentation AS : pediatrie.pdf, pages 69–74, 86–89 du PDF.Organisation mondiale de la Santé, Alimentation du nourrisson et du jeune enfant. https://www.who.int/fr/news-room/fact-sheets/detail/infant-and-young-child-feeding",
          "section": "QCD",
          "originalNumber": 33,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-34",
          "type": "qcd",
          "text": "QCD · Question 34\nLa pédiatrie est la branche de la Médecine qui s’occupe uniquement du traitement curatif des maladies des enfants jusqu’à l’âge de 21 ans",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Même affirmation que la QCD 30 : la pédiatrie comporte aussi des soins préventifs et le suivi du développement.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 31 (énoncé).Documentation AS : pediatrie.pdf, pages 4 du PDF.",
          "section": "QCD",
          "originalNumber": 34,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-35",
          "type": "qcd",
          "text": "QCD · Question 35\nÀ la naissance, le poids moyen d’un nouveau-né à terme est de l’ordre de 3 à 3,5 kg.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il s’agit d’un ordre de grandeur moyen chez le nouveau-né à terme, pas d’une norme exclusive pour chaque enfant.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 31 (énoncé).Documentation DE : Pédiatrie L1.pdf, pages 32, 130 du PDF.",
          "section": "QCD",
          "originalNumber": 35,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-36",
          "type": "qcd",
          "text": "QCD · Question 36\nCertains antibiotiques font partie des causes médicamenteuses possibles de vomissements aigus du nourrisson.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Certains antibiotiques peuvent provoquer des nausées ou vomissements comme effet indésirable ; ils ne provoquent pas tous systématiquement ce symptôme.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 31 (énoncé).Connaissance pharmacologique vérifiée : National Health Service, Antibiotics — Side effects. https://www.nhs.uk/medicines/antibiotics/side-effects/",
          "section": "QCD",
          "originalNumber": 36,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-37",
          "type": "qcd",
          "text": "QCD · Question 37\nL’enfant né à terme et correctement nourri au substitut du lait maternel (lait artificiel) double son poids de naissance à 3 mois",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le doublement à trois mois n’est pas une échéance imposée aux nourrissons nourris avec une préparation. Le repère général est autour de cinq mois, avec variabilité individuelle.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 31 (énoncé).Manuel MSD, Nutrition and Feeding in Infants, reprise et doublement du poids. https://www.msdmanuals.com/professional/pediatrics/care-of-newborns-and-infants/nutrition-and-feeding-in-infants",
          "section": "QCD",
          "originalNumber": 37,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-38",
          "type": "qcd",
          "text": "QCD · Question 38\nUn nouveau-né d’une semaine, nourri au sein qui émet quatre (4) selles par jour, souffre d’une diarrhée",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Chez un nouveau-né allaité, quatre selles par jour peuvent être normales. Il faut apprécier leur aspect, une modification par rapport à l’habitude et l’état de l’enfant.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).Documentation AS : pediatrie.pdf, pages 56 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 38,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-39",
          "type": "qcd",
          "text": "QCD · Question 39\nLa fontanelle postérieure de l’enfant se ferme à 12 mois",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La fontanelle postérieure se ferme dans les premiers mois ; le cours DE indique 2–3 mois, et non 12 mois.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).Documentation DE : Pédiatrie L1.pdf, pages 134 du PDF.",
          "section": "QCD",
          "originalNumber": 39,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-40",
          "type": "qcd",
          "text": "QCD · Question 40\nUn nouveau-né d’une semaine, nourri au sein qui émet quatre (4) selles par jour, souffre d’une diarrhée",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Même situation que la QCD 38 : la fréquence seule ne permet pas d’affirmer une diarrhée chez un nouveau-né allaité.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).Documentation AS : pediatrie.pdf, pages 56 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCD",
          "originalNumber": 40,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-41",
          "type": "qcd",
          "text": "QCD · Question 42\nÀ 3 ans, l’enfant a une taille entre 85 à 86 cm",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "85–86 cm correspond approximativement à deux ans dans le support. À trois ans, le repère est environ 93–95 cm.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositives 35–36 ; Documentation DE : Pédiatrie L1.pdf, pages 130 du PDF.",
          "section": "QCD",
          "originalNumber": 42,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-42",
          "type": "qcd",
          "text": "QCD · Question 43\nLa vomique comme les vomissements est une expectoration brutale par la bouche de pus ou de sérosité provenant des voies respiratoires",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La vomique est l’expulsion de pus ou de liquide provenant des voies respiratoires. Le vomissement expulse du contenu digestif.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).Documentation AS : pediatrie.pdf, pages 58 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 169 du PDF.",
          "section": "QCD",
          "originalNumber": 43,
          "answer": "Faux"
        },
        {
          "id": "pediatrie-as-43",
          "type": "qcd",
          "text": "QCD · Question 44\nLa dénutrition est une complication des vomissements aigus du nourrisson",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Des vomissements répétés peuvent altérer les apports et entraîner une dénutrition.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 33 (énoncé).Documentation AS : pediatrie.pdf, pages 58–60 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 171 du PDF.",
          "section": "QCD",
          "originalNumber": 44,
          "answer": "Vrai"
        },
        {
          "id": "pediatrie-as-44",
          "type": "qcm",
          "text": "QCM Première série · Question 22\nParmi les facteurs liés au contexte des repas cités dans le cours AS, lequel peut être retrouvé à l’interrogatoire devant des vomissements ?\nChoisir la bonne réponse.",
          "options": [
            "Un bon régime alimentaire",
            "Une mauvaise relation mère-enfant au moment de la toilette",
            "Une anxiété excessive",
            "Une intolérance au lait de femme"
          ],
          "correct": "Une anxiété excessive",
          "explanation": "Le cours classe cette situation parmi les facteurs associés à l’alimentation ; c’est davantage un facteur relationnel que diététique au sens strict.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 38 (énoncé).Documentation AS : pediatrie.pdf, pages 59 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 22,
          "answer": "Une anxiété excessive"
        },
        {
          "id": "pediatrie-as-45",
          "type": "qcm",
          "text": "QCM Première série · Question 23\nLe traitement préventif de la diarrhée consiste à\nChoisir les 2 bonnes réponses.",
          "options": [
            "Faire la promotion de l’allaitement maternel.",
            "Améliorer uniquement l’hygiène buccale.",
            "Observer une bonne hygiène du milieu.",
            "Déparasiter systématiquement tous les enfants dès huit mois."
          ],
          "correct": [
            "Faire la promotion de l’allaitement maternel.",
            "Observer une bonne hygiène du milieu."
          ],
          "explanation": "La promotion de l’allaitement maternel et les règles d’hygiène lors de la préparation des aliments contribuent à prévenir les diarrhées. En cas de diarrhée, poursuivre une alimentation adaptée et corriger la déshydratation.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 40 (énoncé).Documentation AS : pediatrie.pdf, pages 56–57 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCM Première série",
          "originalNumber": 23,
          "answers": [
            "Faire la promotion de l’allaitement maternel.",
            "Observer une bonne hygiène du milieu."
          ]
        },
        {
          "id": "pediatrie-as-46",
          "type": "qcm",
          "text": "QCM Première série · Question 24\nParmi ces propositions, choisir les deux conséquences nutritionnelles de vomissements répétés.\nChoisir les 2 bonnes réponses.",
          "options": [
            "Une réhydratation",
            "Une malnutrition",
            "Convulsions",
            "Une dénutrition",
            "Une mauvaise relation mère-enfant au moment de l’alimentation"
          ],
          "correct": [
            "Une malnutrition",
            "Une dénutrition"
          ],
          "explanation": "Les vomissements répétés réduisent les apports et peuvent entraîner une malnutrition par déficit, appelée dénutrition. Les convulsions sont une complication neurologique possible, pas une conséquence nutritionnelle.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 42 (énoncé).Documentation AS : pediatrie.pdf, pages 58–60 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 171 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 24,
          "answers": [
            "Une malnutrition",
            "Une dénutrition"
          ]
        },
        {
          "id": "pediatrie-as-47",
          "type": "qcm",
          "text": "QCM Première série · Question 25\nLa technique de mesure du périmètre brachial consiste à\nChoisir la bonne réponse.",
          "options": [
            "Faire le tour du bras à mi-distance entre le coude et le poignet",
            "Mesurer le bras de l’enfant de l’épaule au coude",
            "Faire le tour du bras a mi-distance entre le coude et l’épaule"
          ],
          "correct": "Faire le tour du bras a mi-distance entre le coude et l’épaule",
          "explanation": "Le ruban entoure le bras à mi-distance entre l’épaule et le coude, sans comprimer les tissus.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 44 (énoncé).Documentation AS : pediatrie.pdf, pages 15 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 25,
          "answer": "Faire le tour du bras a mi-distance entre le coude et l’épaule"
        },
        {
          "id": "pediatrie-as-48",
          "type": "qcm",
          "text": "QCM Première série · Question 26\nLe but de la mesure du périmètre crânien est\nChoisir la bonne réponse.",
          "options": [
            "Suivre la croissance crânienne et dépister une anomalie.",
            "Dépister un spina bifida.",
            "Apprécier une bosse sérosanguine"
          ],
          "correct": "Suivre la croissance crânienne et dépister une anomalie.",
          "explanation": "Le périmètre crânien suit la croissance de la tête et contribue au dépistage d’anomalies ; il ne mesure pas directement le volume cérébral.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 46 (énoncé).Documentation AS : pediatrie.pdf, pages 13–14 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 26,
          "answer": "Suivre la croissance crânienne et dépister une anomalie."
        },
        {
          "id": "pediatrie-as-49",
          "type": "qcm",
          "text": "QCM Première série · Question 28\nLa technique de pesée consiste à\nChoisir les 3 bonnes réponses.",
          "options": [
            "Installer l’enfant dans la position adaptée à son âge et à la balance, en présence d’une personne familière.",
            "Maintenir l’enfant",
            "Repérer le poids",
            "Lire le poids lorsque l’indicateur de la balance se stabilise, puis l’inscrire immédiatement."
          ],
          "correct": [
            "Installer l’enfant dans la position adaptée à son âge et à la balance, en présence d’une personne familière.",
            "Repérer le poids",
            "Lire le poids lorsque l’indicateur de la balance se stabilise, puis l’inscrire immédiatement."
          ],
          "explanation": "Installer l’enfant correctement, lire une valeur stable et la noter permettent une pesée fiable. Ne pas exercer de pression sur l’enfant pendant la lecture.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 49 (énoncé).Documentation AS : pediatrie.pdf, pages 11 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 28,
          "answers": [
            "Installer l’enfant dans la position adaptée à son âge et à la balance, en présence d’une personne familière.",
            "Repérer le poids",
            "Lire le poids lorsque l’indicateur de la balance se stabilise, puis l’inscrire immédiatement."
          ]
        },
        {
          "id": "pediatrie-as-50",
          "type": "qcm",
          "text": "QCM Première série · Question 29\nLes buts de la pesée sont\nChoisir les 2 bonnes réponses.",
          "options": [
            "Suivre l’évolution de la courbe de poids.",
            "Dépister une pathologie et enrayer l’évolution",
            "Faire une réanimation"
          ],
          "correct": [
            "Suivre l’évolution de la courbe de poids.",
            "Dépister une pathologie et enrayer l’évolution"
          ],
          "explanation": "La pesée suit la croissance pondérale et aide à repérer une anomalie nécessitant une prise en charge.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 51 (énoncé).Documentation AS : pediatrie.pdf, pages 10 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 29,
          "answers": [
            "Suivre l’évolution de la courbe de poids.",
            "Dépister une pathologie et enrayer l’évolution"
          ]
        },
        {
          "id": "pediatrie-as-51",
          "type": "qcm",
          "text": "QCM Première série · Question 30\nParmi ces propositions, choisir deux causes possibles de fièvre ou d’élévation thermique.\nChoisir les 2 bonnes réponses.",
          "options": [
            "Toutes les maladies viscérales, sans exception.",
            "Certaines infections bactériennes.",
            "Une déshydratation aiguë importante."
          ],
          "correct": [
            "Certaines infections bactériennes.",
            "Une déshydratation aiguë importante."
          ],
          "explanation": "Certaines infections bactériennes provoquent une fièvre. Une déshydratation importante peut s’accompagner d’une élévation thermique. Toutes les maladies viscérales ne provoquent pas systématiquement une fièvre.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 53 (énoncé).Documentation AS : pediatrie.pdf, pages 47 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 30,
          "answers": [
            "Certaines infections bactériennes.",
            "Une déshydratation aiguë importante."
          ]
        },
        {
          "id": "pediatrie-as-52",
          "type": "qcm",
          "text": "QCM Première série · Question 31\nLe score de Silverman est coté de\nChoisir la bonne réponse.",
          "options": [
            "De 0 à 2",
            "De 0 à 8",
            "De 0 à 10",
            "De 1 à 2"
          ],
          "correct": "De 0 à 10",
          "explanation": "Le total résulte de cinq signes cotés chacun 0, 1 ou 2. La diapositive de réponse 56 indique à tort « de 2 à 10 ».",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 55 (énoncé).Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCM Première série",
          "originalNumber": 31,
          "answer": "De 0 à 10"
        },
        {
          "id": "pediatrie-as-53",
          "type": "qcm",
          "text": "QCM Première série · Question 32\nChoisir deux causes directement liées à l’utilisation ou à la composition du lait préparé au biberon.\nChoisir les 2 bonnes réponses.",
          "options": [
            "Au manque d’hygiene",
            "A une intolérance au substitut du lait de mère",
            "Au lavements coutumiers aux piments ou aux plantes",
            "À une intolérance au lait de mère"
          ],
          "correct": [
            "Au manque d’hygiene",
            "A une intolérance au substitut du lait de mère"
          ],
          "explanation": "Une contamination et une intolérance à la préparation peuvent provoquer une diarrhée. Les lavements irritants de C peuvent également provoquer des troubles, indépendamment du biberon.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 57 (énoncé).Documentation AS : pediatrie.pdf, pages 56 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 32,
          "answers": [
            "Au manque d’hygiene",
            "A une intolérance au substitut du lait de mère"
          ]
        },
        {
          "id": "pediatrie-as-54",
          "type": "qcm",
          "text": "QCM Première série · Question 33\nSelon la subdivision du diaporama ASO–ASI 2024, quel intervalle correspond au moyen prématuré ?\nChoisir la bonne réponse.",
          "options": [
            "De 22 - 25 semaines d’aménorrhée",
            "De 25 - 27 semaines d’aménorrhée",
            "De 28 - 32 semaines d’aménorrhée",
            "De 32 SA à moins de 34 SA."
          ],
          "correct": "De 32 SA à moins de 34 SA.",
          "explanation": "Le diaporama distingue moyen prématuré 32–34 et petit prématuré 34–37. Le cours DE utilise d’autres bornes ; la classification doit être nommée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 59 (énoncé).Documentation AS : pediatrie.pdf, pages 34 du PDF.RÉVISION ASO ASI 2024.pptx, diapositives 5 et 61 ; Organisation mondiale de la Santé, Preterm birth. https://www.who.int/news-room/fact-sheets/detail/preterm-birth",
          "section": "QCM Première série",
          "originalNumber": 33,
          "answer": "De 32 SA à moins de 34 SA."
        },
        {
          "id": "pediatrie-as-55",
          "type": "qcm",
          "text": "QCM Première série · Question 34\nSelon la classification du cours AS, quand une fièvre est-elle dite chronique ?\nChoisir la bonne réponse.",
          "options": [
            "Une élévation de la température corporelle au-dessus de la normale depuis une semaine et moins d’un mois",
            "Une élévation de la température corporelle au-dessus de la normale depuis moins d’un mois",
            "Une élévation de la température corporelle au-dessus de la normale depuis plus d’un mois"
          ],
          "correct": "Une élévation de la température corporelle au-dessus de la normale depuis plus d’un mois",
          "explanation": "C’est la définition de la fièvre au long cours ou chronique dans le cours AS.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 62 (énoncé).Documentation AS : pediatrie.pdf, pages 47 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 34,
          "answer": "Une élévation de la température corporelle au-dessus de la normale depuis plus d’un mois"
        },
        {
          "id": "pediatrie-as-56",
          "type": "qcm",
          "text": "QCM Première série · Question 35\nSelon l’OMS, quelle est la limite de l’extrême prématurité ?\nChoisir la bonne réponse.",
          "options": [
            "Moins de 28 SA.",
            "De 28 SA à moins de 32 SA.",
            "De 32 SA à moins de 37 SA.",
            "À partir de 37 SA."
          ],
          "correct": "Moins de 28 SA.",
          "explanation": "L’OMS définit l’extrême prématurité par une naissance avant 28 semaines d’aménorrhée. Les subdivisions du diaporama emploient d’autres appellations.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 65 (énoncé).Documentation AS : pediatrie.pdf, pages 34 du PDF.Organisation mondiale de la Santé, Preterm birth. https://www.who.int/news-room/fact-sheets/detail/preterm-birth",
          "section": "QCM Première série",
          "originalNumber": 35,
          "answer": "Moins de 28 SA."
        },
        {
          "id": "pediatrie-as-57",
          "type": "qcm",
          "text": "QCM Première série · Question 36\nQuel terme général regroupe notamment les septicémies et les pneumonies néonatales ?\nChoisir la bonne réponse.",
          "options": [
            "Paludisme",
            "Pneumonie",
            "Infections",
            "Diarrhée"
          ],
          "correct": "Infections",
          "explanation": "Les infections constituent le terme général qui inclut les septicémies et les pneumonies néonatales.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 68 (énoncé).Documentation AS : pediatrie.pdf, pages 5 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 13 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 36,
          "answer": "Infections"
        },
        {
          "id": "pediatrie-as-58",
          "type": "qcm",
          "text": "QCM Première série · Question 37\nParmi ces propositions, quelle est une cause fœtale possible de retard de croissance ?\nChoisir la bonne réponse.",
          "options": [
            "L’anomalie du placenta",
            "L’anomalie chromosomique",
            "Les médicaments."
          ],
          "correct": "L’anomalie chromosomique",
          "explanation": "Elle constitue un facteur fœtal. Une anomalie du placenta est placentaire ; une exposition médicamenteuse est un facteur maternel/environnemental.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 70 (énoncé).Documentation AS : pediatrie.pdf, pages 34–35 du PDF.Connaissance générale : distinction entre causes fœtales, placentaires et maternelles. Le diaporama classe l’anomalie chromosomique comme cause fœtale, diapositive 71 ; aucun passage distinct détaillant cette proposition n’a été confirmé dans le cours AS consulté.",
          "section": "QCM Première série",
          "originalNumber": 37,
          "answer": "L’anomalie chromosomique"
        },
        {
          "id": "pediatrie-as-59",
          "type": "qcm",
          "text": "QCM Première série · Question 38\nLes fonctions principales de l’incubateur sont\nChoisir la bonne réponse.",
          "options": [
            "Maintenir l’enfant dans un environnement thermique adapté.",
            "Assurer la respiration d’un air filtré et sec",
            "Assurer la surveillance paraclinique",
            "Assurer à lui seul la ventilation assistée."
          ],
          "correct": "Maintenir l’enfant dans un environnement thermique adapté.",
          "explanation": "La fonction fondamentale est de maintenir un environnement thermique adapté. L’air est filtré et peut être humidifié ; une assistance ventilatoire nécessite un équipement distinct.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 72 (énoncé).Documentation AS : pediatrie.pdf, pages 44–45 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 38,
          "answer": "Maintenir l’enfant dans un environnement thermique adapté."
        },
        {
          "id": "pediatrie-as-60",
          "type": "qcm",
          "text": "QCM Première série · Question 39\nSelon les incidents répertoriés dans le cours AS, lequel peut survenir à court terme pendant la photothérapie ?\nChoisir la bonne réponse.",
          "options": [
            "Une hypoactivité de l'enfant",
            "Une diminution du transit intestinal",
            "Augmentation de la prise de poids",
            "Une conjonctivite"
          ],
          "correct": "Une conjonctivite",
          "explanation": "Le cours AS cite la conjonctivite parmi les incidents possibles. Il mentionne aussi une accélération, et non une diminution, du transit ; la prise de poids n’est pas systématiquement augmentée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 74 (énoncé).Documentation AS : pediatrie.pdf, pages 42 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 39,
          "answer": "Une conjonctivite"
        },
        {
          "id": "pediatrie-as-61",
          "type": "qcm",
          "text": "QCM Première série · Question 40\nSelon le cours AS, quelle durée d’évolution correspond à l’otite aiguë ?\nChoisir la bonne réponse.",
          "options": [
            "La maladie évolue depuis plus de 15 jours",
            "La maladie évolue depuis moins de 15 jours",
            "Entre 15 et 30 jours.",
            "La maladie évolue depuis plus d’un mois"
          ],
          "correct": "La maladie évolue depuis moins de 15 jours",
          "explanation": "La limite de 15 jours est celle du support. Une classification clinique actuelle des otites ne doit pas être déduite uniquement de cette durée.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 76 (énoncé).Documentation AS : pediatrie.pdf, pages 52 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 40,
          "answer": "La maladie évolue depuis moins de 15 jours"
        },
        {
          "id": "pediatrie-as-62",
          "type": "qcm",
          "text": "QCM Première série · Question 41\nLa diarrhée est définie comme l’émission\nChoisir la bonne réponse.",
          "options": [
            "De plus de trois selles molles ou liquides par 12 heures",
            "Au moins trois selles molles ou liquides en 24 heures, ou davantage que d’habitude.",
            "De plus de trois selles molles ou liquides par 72 heures",
            "De plus de trois selles molles ou liquides par 48 heures"
          ],
          "correct": "Au moins trois selles molles ou liquides en 24 heures, ou davantage que d’habitude.",
          "explanation": "La définition internationale utilise au moins trois selles molles/liquides en 24 heures, ou une fréquence supérieure à l’habitude.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 79 (énoncé).Documentation AS : pediatrie.pdf, pages 55 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCM Première série",
          "originalNumber": 41,
          "answer": "Au moins trois selles molles ou liquides en 24 heures, ou davantage que d’habitude."
        },
        {
          "id": "pediatrie-as-63",
          "type": "qcm",
          "text": "QCM Première série · Question 42\nQuelle proposition décrit un risque de contamination infectieuse du lait préparé au biberon ?\nChoisir la bonne réponse.",
          "options": [
            "L’interruption brutale de l’allaitement maternel",
            "Du changement brutal d’alimentation",
            "La quantité et de la qualité des nouveaux aliments introduits dans l’alimentation",
            "Utiliser une eau contaminée ou préparer le lait sans respecter les règles d’hygiène."
          ],
          "correct": "Utiliser une eau contaminée ou préparer le lait sans respecter les règles d’hygiène.",
          "explanation": "Le problème est une eau contaminée ou une préparation non sûre. Un changement alimentaire brutal peut aussi provoquer des troubles : l’original était trop large.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 81 (énoncé).Documentation AS : pediatrie.pdf, pages 56 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 42,
          "answer": "Utiliser une eau contaminée ou préparer le lait sans respecter les règles d’hygiène."
        },
        {
          "id": "pediatrie-as-64",
          "type": "qcm",
          "text": "QCM Première série · Question 43\nQuel élément appartient aux groupes généraux de malnutrition par excès, défaut ou déséquilibre décrits dans le cours AS ?\nChoisir la bonne réponse.",
          "options": [
            "La malnutrition due a un déséquilibre varié",
            "La malnutrition aigüe sévère avec complications",
            "La malnutrition aigüe sévère sans complications",
            "La malnutrition aigüe modérée"
          ],
          "correct": "La malnutrition due a un déséquilibre varié",
          "explanation": "Le cours distingue les groupes généraux de malnutrition par excès, défaut et déséquilibre. Les propositions B, C et D appartiennent à la classification de la malnutrition aiguë.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 83 (énoncé).Documentation AS : pediatrie.pdf, pages 64–65 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 43,
          "answer": "La malnutrition due a un déséquilibre varié"
        },
        {
          "id": "pediatrie-as-65",
          "type": "qcm",
          "text": "QCM Première série · Question 44\nSelon le cours AS, quel facteur est lié au déroulement des repas dans les vomissements du nourrisson ?\nChoisir la bonne réponse.",
          "options": [
            "Une tolérance au lait de vache",
            "Donner des repas ou des bouillies épaisses",
            "Une mauvaise relation mère – enfant avant les repas",
            "Une mauvaise relation mère – enfant au moment des repas"
          ],
          "correct": "Une mauvaise relation mère – enfant au moment des repas",
          "explanation": "Le cours cite les difficultés relationnelles au moment des repas parmi les facteurs associés. Un repas simplement épais ne suffit pas à prouver la cause.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 86 (énoncé).Documentation AS : pediatrie.pdf, pages 59 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 44,
          "answer": "Une mauvaise relation mère – enfant au moment des repas"
        },
        {
          "id": "pediatrie-as-66",
          "type": "qcm",
          "text": "QCM Première série · Question 45\nSelon le classement du cours AS, quel facteur favorisant l’anémie est lié à l’enfant lui-même ?\nChoisir la bonne réponse.",
          "options": [
            "L’alimentation avec les substituts de lait de mère",
            "Les saignements chroniques occultes",
            "Les erreurs diététiques",
            "Mauvaise conduite de la diversification alimentaire et du sevrage"
          ],
          "correct": "Les saignements chroniques occultes",
          "explanation": "Cette proposition est classée parmi les facteurs liés à l’enfant. Les autres sont classées parmi l’alimentation et l’environnement dans ce cours ; une préparation adaptée enrichie en fer n’entraîne pas à elle seule une anémie.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 88 (énoncé).Documentation AS : pediatrie.pdf, pages 61–62 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 45,
          "answer": "Les saignements chroniques occultes"
        },
        {
          "id": "pediatrie-as-67",
          "type": "qcm",
          "text": "QCM Première série · Question 46\nChez un nourrisson de moins de six mois qui ne reçoit pas de lait maternel, quel aliment de remplacement adapté est utilisé ?\nChoisir la bonne réponse.",
          "options": [
            "Une bouillie seule.",
            "De l’eau sucrée.",
            "Une préparation pour nourrisson adaptée."
          ],
          "correct": "Une préparation pour nourrisson adaptée.",
          "explanation": "Chez le nourrisson de moins de six mois non allaité, une préparation pour nourrisson adaptée constitue l’alimentation de remplacement. Une bouillie seule ou de l’eau sucrée ne couvre pas ses besoins.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 90 (énoncé).Documentation AS : pediatrie.pdf, pages 77–80 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 46,
          "answer": "Une préparation pour nourrisson adaptée."
        },
        {
          "id": "pediatrie-as-68",
          "type": "qcm",
          "text": "QCM Première série · Question 47\nNéonatologie ou Néonatalogie est\nChoisir la bonne réponse.",
          "options": [
            "Étude du nouveau-né normal",
            "Étude du nouveau-né pathologique",
            "Étude du nouveau-né normal ou pathologique"
          ],
          "correct": "Étude du nouveau-né normal ou pathologique",
          "explanation": "La néonatologie s’occupe du nouveau-né normal et pathologique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 92 (énoncé).Documentation AS : pediatrie.pdf, pages 4 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 47,
          "answer": "Étude du nouveau-né normal ou pathologique"
        },
        {
          "id": "pediatrie-as-69",
          "type": "qcm",
          "text": "QCM Première série · Question 48\nNouveau-né eutrophique, c’est\nChoisir la bonne réponse.",
          "options": [
            "Un nouveau-né dont le poids de naissance est supérieur à celui de son âge gestationnel",
            "Un nouveau-né dont le poids de naissance est inférieur à celui de son âge gestationnel",
            "Un nouveau-né dont le poids de naissance est adapté à l’âge gestationnel."
          ],
          "correct": "Un nouveau-né dont le poids de naissance est adapté à l’âge gestationnel.",
          "explanation": "Le poids est adapté à l’âge gestationnel ; il faut le rapporter à une courbe de référence et non comparer directement des kilogrammes à des semaines.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 94 (énoncé).Documentation AS : pediatrie.pdf, pages 34–36 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 48,
          "answer": "Un nouveau-né dont le poids de naissance est adapté à l’âge gestationnel."
        },
        {
          "id": "pediatrie-as-70",
          "type": "qcm",
          "text": "QCM Première série · Question 49\nNouveau-né hypotrophique, c’est\nChoisir la bonne réponse.",
          "options": [
            "Un nouveau-né dont le poids de naissance est supérieur à celui de son âge gestationnel",
            "Un nouveau-né dont le poids de naissance est inférieur à celui attendu pour l’âge gestationnel.",
            "Un nouveau-né dont le poids de naissance correspond à celui de son âge gestationnel"
          ],
          "correct": "Un nouveau-né dont le poids de naissance est inférieur à celui attendu pour l’âge gestationnel.",
          "explanation": "Le poids est insuffisant pour l’âge gestationnel. Un petit poids absolu n’est pas identique à un poids faible pour l’âge gestationnel.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 96 (énoncé).Documentation AS : pediatrie.pdf, pages 34–35 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 49,
          "answer": "Un nouveau-né dont le poids de naissance est inférieur à celui attendu pour l’âge gestationnel."
        },
        {
          "id": "pediatrie-as-71",
          "type": "qcm",
          "text": "QCM Première série · Question 50\nSelon le découpage des âges du cours AS, quelle tranche désigne ici l’enfant préscolaire ?\nChoisir la bonne réponse.",
          "options": [
            "Un enfant dont l’âge est compris entre 3 ans et 4 ans",
            "Un enfant dont l’âge est compris entre 3 ans et 5 ans",
            "Un enfant dont l’âge est compris entre 3 ans et 6 ans",
            "Un enfant dont l’âge est compris entre 3 ans et 7 ans"
          ],
          "correct": "Un enfant dont l’âge est compris entre 3 ans et 5 ans",
          "explanation": "La diapositive 100 et le cours AS indiquent 3–5 ans. Le cours DE indique préscolaire 2–5 ans : les classifications ne concordent pas.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 98 (énoncé).Documentation AS : pediatrie.pdf, pages 5 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 10 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 50,
          "answer": "Un enfant dont l’âge est compris entre 3 ans et 5 ans"
        },
        {
          "id": "pediatrie-as-72",
          "type": "qcm",
          "text": "QCM Première série · Question 51\nJusqu’à quel âge s’étend l’ensemble de soins après la naissance dans la définition élargie de ce cours AS ?\nChoisir la bonne réponse.",
          "options": [
            "La naissance à 3 semaines de vie",
            "La naissance à 4 semaines de vie",
            "La naissance à 5 semaines de vie",
            "La naissance à 6 semaines de vie"
          ],
          "correct": "La naissance à 6 semaines de vie",
          "explanation": "Le support AS définit un ensemble de soins de la naissance à six semaines, puis limite son chapitre aux 90 premières minutes. La période néonatale elle-même dure 28 jours.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 101 (énoncé).Documentation AS : pediatrie.pdf, pages 6 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 51,
          "answer": "La naissance à 6 semaines de vie"
        },
        {
          "id": "pediatrie-as-73",
          "type": "qcm",
          "text": "QCM Première série · Question 52\nSelon le découpage du cours AS, laquelle de ces périodes appartient aux soins immédiats du nouveau-né ?\nChoisir la bonne réponse.",
          "options": [
            "Avant la naissance",
            "De la naissance a une minute de vie",
            "D’une minute à 70 minutes de vie",
            "De 30 minutes à 90 minutes de vie"
          ],
          "correct": "De la naissance a une minute de vie",
          "explanation": "Cette période est explicitement décrite ; les intervalles 1–70 et 30–90 ne correspondent pas au découpage présenté.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 103 (énoncé).Documentation AS : pediatrie.pdf, pages 7–8 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 52,
          "answer": "De la naissance a une minute de vie"
        },
        {
          "id": "pediatrie-as-74",
          "type": "qcm",
          "text": "QCM Première série · Question 53\nAprès la première heure de peau à peau, quel soin prophylactique est prévu par le cours OMS pour l’agent habilité ?\nChoisir la bonne réponse.",
          "options": [
            "Administrer 1 mg de vitamine K par voie intramusculaire selon le protocole.",
            "Instiller 2 gouttes de collyre antiseptique dans chaque œil une seule fois",
            "Aider la mère a mettre le nouveau-né au sein",
            "Sécher le nouveau-né avec un linge propre sec et chaud"
          ],
          "correct": "Administrer 1 mg de vitamine K par voie intramusculaire selon le protocole.",
          "explanation": "Dans le découpage du diaporama, la troisième séquence correspond à 60–90 minutes, après séchage, peau à peau et début d’allaitement. Le cours OMS propose 1 mg de vitamine K par voie intramusculaire après la première heure ; ne pas reprendre une dose en gouttes sans concentration.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 105 (énoncé).Documentation AS : pediatrie.pdf, pages 8 du PDF.Organisation mondiale de la Santé, Essential Newborn Care Course, Examination of the newborn, note sur la vitamine K après la première heure. https://cdn.who.int/media/docs/default-source/mca-documents/nbh/enc-course/modules/8-facilitator-notes-examination-of-the-newborn-16.03.22.pdf",
          "section": "QCM Première série",
          "originalNumber": 53,
          "answer": "Administrer 1 mg de vitamine K par voie intramusculaire selon le protocole."
        },
        {
          "id": "pediatrie-as-75",
          "type": "qcm",
          "text": "QCM Première série · Question 54\nDans les stratégies vaccinales, la notion de poste avancé désigne\nChoisir la bonne réponse.",
          "options": [
            "Activités de vaccination en dehors du centre de santé : 5km - 15km",
            "activités de vaccination en dehors du centre de santé à plus de 15 km",
            "activités de vaccination en dehors du centre de santé à plus de 10 km",
            "activités de vaccination au centre de santé : 5 km"
          ],
          "correct": "Activités de vaccination en dehors du centre de santé : 5km - 15km",
          "explanation": "Le poste avancé implique le déplacement de l’équipe hors du centre ; les seuils indiqués sont ceux du support local.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 112 (énoncé).Documentation AS : pediatrie.pdf, pages 16–17 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 54,
          "answer": "Activités de vaccination en dehors du centre de santé : 5km - 15km"
        },
        {
          "id": "pediatrie-as-76",
          "type": "qcm",
          "text": "QCM Première série · Question 55\nL’enfant prend 15g/j à l’âge de\nChoisir la bonne réponse.",
          "options": [
            "0 à 3 mois",
            "3 à 6 mois",
            "6 à 9 mois",
            "9 à 12 mois"
          ],
          "correct": "6 à 9 mois",
          "explanation": "C’est le repère moyen de gain pondéral fourni : 15 g/jour. Il n’impose pas une prise identique chaque jour.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 115 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositive 118.",
          "section": "QCM Première série",
          "originalNumber": 55,
          "answer": "6 à 9 mois"
        },
        {
          "id": "pediatrie-as-77",
          "type": "qcm",
          "text": "QCM Première série · Question 56\nLe rythme des pesées s’établit comme suit\nChoisir les 2 bonnes réponses.",
          "options": [
            "Une fois par semestre de 13 mois à 24 mois",
            "Une fois par semaine de la naissance a 3 mois",
            "Une fois par mois de 5 mois à 12 mois",
            "Une fois par trimestre de 25 mois à 3 ans"
          ],
          "correct": [
            "Une fois par semaine de la naissance a 3 mois",
            "Une fois par mois de 5 mois à 12 mois"
          ],
          "explanation": "Les deux rythmes sont présents dans le cours : hebdomadaire de 0 à 3 mois et mensuel de 4 à 12 mois. A et D inversent les rythmes trimestriel et semestriel.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 119 (énoncé).Documentation AS : pediatrie.pdf, pages 10 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 56,
          "answers": [
            "Une fois par semaine de la naissance a 3 mois",
            "Une fois par mois de 5 mois à 12 mois"
          ]
        },
        {
          "id": "pediatrie-as-78",
          "type": "qcm",
          "text": "QCM Première série · Question 57\nLa perte de poids physiologique dès les premiers jours de vie est la conséquence de ces éléments sous cités, sauf un, lequel ?",
          "options": [
            "L’élimination du méconium",
            "La déperdition d’eau de la peau",
            "La mise au sein précoce dès les premières heures",
            "Le retard de la montée laiteuse."
          ],
          "correct": "La mise au sein précoce dès les premières heures",
          "explanation": "La mise au sein précoce contribue à limiter la perte pondérale ; elle n’est pas une cause de cette perte.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 122 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositive 117.",
          "section": "QCM Première série",
          "originalNumber": 57,
          "answer": "La mise au sein précoce dès les premières heures"
        },
        {
          "id": "pediatrie-as-79",
          "type": "qcm",
          "text": "QCM Première série · Question 58\nConcernant la mesure du périmètre thoracique, choisir deux affirmations exactes.\nChoisir les 2 bonnes réponses.",
          "options": [
            "Il se mesure avec une toise.",
            "Il se mesure avec un mètre ruban autour du thorax.",
            "Il est toujours égal au périmètre crânien.",
            "Une formule remplace systématiquement la mesure.",
            "Il mesure directement le volume cérébral.",
            "Il permet d’apprécier le développement thoracique."
          ],
          "correct": [
            "Il se mesure avec un mètre ruban autour du thorax.",
            "Il permet d’apprécier le développement thoracique."
          ],
          "explanation": "Le périmètre thoracique se mesure au ruban autour du thorax. Il apprécie son développement ; une formule approximative ne remplace pas la mesure.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 124 (énoncé).Documentation AS : pediatrie.pdf, pages 15 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 58,
          "answers": [
            "Il se mesure avec un mètre ruban autour du thorax.",
            "Il permet d’apprécier le développement thoracique."
          ]
        },
        {
          "id": "pediatrie-as-80",
          "type": "qcm",
          "text": "QCM Première série · Question 59\nLors de la mesure de la longueur de l’enfant en position couchée, que faut-il faire ?\nChoisir la bonne réponse.",
          "options": [
            "Placer la tête près de la planchette supérieure de la toise",
            "Placer la tête près de la planchette inférieure de la toise",
            "L’aide maintient la tête bien droite et les jambes pliées le long de la toise",
            "L’opérateur rapproche la partie supérieure de la toise des talons de l’enfant"
          ],
          "correct": "Placer la tête près de la planchette supérieure de la toise",
          "explanation": "Pour la longueur couchée, la tête est contre la partie fixe supérieure ; les jambes sont doucement étendues et la partie mobile rejoint les talons.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 126 (énoncé).Documentation AS : pediatrie.pdf, pages 12–13 du PDF.",
          "section": "QCM Première série",
          "originalNumber": 59,
          "answer": "Placer la tête près de la planchette supérieure de la toise"
        },
        {
          "id": "pediatrie-as-81",
          "type": "qcm",
          "text": "QCM Première série · Question 60\nLors de la technique de la mesure du Périmètre Crânien, il faut appliquer le mètre ruban en\nChoisir la bonne réponse.",
          "options": [
            "En passant sur les pavillons des oreilles.",
            "En dessous de l’occiput.",
            "Autour du front sans passer par l’occiput.",
            "Au-dessus des sourcils et des oreilles, en passant par la saillie occipitale maximale."
          ],
          "correct": "Au-dessus des sourcils et des oreilles, en passant par la saillie occipitale maximale.",
          "explanation": "Le ruban non extensible passe au-dessus des sourcils et des oreilles, et par la partie la plus saillante de l’occiput, afin de mesurer la circonférence maximale.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 128 (énoncé).Documentation AS : pediatrie.pdf, pages 13–14 du PDF.Centers for Disease Control and Prevention, Measuring Head Circumference, 16 mars 2016, page 1. https://stacks.cdc.gov/view/cdc/38538/cdc_38538_DS1.pdf",
          "section": "QCM Première série",
          "originalNumber": 60,
          "answer": "Au-dessus des sourcils et des oreilles, en passant par la saillie occipitale maximale."
        },
        {
          "id": "pediatrie-as-82",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 22\nLe traitement curatif de la diarrhée comprend les volets suivants\nChoisir la bonne réponse.",
          "options": [
            "La déshydratation",
            "L’alimentation",
            "Les lavements aux médicaments traditionnels pour arrêter la diarrhée"
          ],
          "correct": "L’alimentation",
          "explanation": "La déshydratation est une complication, pas un traitement ; les lavements traditionnels ne sont pas un traitement recommandé. Le traitement comporte notamment réhydratation et alimentation.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 130 (énoncé).Documentation AS : pediatrie.pdf, pages 56–57 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCM Deuxième série",
          "originalNumber": 22,
          "answer": "L’alimentation"
        },
        {
          "id": "pediatrie-as-83",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 23\nLe but de la réhydratation en cas de diarrhée est de\nChoisir la bonne réponse.",
          "options": [
            "Remplacer l’eau et les sels minéraux perdus",
            "Maintenir un bon état de déshydratation jusqu’à la cessation de la diarrhée",
            "Arrêt de l’allaitement"
          ],
          "correct": "Remplacer l’eau et les sels minéraux perdus",
          "explanation": "La réhydratation remplace l’eau et les électrolytes perdus ; elle vise un état d’hydratation normal. L’allaitement ne doit pas être arrêté.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 132 (énoncé).Documentation AS : pediatrie.pdf, pages 57 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCM Deuxième série",
          "originalNumber": 23,
          "answer": "Remplacer l’eau et les sels minéraux perdus"
        },
        {
          "id": "pediatrie-as-84",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 24\nLa mesure du périmètre thoracique a pour but de\nChoisir la bonne réponse.",
          "options": [
            "Apprécier le développement thoracique de l’enfant",
            "Apprécier l’évolution du cerveau de l’enfant",
            "Faire le tour du thorax de l’enfant avec le mètre ruban"
          ],
          "correct": "Apprécier le développement thoracique de l’enfant",
          "explanation": "La mesure apprécie le développement du thorax. C décrit le geste et non son but.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 134 (énoncé).Documentation AS : pediatrie.pdf, pages 15 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 24,
          "answer": "Apprécier le développement thoracique de l’enfant"
        },
        {
          "id": "pediatrie-as-85",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 25\nQuelques précautions à prendre avant la mesure du périmètre brachial sont\nChoisir la bonne réponse.",
          "options": [
            "Saluer la mère",
            "Laisser le bras replier sur l’avant-bras pour faciliter la mesure",
            "Porter les gants propres",
            "Coucher l’enfant en décubitus latéral"
          ],
          "correct": "Saluer la mère",
          "explanation": "Saluer, expliquer le soin et obtenir la coopération font partie de la préparation. Le bras doit être détendu lors de la lecture ; les gants ne sont pas obligatoires pour une mesure sur peau intacte.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 136 (énoncé).Documentation AS : pediatrie.pdf, pages 14–15 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 25,
          "answer": "Saluer la mère"
        },
        {
          "id": "pediatrie-as-86",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 26\nSelon les repères moyens du diaporama, quelles sont les deux propositions exactes sur la taille de l’enfant ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "A la naissance : 49 a 52 cm",
            "A 1 an l’enfant mesure: 70 a 75 cm",
            "A 2 ans l’enfant mesure 93 cm",
            "À quatre ans, la taille moyenne est de 75 cm."
          ],
          "correct": [
            "A la naissance : 49 a 52 cm",
            "A 1 an l’enfant mesure: 70 a 75 cm"
          ],
          "explanation": "Repères du support : environ 49 à 52 cm à la naissance et 70 à 75 cm à un an. À quatre ans, la taille moyenne est de l’ordre de 100 cm, et non de 75 cm. Ces valeurs approximatives doivent être interprétées avec les courbes de croissance.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 138 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositive 140 ; Documentation DE : Pédiatrie L1.pdf, pages 130 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 26,
          "answers": [
            "A la naissance : 49 a 52 cm",
            "A 1 an l’enfant mesure: 70 a 75 cm"
          ]
        },
        {
          "id": "pediatrie-as-87",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 27\nQuelle proposition reproduit le repère moyen du tableau de croissance du diaporama ?\nChoisir la bonne réponse.",
          "options": [
            "Poids moyen à la naissance : 1,5 kg.",
            "Doublement obligatoire à trois mois avec une préparation pour nourrisson.",
            "Environ 8 kg à neuf mois.",
            "Poids moyen à un an : 14 kg."
          ],
          "correct": "Environ 8 kg à neuf mois.",
          "explanation": "Le tableau du support donne environ 8 kg à neuf mois. Un poids de 1,5 kg à la naissance représente un faible poids ; 14 kg à un an n’est pas le repère moyen du tableau. Le doublement du poids à trois mois n’est pas obligatoire.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 142 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositive 144.",
          "section": "QCM Deuxième série",
          "originalNumber": 27,
          "answer": "Environ 8 kg à neuf mois."
        },
        {
          "id": "pediatrie-as-88",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 28\nQuelle action relève du choix matériel du lieu avant une séance éducative associée à la vaccination ?\nChoisir la bonne réponse.",
          "options": [
            "Se présenter à l’auditoire.",
            "Détendre l’atmosphère.",
            "Choisir le lieu de la séance en tenant compte du confort de l’auditoire.",
            "Adapter le niveau de langage à l’auditoire."
          ],
          "correct": "Choisir le lieu de la séance en tenant compte du confort de l’auditoire.",
          "explanation": "Choisir le lieu en fonction du confort de l’auditoire correspond à l’organisation matérielle. Les autres actions concernent la conduite de la séance éducative.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 147 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositives 147–148 (support pédagogique) ; connaissance générale d’organisation d’une séance éducative.",
          "section": "QCM Deuxième série",
          "originalNumber": 28,
          "answer": "Choisir le lieu de la séance en tenant compte du confort de l’auditoire."
        },
        {
          "id": "pediatrie-as-89",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 29\nLes signes cotés par le score de Silverman sont\nChoisir les 3 bonnes réponses.",
          "options": [
            "Les battements des ailes du nez",
            "Le tirage sous-costal",
            "La coloration",
            "L’entonnoir xiphoïdien",
            "Le geignement inspiratoire"
          ],
          "correct": [
            "Les battements des ailes du nez",
            "Le tirage sous-costal",
            "L’entonnoir xiphoïdien"
          ],
          "explanation": "Les battements des ailes du nez, les rétractions du bas du thorax et l’entonnoir xiphoïdien appartiennent au score. La coloration n’en fait pas partie ; le geignement coté est expiratoire.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 149 (énoncé).Documentation AS : pediatrie.pdf, pages 38 du PDF.Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCM Deuxième série",
          "originalNumber": 29,
          "answers": [
            "Les battements des ailes du nez",
            "Le tirage sous-costal",
            "L’entonnoir xiphoïdien"
          ]
        },
        {
          "id": "pediatrie-as-90",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 30\nLes signes de lutte respiratoires sont les suivants, sauf deux, lesquels ?",
          "options": [
            "Tirage intercostal",
            "Pouls",
            "Entonnoir xiphoïdien",
            "Battement du cœur",
            "Geignement respiratoire"
          ],
          "correct": [
            "Pouls",
            "Battement du cœur"
          ],
          "explanation": "Ce ne sont pas des signes de lutte respiratoire, contrairement aux rétractions et au geignement.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 151 (énoncé).Documentation AS : pediatrie.pdf, pages 38 du PDF.Inter-rater reliability of the Silverman and Andersen index—a measure of respiratory distress in preterm infants, étude publiée en 2023, rubrique The Silverman and Andersen index. https://pmc.ncbi.nlm.nih.gov/articles/PMC10313036/",
          "section": "QCM Deuxième série",
          "originalNumber": 30,
          "answers": [
            "Pouls",
            "Battement du cœur"
          ]
        },
        {
          "id": "pediatrie-as-91",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 31\nL’interrogatoire de la mère d’un enfant diarrhéique recherche ces éléments ci-dessous, sauf un, lequel ?",
          "options": [
            "Le nombre de selles",
            "Le volume ou l’abondance des selles",
            "L’aspect des selles",
            "La couleur des chaussures de l’enfant."
          ],
          "correct": "La couleur des chaussures de l’enfant.",
          "explanation": "Le nombre, le volume, l’aspect et la couleur des selles sont utiles à l’interrogatoire. La couleur des chaussures n’apporte aucune information clinique pertinente.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 153 (énoncé).Documentation AS : pediatrie.pdf, pages 55–57 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 31,
          "answer": "La couleur des chaussures de l’enfant."
        },
        {
          "id": "pediatrie-as-92",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 32\nQuelle durée définit exactement la fièvre aiguë dans ce cours AS ?\nChoisir la bonne réponse.",
          "options": [
            "Une élévation de la température corporelle au-dessus de la normale depuis moins d’une semaine",
            "Une élévation de la température corporelle au-dessus de la normale depuis une semaine et moins d’un mois",
            "Entre deux et quatre semaines.",
            "Une élévation de la température corporelle au-dessus de la normale depuis plus d’un mois"
          ],
          "correct": "Une élévation de la température corporelle au-dessus de la normale depuis moins d’une semaine",
          "explanation": "Dans la classification du cours AS, une fièvre aiguë dure moins d’une semaine, une fièvre prolongée d’une semaine à un mois et une fièvre chronique plus d’un mois.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 155 (énoncé).Documentation AS : pediatrie.pdf, pages 47 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 32,
          "answer": "Une élévation de la température corporelle au-dessus de la normale depuis moins d’une semaine"
        },
        {
          "id": "pediatrie-as-93",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 33\nQuelles deux propositions reproduisent la liste des signes évocateurs de fièvre du cours AS ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Râles pulmonaires",
            "Vomissements",
            "Cri et pâleur",
            "Douleur",
            "Diarrhée",
            "Éruptions cutanées"
          ],
          "correct": [
            "Cri et pâleur",
            "Douleur"
          ],
          "explanation": "Le cours cite cri/pâleur et douleur. Les autres manifestations peuvent accompagner une maladie fébrile mais ne définissent pas la fièvre.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 158 (énoncé).Documentation AS : pediatrie.pdf, pages 48 du PDF.RÉVISION ASO ASI 2024.pptx, diapositive 160.",
          "section": "QCM Deuxième série",
          "originalNumber": 33,
          "answers": [
            "Cri et pâleur",
            "Douleur"
          ]
        },
        {
          "id": "pediatrie-as-94",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 34\nSelon l’organisation des volets du cours AS, quel geste appartient au volet administration du vaccin ?\nChoisir la bonne réponse.",
          "options": [
            "Vérifier si le vaccin à administrer est celui prévu pour l’âge de l’enfant.",
            "Installer l’enfant et la mère",
            "Notifier dans le registre de vaccination la date dans la colonne prévue pour le vaccin",
            "Inscrire le prochain rendez-vous dans le carnet"
          ],
          "correct": "Installer l’enfant et la mère",
          "explanation": "Le cours classe cette action dans le volet administration. Vérification de l’âge, inscription du rendez-vous et tenue du registre sont décrites dans le volet administratif.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 161 (énoncé).Documentation AS : pediatrie.pdf, pages 18 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 34,
          "answer": "Installer l’enfant et la mère"
        },
        {
          "id": "pediatrie-as-95",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 35\nQuels soins doivent être réalisés immédiatement, dans la première minute après la naissance, chez un nouveau-né stable ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Réaliser l’examen clinique détaillé du nouveau-né.",
            "Rechercher d’éventuelles malformations et des réflexes archaïques",
            "Placer le nouveau-né en contact peau a peau sur le ventre de la mère",
            "Sécher immédiatement le nouveau-né avec un linge propre, sec et chaud."
          ],
          "correct": [
            "Placer le nouveau-né en contact peau a peau sur le ventre de la mère",
            "Sécher immédiatement le nouveau-né avec un linge propre, sec et chaud."
          ],
          "explanation": "Le peau à peau et le séchage sont immédiats chez le nouveau-né stable. L’examen détaillé et les soins non urgents ne doivent pas retarder ces mesures.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 163 (énoncé).Documentation AS : pediatrie.pdf, pages 7 du PDF.Organisation mondiale de la Santé, Essential Newborn Care Course, Examination of the newborn, note sur la vitamine K après la première heure. https://cdn.who.int/media/docs/default-source/mca-documents/nbh/enc-course/modules/8-facilitator-notes-examination-of-the-newborn-16.03.22.pdf Organisation mondiale de la Santé, Alimentation du nourrisson et du jeune enfant. https://www.who.int/fr/news-room/fact-sheets/detail/infant-and-young-child-feeding",
          "section": "QCM Deuxième série",
          "originalNumber": 35,
          "answers": [
            "Placer le nouveau-né en contact peau a peau sur le ventre de la mère",
            "Sécher immédiatement le nouveau-né avec un linge propre, sec et chaud."
          ]
        },
        {
          "id": "pediatrie-as-96",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 36\nParmi les signes classiques du syndrome de postmaturité décrits dans le cours AS, lequel est correct ?\nChoisir la bonne réponse.",
          "options": [
            "Une peau plissée pourvue de vernix caseosa",
            "Une augmentation de la masse graisseuse",
            "Un nouveau-né avec un regard vif",
            "Un nouveau-né grand et gros"
          ],
          "correct": "Un nouveau-né avec un regard vif",
          "explanation": "La postmaturité peut associer peau sèche/desquamante, réduction du vernix et de la graisse sous-cutanée. Tous les nouveau-nés post-terme ne présentent pas nécessairement ces signes.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 165 (énoncé).Documentation AS : pediatrie.pdf, pages 36 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 36,
          "answer": "Un nouveau-né avec un regard vif"
        },
        {
          "id": "pediatrie-as-97",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 37\nLa photothérapie est le principal traitement de l’ictère à bilirubine, son but est de\nChoisir les 2 bonnes réponses.",
          "options": [
            "Réduire le taux de bilirubine non conjuguée.",
            "Exposer de la peau lumière bleue",
            "Exposer de la peau lumière blanche",
            "Transformer la bilirubine en produits hydrosolubles plus facilement éliminables."
          ],
          "correct": [
            "Réduire le taux de bilirubine non conjuguée.",
            "Transformer la bilirubine en produits hydrosolubles plus facilement éliminables."
          ],
          "explanation": "La photothérapie transforme la bilirubine non conjuguée en produits plus facilement éliminables. L’exposition à une lumière adaptée est le moyen utilisé pour obtenir cet effet.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 167 (énoncé).Documentation AS : pediatrie.pdf, pages 42 du PDF.NHS Greater Glasgow and Clyde, Jaundice: Phototherapy for neonatal jaundice (1047). https://www.clinicalguidelines.scot.nhs.uk/ggc-paediatric-guidelines/ggc-paediatric-guidelines/neonatology/phototherapy-for-neonatal-jaundice-1047/",
          "section": "QCM Deuxième série",
          "originalNumber": 37,
          "answers": [
            "Réduire le taux de bilirubine non conjuguée.",
            "Transformer la bilirubine en produits hydrosolubles plus facilement éliminables."
          ]
        },
        {
          "id": "pediatrie-as-98",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 38\nAprès le gavage, Il faut surveiller\nChoisir les 4 bonnes réponses.",
          "options": [
            "Les réactions et le comportement du nouveau-né.",
            "La couleur de la peau",
            "Le nombre de vomissement",
            "La respiration"
          ],
          "correct": [
            "Les réactions et le comportement du nouveau-né.",
            "La couleur de la peau",
            "Le nombre de vomissement",
            "La respiration"
          ],
          "explanation": "La tolérance du gavage implique de surveiller coloration, respiration, vomissements et comportement. Limiter la surveillance à une seule réponse serait incorrect.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 169 (énoncé).Documentation AS : pediatrie.pdf, pages 41 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 38,
          "answers": [
            "Les réactions et le comportement du nouveau-né.",
            "La couleur de la peau",
            "Le nombre de vomissement",
            "La respiration"
          ]
        },
        {
          "id": "pediatrie-as-99",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 39\nLes facteurs ci-dessous sont ceux qui favorisent les otites\nChoisir la bonne réponse.",
          "options": [
            "Décubitus ventrale prolongé lors de la technique de tétée",
            "Malnutrition",
            "Anorexie",
            "Troubles digestifs"
          ],
          "correct": "Malnutrition",
          "explanation": "Elle figure parmi les facteurs favorisants. Le cours cite une mauvaise technique de tétée en décubitus dorsal, pas ventral.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 171 (énoncé).Documentation AS : pediatrie.pdf, pages 52 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 39,
          "answer": "Malnutrition"
        },
        {
          "id": "pediatrie-as-100",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 40\nSelon l’OMS, à partir de quelle durée une diarrhée est-elle persistante ?\nChoisir la bonne réponse.",
          "options": [
            "Moins de sept jours.",
            "Au moins 14 jours.",
            "Seulement au-delà de 30 jours."
          ],
          "correct": "Au moins 14 jours.",
          "explanation": "Selon l’OMS, une diarrhée persistante dure au moins 14 jours, sans limite supérieure à 21 jours. Le cours AS emploie un découpage pédagogique différent.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 173 (énoncé).Documentation AS : pediatrie.pdf, pages 55 du PDF.Organisation mondiale de la Santé, Diarrhoeal disease, rubriques définition, prévention et traitement. https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
          "section": "QCM Deuxième série",
          "originalNumber": 40,
          "answer": "Au moins 14 jours."
        },
        {
          "id": "pediatrie-as-101",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 41\nQuelle cause est classée dans le cours parmi les anémies du nourrisson et de l’enfant plutôt que les causes obstétricales néonatales ?\nChoisir la bonne réponse.",
          "options": [
            "Transfusion fœto-maternelle",
            "Anémie hémolytique acquise immunologique",
            "Accident obstétricale (décollement placentaire)",
            "Hémopathie bénigne"
          ],
          "correct": "Anémie hémolytique acquise immunologique",
          "explanation": "A et C sont surtout présentées dans les causes néonatales ; B est citée pour le nourrisson et l’enfant. La question originale trop générale pourrait inclure des conséquences d’événements périnataux.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 176 (énoncé).Documentation AS : pediatrie.pdf, pages 62 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 41,
          "answer": "Anémie hémolytique acquise immunologique"
        },
        {
          "id": "pediatrie-as-102",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 42\nDevant tout vomissement s’accompagnant de signes abdominaux aigus, penser à une urgence chirurgicale de type\nChoisir la bonne réponse.",
          "options": [
            "Une gastro-entérite",
            "Renvoie pathologique postprandial",
            "Invagination"
          ],
          "correct": "Invagination",
          "explanation": "Des vomissements avec signes abdominaux aigus imposent de rechercher une cause chirurgicale ; l’invagination est une possibilité.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 178 (énoncé).Documentation AS : pediatrie.pdf, pages 58–59 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 42,
          "answer": "Invagination"
        },
        {
          "id": "pediatrie-as-103",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 43\nQuelle complication digestive peut accompagner un reflux pathologique avec rejets persistants ?\nChoisir la bonne réponse.",
          "options": [
            "Des otites",
            "Une œsophagite",
            "Une anxiété excessive de la mère",
            "Une mauvaise relation mère – enfant"
          ],
          "correct": "Une œsophagite",
          "explanation": "Une exposition répétée de l’œsophage au contenu gastrique, notamment en cas de reflux pathologique, peut provoquer une œsophagite. Il ne s’agit pas de la conséquence automatique de tout échec thérapeutique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 180 (énoncé).National Institute for Health and Care Excellence, Gastro-oesophageal reflux disease in children and young people: diagnosis and management, NG1. https://www.nice.org.uk/guidance/ng1/chapter/recommendations",
          "section": "QCM Deuxième série",
          "originalNumber": 43,
          "answer": "Une œsophagite"
        },
        {
          "id": "pediatrie-as-104",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 44\nQuels sont les critères d’une bonne prise du sein par l’enfant ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Plus d’aréole visible au-dessus de la lèvre supérieure qu’en dessous de la lèvre inférieure.",
            "La lèvre inférieure est éversée.",
            "Le menton du bébé touche le sein."
          ],
          "correct": [
            "Plus d’aréole visible au-dessus de la lèvre supérieure qu’en dessous de la lèvre inférieure.",
            "La lèvre inférieure est éversée.",
            "Le menton du bébé touche le sein."
          ],
          "explanation": "Ces trois critères indiquent une bonne prise du sein : davantage d’aréole visible au-dessus, lèvre inférieure éversée et menton contre le sein.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 182 (énoncé).Documentation AS : pediatrie.pdf, pages 72 du PDF.Organisation mondiale de la Santé, Infant and Young Child Feeding: Model Chapter for Textbooks for Medical Students and Allied Health Professionals, chapitre sur la prise du sein.",
          "section": "QCM Deuxième série",
          "originalNumber": 44,
          "answers": [
            "Plus d’aréole visible au-dessus de la lèvre supérieure qu’en dessous de la lèvre inférieure.",
            "La lèvre inférieure est éversée.",
            "Le menton du bébé touche le sein."
          ]
        },
        {
          "id": "pediatrie-as-105",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 45\nQuelles deux affections appartiennent à la liste des affections fréquentes de 1 mois à 5 ans présentée dans le tableau de ce support ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Pneumonie",
            "Accidents",
            "Souffrance cérébrale",
            "Malnutrition",
            "Cancer"
          ],
          "correct": [
            "Pneumonie",
            "Malnutrition"
          ],
          "explanation": "Dans le tableau du cours AS, la pneumonie et la malnutrition figurent parmi les affections fréquentes de un mois à cinq ans. Les autres propositions ne font pas partie de cette liste pour cette tranche d’âge ; cela ne signifie pas qu’elles ne peuvent jamais survenir avant cinq ans.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 184 (énoncé).Documentation AS : pediatrie.pdf, pages 5 du PDF.RÉVISION ASO ASI 2024.pptx, diapositive 186.",
          "section": "QCM Deuxième série",
          "originalNumber": 45,
          "answers": [
            "Pneumonie",
            "Malnutrition"
          ]
        },
        {
          "id": "pediatrie-as-106",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 46\nQuelle proposition définit un nouveau-né post-terme ?\nChoisir la bonne réponse.",
          "options": [
            "Âge gestationnel d’au moins 42 SA.",
            "Âge gestationnel entre 37 et moins de 42 SA.",
            "Âge gestationnel inférieur à 37 SA.",
            "Âge gestationnel entre 37 SA et 41 SA + 6 jours."
          ],
          "correct": "Âge gestationnel d’au moins 42 SA.",
          "explanation": "« Après 42 SA » exclut à tort le seuil exact et se recouvre avec A. Post-terme désigne l’âge gestationnel ; postmaturité désigne un tableau clinique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 187 (énoncé).Documentation AS : pediatrie.pdf, pages 36 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 46,
          "answer": "Âge gestationnel d’au moins 42 SA."
        },
        {
          "id": "pediatrie-as-107",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 47\nQu’appelle-t-on un nouveau-né grand pour l’âge gestationnel ?\nChoisir la bonne réponse.",
          "options": [
            "Un nouveau-né dont le poids de naissance est supérieur à celui attendu pour l’âge gestationnel.",
            "Un nouveau-né dont le poids de naissance < à celui de son AG",
            "Un nouveau-né dont le poids de naissance correspond à celui de son âge gestationnel"
          ],
          "correct": "Un nouveau-né dont le poids de naissance est supérieur à celui attendu pour l’âge gestationnel.",
          "explanation": "Le poids est supérieur à celui attendu pour l’âge gestationnel ; utiliser une courbe de référence.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 190 (énoncé).Documentation AS : pediatrie.pdf, pages 34–36 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 47,
          "answer": "Un nouveau-né dont le poids de naissance est supérieur à celui attendu pour l’âge gestationnel."
        },
        {
          "id": "pediatrie-as-108",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 48\nNourrisson, c’est\nChoisir la bonne réponse.",
          "options": [
            "Un enfant âgé d’un mois à moins de deux ans.",
            "Un enfant dont l’âge est compris entre 2 mois et 2 ans",
            "Un enfant dont l’âge est compris entre 3 mois et 2 ans",
            "Un enfant dont l’âge est compris entre 3 mois et 3 ans"
          ],
          "correct": "Un enfant âgé d’un mois à moins de deux ans.",
          "explanation": "Le nourrisson correspond dans ce cours à la période de 1 à 23 mois.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 192 (énoncé).Documentation AS : pediatrie.pdf, pages 4 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 48,
          "answer": "Un enfant âgé d’un mois à moins de deux ans."
        },
        {
          "id": "pediatrie-as-109",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 49\nDans le découpage de ce cours, quelle tranche correspond à l’enfant d’âge scolaire, appelée ici préadolescence ?\nChoisir la bonne réponse.",
          "options": [
            "Un enfant dont l’âge est compris entre 4 ans et 12 ans",
            "Un enfant dont l’âge est compris entre 5 ans et 12 ans",
            "Un enfant dont l’âge est compris entre 6 ans et 12 ans",
            "Un enfant dont l’âge est compris entre 7 ans et 12 ans"
          ],
          "correct": "Un enfant dont l’âge est compris entre 6 ans et 12 ans",
          "explanation": "Le découpage du support appelle ainsi la période de l’enfant d’âge scolaire. Cette appellation n’est pas universelle.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 194 (énoncé).Documentation AS : pediatrie.pdf, pages 5 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 49,
          "answer": "Un enfant dont l’âge est compris entre 6 ans et 12 ans"
        },
        {
          "id": "pediatrie-as-110",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 50\nLes objectifs des soins du nouveau-né après la naissance sont les suivants sauf un, lequel ?",
          "options": [
            "Détecter les signes de danger",
            "Conseiller la mère sur les soins à apporter au nouveau-né",
            "Retarder systématiquement la première tétée jusqu’au lendemain.",
            "Maintenir une température normale"
          ],
          "correct": "Retarder systématiquement la première tétée jusqu’au lendemain.",
          "explanation": "Les soins visent à détecter les signes de danger, maintenir une température normale et conseiller la mère. La première tétée doit être favorisée précocement, pas retardée systématiquement.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 196 (énoncé).Documentation AS : pediatrie.pdf, pages 6 du PDF.Organisation mondiale de la Santé, Alimentation du nourrisson et du jeune enfant. https://www.who.int/fr/news-room/fact-sheets/detail/infant-and-young-child-feeding",
          "section": "QCM Deuxième série",
          "originalNumber": 50,
          "answer": "Retarder systématiquement la première tétée jusqu’au lendemain."
        },
        {
          "id": "pediatrie-as-111",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 51\nCombien de rubriques le cours AS distingue-t-il dans les soins immédiats du nouveau-né ?\nChoisir la bonne réponse.",
          "options": [
            "Trois",
            "Quatre",
            "Cinq",
            "Six"
          ],
          "correct": "Quatre",
          "explanation": "Le support distingue dès la naissance, 0–1 minute, 1–60 minutes et 60–90 minutes. Les deux premières rubriques se chevauchent : c’est une organisation pédagogique.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 198 (énoncé).Documentation AS : pediatrie.pdf, pages 7–8 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 51,
          "answer": "Quatre"
        },
        {
          "id": "pediatrie-as-112",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 52\nHabituellement, chez le nouveau-né à terme éveillé, quelle attitude est décrite ?\nChoisir la bonne réponse.",
          "options": [
            "Présente une attitude en déflexion",
            "Ses mains sont ouvertes",
            "Membres défléchis",
            "Poing fermés"
          ],
          "correct": "Poing fermés",
          "explanation": "Le nouveau-né à terme présente habituellement une attitude en flexion. Les mains peuvent aussi s’ouvrir ; il ne faut pas imposer une fermeture permanente.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 200 (énoncé).Documentation AS : pediatrie.pdf, pages 6–8 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 32 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 52,
          "answer": "Poing fermés"
        },
        {
          "id": "pediatrie-as-113",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 53\nQuel repère moteur est habituellement attendu autour de huit mois dans ce support ?\nChoisir la bonne réponse.",
          "options": [
            "Tient assis sans soutien",
            "Marche seul sans appui.",
            "Monte les escaliers à 4 pattes",
            "Court vite."
          ],
          "correct": "Tient assis sans soutien",
          "explanation": "La station assise sans soutien est un repère de la période autour de huit à neuf mois. L’âge d’acquisition varie ; les CDC la placent parmi les acquisitions à neuf mois. Pour une réponse unique, la marche autonome n’est pas attendue à cet âge.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 202 (énoncé).Documentation DE : Pédiatrie L1.pdf, pages 145–147 du PDF, repères moteurs ; Centers for Disease Control and Prevention, Milestones by 9 Months, station assise sans soutien. https://www.cdc.gov/act-early/milestones/9-months.html",
          "section": "QCM Deuxième série",
          "originalNumber": 53,
          "answer": "Tient assis sans soutien"
        },
        {
          "id": "pediatrie-as-114",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 54\nL’enfant triple son poids de naissance, à l’âge de\nChoisir la bonne réponse.",
          "options": [
            "3 mois",
            "5 mois",
            "12 mois",
            "15 mois"
          ],
          "correct": "12 mois",
          "explanation": "Le triplement du poids de naissance à un an est un repère moyen, pas une exigence pour chaque enfant.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 204 (énoncé).RÉVISION ASO ASI 2024.pptx, diapositive 144 ; Documentation DE : Pédiatrie L1.pdf, pages 130 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 54,
          "answer": "12 mois"
        },
        {
          "id": "pediatrie-as-115",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 55\nQuelles deux consignes sont explicitement énoncées dans le paragraphe “Rythme de la pesée” du cours AS ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Peser l’enfant à jour fixe",
            "Peser l’enfant a heure fixe",
            "Peser l’enfant a intervalle régulier",
            "Peser l’enfant à balance fixe",
            "Peser l’enfant dans un centre e santé fixe"
          ],
          "correct": [
            "Peser l’enfant a heure fixe",
            "Peser l’enfant a intervalle régulier"
          ],
          "explanation": "Le cours prescrit heure fixe et intervalles réguliers. Réutiliser une balance fiable et fixer les jours peut également être pertinent ; E n’est pas une obligation.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 206 (énoncé).Documentation AS : pediatrie.pdf, pages 10 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 55,
          "answers": [
            "Peser l’enfant a heure fixe",
            "Peser l’enfant a intervalle régulier"
          ]
        },
        {
          "id": "pediatrie-as-116",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 56\nLe volet administratif d’une séance de vaccination, consiste à\nChoisir la bonne réponse.",
          "options": [
            "Vérifier le statut vaccinal de l’enfant dans le registre et dans le carnet de santé mère-enfant selon l’âge de l’enfant",
            "Informer la mère des éventuels effets indésirables du vaccin",
            "Informer la mère des sites d’injection et la voie d’administration du vaccin",
            "Administrer le vaccin en fonction du site et de la voie d’administration inscrite sur le flacon du vaccin"
          ],
          "correct": "Vérifier le statut vaccinal de l’enfant dans le registre et dans le carnet de santé mère-enfant selon l’âge de l’enfant",
          "explanation": "La vérification du statut dans le carnet et le registre relève du volet administratif. Information sur l’injection et administration appartiennent à d’autres étapes.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 208 (énoncé).Documentation AS : pediatrie.pdf, pages 18 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 56,
          "answer": "Vérifier le statut vaccinal de l’enfant dans le registre et dans le carnet de santé mère-enfant selon l’âge de l’enfant"
        },
        {
          "id": "pediatrie-as-117",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 57\nPour mesurer la longueur couchée d’un enfant de moins de deux ans, quelle proposition est correcte ?\nChoisir la bonne réponse.",
          "options": [
            "Une aide est habituellement nécessaire pour positionner la tête et les jambes.",
            "L’enfant doit rester debout.",
            "Utiliser seulement une toise verticale.",
            "L’enfant peut être laissé seul sur la table."
          ],
          "correct": "Une aide est habituellement nécessaire pour positionner la tête et les jambes.",
          "explanation": "Le cours AS exige une aide avant trois ans ; le cours DE recommande une toise horizontale avant deux ans et une mesure debout après deux ans. Une aide peut rester utile au-delà.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 210 (énoncé).Documentation AS : pediatrie.pdf, pages 12–13 du PDF.Documentation DE : Pédiatrie L1.pdf, pages 127 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 57,
          "answer": "Une aide est habituellement nécessaire pour positionner la tête et les jambes."
        },
        {
          "id": "pediatrie-as-118",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 58\nLe Périmètre Crânien (PC) évolue de\nChoisir la bonne réponse.",
          "options": [
            "0,5 cm par mois de 0 à 3 mois",
            "0,5 cm par mois de 3 à 6 mois",
            "Environ 0,5 cm par mois entre 6 et 12 mois.",
            "0,5 cm par mois de 12 mois à 18 mois"
          ],
          "correct": "Environ 0,5 cm par mois entre 6 et 12 mois.",
          "explanation": "Le « 6 à 12 ans » de la diapositive 212 est une coquille : lire « mois ». C’est un ordre de grandeur ; la courbe du périmètre crânien guide l’interprétation.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 212 (énoncé).Documentation AS : pediatrie.pdf, pages 13–14 du PDF.RÉVISION ASO ASI 2024.pptx, diapositives 213–214 ; Organisation mondiale de la Santé, Child Growth Standards, Head circumference for age. https://www.who.int/tools/child-growth-standards/standards/head-circumference-for-age Manuel MSD, Physical Growth of Infants and Children. https://www.msdmanuals.com/professional/pediatrics/growth-and-development/physical-growth-of-infants-and-children",
          "section": "QCM Deuxième série",
          "originalNumber": 58,
          "answer": "Environ 0,5 cm par mois entre 6 et 12 mois."
        },
        {
          "id": "pediatrie-as-119",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 59\nLa technique de la mesure du Périmètre Brachial, consiste à appliquer le mètre ruban ou la bande de SHAKIR en\nChoisir la bonne réponse.",
          "options": [
            "Faisant le tour à mi-distance entre le poignet et l’épaule",
            "Faisant le tour à mi-distance entre le coude et l’épaule",
            "Faisant le tour à mi-distance entre le bras et l’épaule",
            "Faisant le tour à mi-distance entre l’avant-bras et l’épaule"
          ],
          "correct": "Faisant le tour à mi-distance entre le coude et l’épaule",
          "explanation": "Le ruban passe autour du bras à mi-distance entre l’épaule et le coude, bras détendu et sans serrer.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 215 (énoncé).Documentation AS : pediatrie.pdf, pages 15 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 59,
          "answer": "Faisant le tour à mi-distance entre le coude et l’épaule"
        },
        {
          "id": "pediatrie-as-120",
          "type": "qcm",
          "text": "QCM Deuxième série · Question 60\nDans les stratégies vaccinales, la notion de poste fixe désigne\nChoisir la bonne réponse.",
          "options": [
            "Activités de vaccination en dehors du centre de santé : 5 km à 15km",
            "Activités de vaccination en dehors du centre de santé à plus de 15km",
            "Activités de vaccination en dehors du centre de santé à plus de 10km",
            "Activités de vaccination au centre de santé : 5 km"
          ],
          "correct": "Activités de vaccination au centre de santé : 5 km",
          "explanation": "Le rayon de cinq kilomètres décrit la population desservie selon le support ; le poste fixe désigne avant tout le lieu de vaccination.",
          "source": "RÉVISION ASO ASI 2024.pptx, Cellule de santé infantile, diapositive 217 (énoncé).Documentation AS : pediatrie.pdf, pages 16 du PDF.",
          "section": "QCM Deuxième série",
          "originalNumber": 60,
          "answer": "Activités de vaccination au centre de santé : 5 km"
        }
      ]
    }
  ]
};
    const STORAGE_SUBJECTS = "PEDIATRIE_ASO_ASI_subjects_v1";
    const STORAGE_RESULTS = "PEDIATRIE_ASO_ASI_results_v1";
    const STORAGE_ATTEMPTS = "PEDIATRIE_ASO_ASI_attempts_v1";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUESTION_DURATION_SECONDS = 30;
    const QUIZ_SETTINGS_KEY = "APPRENTISSAGE_EVALUATION_quiz_settings_v2";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 50,
      displayMode: "all",
      questionType: "both",
      cameraEnabled: false,
      antiCheatEnabled: true
    };
    let quizSettings = loadQuizSettings();

    // Chaque évaluation démarre avec toutes les questions par défaut.
    // La banque complète reste disponible et l’ordre est renouvelé à chaque tentative.

    function shuffleQuestions(items) {
      const shuffled = items.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    function getExpectedAnswers(question) {
      if (Array.isArray(question.answers)) return question.answers;
      if (Array.isArray(question.correct)) return question.correct;
      return [question.answer || question.correct].filter(Boolean);
    }

    function getQuestionCategory(question) {
      const options = Array.isArray(question.options) ? question.options : [];
      const isTrueFalse = options.length === 2 && options.includes("Vrai") && options.includes("Faux");
      if (isTrueFalse) return "trueFalse";
      return getExpectedAnswers(question).length > 1 ? "multipleAnswers" : "singleAnswer";
    }

    function getQuizQuestionCount() {
      return quizSettings.questionCount;
    }

    function loadQuizSettings() {
      try {
        const saved = { ...DEFAULT_QUIZ_SETTINGS, ...JSON.parse(localStorage.getItem(QUIZ_SETTINGS_KEY) || "{}") };
        saved.cameraEnabled = false;
        return saved;
      } catch (error) {
        return { ...DEFAULT_QUIZ_SETTINGS, cameraEnabled: false };
      }
    }

    function getQuestionsForSelectedType(questionBank) {
      if (quizSettings.questionType === "qcd") {
        return questionBank.filter(question => getQuestionCategory(question) === "trueFalse");
      }
      if (quizSettings.questionType === "qcm") {
        return questionBank.filter(question => getQuestionCategory(question) !== "trueFalse");
      }
      return questionBank.slice();
    }

    function selectQuizQuestions(questionBank) {
      const available = getQuestionsForSelectedType(questionBank);
      const quantity = Math.min(Number(quizSettings.questionCount) || 15, available.length);
      return shuffleQuestions(available).slice(0, quantity);
    }

    function getQuestionOrderSignature(questions) {
      return questions.map(question => question.text || "").join("||");
    }

    function shuffleForNewLearningSession(subjectId, questions) {
      const storageKey = `FORMATION_EVALUATION_last_question_order_${subjectId}`;
      const previousSignature = localStorage.getItem(storageKey);
      let shuffled = shuffleQuestions(questions);

      // Évite de présenter exactement le même ordre lors de deux sessions
      // consécutives, même si le tirage aléatoire produit par hasard le même résultat.
      if (shuffled.length > 1 && getQuestionOrderSignature(shuffled) === previousSignature) {
        shuffled = [...shuffled.slice(1), shuffled[0]];
      }

      localStorage.setItem(storageKey, getQuestionOrderSignature(shuffled));
      return shuffled;
    }

    function prepareSubjectForQuiz(subject) {
      const selectedQuestions = selectQuizQuestions(subject.questions);
      return {
        ...cloneData(subject),
        questions: shuffleForNewLearningSession(subject.id, selectedQuestions)
      };
    }

    /********************************************************************
     * SUIVI DE SORTIE DE PAGE / ONGLET
     * L'étudiant n'est pas bloqué et ne reçoit pas d'avertissement.
     * Si la page, l'onglet ou la fenêtre est quitté pendant l'évaluation,
     * l'information est enregistrée et apparaît dans le résultat final.
     ********************************************************************/
    const PAGE_EXIT_TRACKING_CONFIG = {
      enabled: true
    };

    function isAntiCheatEnabled() {
      return PAGE_EXIT_TRACKING_CONFIG.enabled && quizSettings.antiCheatEnabled !== false;
    }

    let pageExitTrackingActive = false;
    let pageExitCount = 0;
    let pageExitEvents = [];
    let lastPageExitAt = 0;
    let quizWasFullscreen = false;
    let pageExitDetectedDuringQuiz = false;

    /********************************************************************
     * PHOTO OBLIGATOIRE AVANT ACCÈS À L'ÉVALUATION
     ********************************************************************/
    let cameraStream = null;

    /********************************************************************
     * INITIALISATION
     ********************************************************************/
    document.addEventListener("DOMContentLoaded", () => {
      loadSubjects();
      renderSubjects();
      blockBackButton();
    });


    function cloneData(value) {
      if (typeof structuredClone === "function") return structuredClone(value);
      return JSON.parse(JSON.stringify(value));
    }

    function loadSubjects() {
      // Nouvelle version : on charge toujours le sujet intégré dans le fichier.
      // Cela évite que l’ancien cache du navigateur masque le nouveau sujet.
      subjects = cloneData(CONFIG.subjects).map(subject => ({
        ...subject,
        programmed: subject.programmed === true
      }));
      saveSubjects();
    }

    function saveSubjects() {
      localStorage.setItem(STORAGE_SUBJECTS, JSON.stringify(subjects));
    }

    function getResults() {
      return JSON.parse(localStorage.getItem(STORAGE_RESULTS) || "[]");
    }

    function saveResults(results) {
      localStorage.setItem(STORAGE_RESULTS, JSON.stringify(results));
    }

    function getAttempts() {
      return JSON.parse(localStorage.getItem(STORAGE_ATTEMPTS) || "{}");
    }

    function saveAttempts(attempts) {
      localStorage.setItem(STORAGE_ATTEMPTS, JSON.stringify(attempts));
    }

    /********************************************************************
     * GESTION DES DATES ET STATUTS
     ********************************************************************/
    function getDateTime(date, time) {
      return new Date(`${date}T${time || "00:00"}:00`);
    }

    function getSubjectStatus(subject) {
      const now = new Date();
      const open = getDateTime(subject.openDate, subject.openTime);
      const close = getDateTime(subject.closeDate, subject.closeTime);
      if (now < open) return { key: "locked", label: "Verrouillée", message: "Cette composition n’est pas encore disponible" };
      if (now > close) return { key: "closed", label: "Terminée", message: "La composition est terminée" };
      return { key: "available", label: "Disponible", message: "Composition disponible" };
    }

    function formatDateTime(date, time) {
      return `${date} à ${time}`;
    }


    /********************************************************************
     * SÉCURITÉ DE L'ÉVALUATION
     * L'étudiant continue son devoir jusqu'à la fin.
     * Tout incident détecté est enregistré et affichera "Auto envoi"
     * au résultat et dans l'administration.
     ********************************************************************/
    function isQuizVisible() {
      const quizView = document.getElementById("quizView");
      return pageExitTrackingActive && quizView && !quizView.classList.contains("hidden");
    }

    function registerPageExitEvent(reason, type = "incident") {
      if (!isAntiCheatEnabled() || !isQuizVisible()) return;

      const now = Date.now();

      // Évite de compter plusieurs fois le même incident en quelques secondes.
      if (now - lastPageExitAt < 1500) return;
      lastPageExitAt = now;

      pageExitDetectedDuringQuiz = true;
      pageExitCount++;
      pageExitEvents.push({
        type,
        reason,
        time: new Date().toLocaleString("fr-FR")
      });
    }

    function startPageExitTracking() {
      if (!isAntiCheatEnabled()) {
        stopPageExitTracking();
        pageExitDetectedDuringQuiz = false;
        pageExitCount = 0;
        pageExitEvents = [];
        return;
      }
      pageExitTrackingActive = true;
      pageExitDetectedDuringQuiz = false;
      pageExitCount = 0;
      pageExitEvents = [];
      lastPageExitAt = 0;
      quizWasFullscreen = Boolean(document.fullscreenElement);
    }

    function stopPageExitTracking() {
      pageExitTrackingActive = false;
    }

    function hasRealPageExitDuringQuiz() {
      return pageExitDetectedDuringQuiz === true && Number(pageExitCount || 0) > 0;
    }

    // Sortie réelle d'onglet, de page ou bascule vers une autre application.
    // On n'utilise plus window.blur, car sur téléphone il peut se déclencher
    // pendant des actions normales et mettait le résultat à zéro à tort.
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        registerPageExitEvent("L'étudiant a quitté l'onglet, la page ou l'application", "sortie_page");
      }
    });

    // Appel, notification, volet système ou changement temporaire d'application.
    // Sur téléphone, un appel ou une notification peut déclencher blur / visibilitychange.
    window.addEventListener("blur", () => {
      registerPageExitEvent("Appel, notification ou perte de focus détecté", "appel_notification");
    });

    // Tentative de capture d'écran ou d'action système détectable au clavier.
    // Important : les navigateurs ne permettent pas de détecter toutes les captures,
    // surtout sur téléphone. Les touches détectables sont enregistrées.
    document.addEventListener("keydown", (event) => {
      if (!isQuizVisible()) return;
      const key = String(event.key || "").toLowerCase();
      const code = String(event.code || "").toLowerCase();
      const isPrintScreen = key === "printscreen" || code === "printscreen";
      const isScreenShortcut =
        isPrintScreen ||
        (event.ctrlKey && key === "p") ||
        (event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key)) ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        key === "f12";

      if (isScreenShortcut) {
        registerPageExitEvent("Tentative de capture d'écran ou raccourci système détecté", "capture_ecran");
      }
    });

    document.addEventListener("contextmenu", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("Clic droit ou menu contextuel détecté", "menu_contextuel");
      event.preventDefault();
    });

    // Fermeture, actualisation ou navigation hors de la page.
    window.addEventListener("pagehide", () => {
      registerPageExitEvent("L'étudiant a quitté ou actualisé la page", "fermeture_actualisation");
    });

    // Sortie du mode plein écran, si l'évaluation était en plein écran.
    document.addEventListener("fullscreenchange", () => {
      if (!isQuizVisible()) return;

      if (document.fullscreenElement) {
        quizWasFullscreen = true;
        return;
      }

      if (quizWasFullscreen) {
        registerPageExitEvent("L'étudiant est sorti du mode plein écran", "plein_ecran");
      }
    });

    window.addEventListener("beforeunload", (event) => {
      if (!isQuizVisible()) return;
      registerPageExitEvent("L'étudiant a tenté de fermer ou actualiser la page", "fermeture_actualisation");
      event.preventDefault();
      event.returnValue = "Une évaluation est en cours. Quitter la page peut interrompre votre composition.";
      return event.returnValue;
    });


    /********************************************************************
     * PAGE ACCUEIL ÉTUDIANT
     ********************************************************************/
    function showHome() {
      clearInterval(timerInterval);
      stopPageExitTracking();
      document.getElementById("homeView").classList.remove("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      renderSubjects();
    }

    function getActiveMatricule() {
      return (window.activeStudentFullName || localStorage.getItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME") || "").trim();
    }

    function getStudentProfile() {
      const nomComplet = getActiveMatricule() || "APPRENANT";
      return {
        nom: nomComplet,
        prenom: "",
        nomComplet,
        matricule: nomComplet
      };
    }

    function updateStudentHeader() {
      const node = document.getElementById("studentHeaderName");
      if (!node) return;
      node.textContent = `${getStudentProfile().nomComplet} |`;
    }

    function getStudentResultsForDashboard() {
      const profile = getStudentProfile();
      return getResults().filter(item => {
        const matricule = String(item?.student?.matricule || "").trim();
        return matricule === profile.matricule;
      });
    }

    function renderStudentResultsTable() {
      const results = getStudentResultsForDashboard();
      if (results.length === 0) {
        return '<p class="student-empty-state">Aucune évaluation effectuée pour le moment.</p>';
      }

      const rows = results.slice().reverse().map(result => `
        <tr>
          <td>
            <strong>${escapeHTML(result.subjectTitle || "ÉVALUATION")}</strong>
            <div class="student-table-date">Terminée : ${escapeHTML(result.date || "")}</div>
          </td>
          <td><strong>${escapeHTML(result.note20 || "0.00")}</strong></td>
          <td>${Number(result.good || 0)}</td>
          <td>${Number(result.bad || 0)}</td>
        </tr>
      `).join("");

      return `
        <div class="student-table-wrap">
          <table class="student-results-table">
            <thead>
              <tr>
                <th>Évaluation</th>
                <th>Score</th>
                <th>Bonnes</th>
                <th>Mauvaises</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    function renderSubjects() {
      const homeView = document.getElementById("homeView");
      if (!homeView) return;

      updateStudentHeader();

      const profile = getStudentProfile();
      const programmedSubjects = subjects.filter(subject => subject.programmed === true);
      const availableSubjects = programmedSubjects.filter(subject => getSubjectStatus(subject).key === "available");

      const availableHtml = availableSubjects.length ? availableSubjects.map(availableSubject => `
        <div class="student-evaluation-card">
          <div class="student-evaluation-head">
            <span class="student-status-pill available">Disponible</span>
            <h4>${escapeHTML(availableSubject.title)}</h4>
          </div>
          <p class="student-evaluation-meta"><strong>Matière :</strong> ${escapeHTML(availableSubject.matter)}</p>
          <p class="student-evaluation-meta"><strong>Durée :</strong> ${availableSubject.duration} min</p>
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${getQuizQuestionCount()} — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</div>
      `;

      homeView.innerHTML = `
        <div class="student-dashboard">
          <section class="student-profile-card">
            <h2>${profile.nomComplet}</h2>
            <p>
              <span>Nom et Prénoms :</span> <strong>${escapeHTML(profile.nomComplet)}</strong>
            </p>
            <button class="student-scroll-btn" onclick="document.getElementById('studentAvailableSection').scrollIntoView({behavior:'smooth', block:'start'})">Mes évaluations</button>
          </section>

          <section id="studentAvailableSection" class="student-section-card">
            <h3>Sujet disponible</h3>
            <p class="student-section-note">Évaluation test sera disponible le dimanche 20 septembre 2026 de 21 h à 21 h 30.</p>
            ${availableHtml}
          </section>

          <section class="student-section-card">
            <h3>Évaluations effectuées</h3>
            <p class="student-section-note">Vous pouvez consulter votre note et le résumé de l'évaluation.</p>
            ${renderStudentResultsTable()}
          </section>
        </div>
      `;
    }

    function getQuizTypeLabel() {
      if (quizSettings.questionType === "qcd") return "QCD seulement";
      if (quizSettings.questionType === "qcm") return "QCM seulement";
      return "QCM et QCD";
    }

    function getMaximumQuestionCount(type = quizSettings.questionType) {
      const bank = subjects[0]?.questions || CONFIG.subjects[0]?.questions || [];
      if (type === "qcd") return bank.filter(q => getQuestionCategory(q) === "trueFalse").length;
      if (type === "qcm") return bank.filter(q => getQuestionCategory(q) !== "trueFalse").length;
      return bank.length;
    }

    function openQuizSettings() {
      const modal = document.getElementById("modal");
      const max = getMaximumQuestionCount();
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content settings-modal-content">
          <h2>⚙ Paramètres du quiz</h2>
          <div class="settings-field">
            <label for="settingsQuestionCount"><strong>Nombre de questions</strong></label>
            <input id="settingsQuestionCount" type="number" min="1" max="${max}" value="${Math.min(quizSettings.questionCount, max)}">
            <small id="settingsQuestionLimit" class="muted">Maximum disponible : ${max}</small>
          </div>
          <div class="settings-field">
            <label for="settingsDisplayMode"><strong>Mode d’affichage</strong></label>
            <select id="settingsDisplayMode">
              <option value="one" ${quizSettings.displayMode === "one" ? "selected" : ""}>Question par question</option>
              <option value="all" ${quizSettings.displayMode === "all" ? "selected" : ""}>Toutes les questions</option>
            </select>
          </div>
          <div class="settings-field">
            <label for="settingsQuestionType"><strong>Type de questions</strong></label>
            <select id="settingsQuestionType" onchange="updateSettingsQuestionLimit()">
              <option value="both" ${quizSettings.questionType === "both" ? "selected" : ""}>QCM et QCD</option>
              <option value="qcm" ${quizSettings.questionType === "qcm" ? "selected" : ""}>QCM seulement</option>
              <option value="qcd" ${quizSettings.questionType === "qcd" ? "selected" : ""}>QCD seulement (Vrai/Faux)</option>
            </select>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Caméra</strong>
              <small>Désactivée pour ce site.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsCameraEnabled" type="checkbox" disabled>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">Désactivée</span>
            </label>
          </div>
          <div class="settings-toggle-row">
            <div>
              <strong>Anti-triche</strong>
              <small>Détecter les sorties de page, changements d’application et raccourcis interdits.</small>
            </div>
            <label class="settings-switch">
              <input id="settingsAntiCheatEnabled" type="checkbox" ${quizSettings.antiCheatEnabled !== false ? "checked" : ""}>
              <span class="settings-switch-slider"></span>
              <span class="settings-switch-state">${quizSettings.antiCheatEnabled !== false ? "Activé" : "Désactivé"}</span>
            </label>
          </div>
          <div class="actions settings-actions">
            <button class="btn-light" type="button" onclick="closeModal()">Annuler</button>
            <button class="btn-green" type="button" onclick="saveQuizSettings()">Enregistrer</button>
          </div>
        </div>`;
    }

    function updateSettingsQuestionLimit() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const input = document.getElementById("settingsQuestionCount");
      input.max = max;
      if (Number(input.value) > max) input.value = max;
      document.getElementById("settingsQuestionLimit").textContent = `Maximum disponible : ${max}`;
    }

    function saveQuizSettings() {
      const type = document.getElementById("settingsQuestionType").value;
      const max = getMaximumQuestionCount(type);
      const requested = Number(document.getElementById("settingsQuestionCount").value);
      quizSettings = {
        questionCount: Math.max(1, Math.min(max, Number.isFinite(requested) ? Math.floor(requested) : 50)),
        displayMode: document.getElementById("settingsDisplayMode").value,
        questionType: type,
        cameraEnabled: false,
        antiCheatEnabled: document.getElementById("settingsAntiCheatEnabled").checked
      };
      localStorage.setItem(QUIZ_SETTINGS_KEY, JSON.stringify(quizSettings));
      closeModal();
      renderSubjects();
    }

    function showStudentForm(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      document.querySelectorAll(".student-form").forEach(form => form.classList.add("hidden"));
      const form = document.getElementById(`student-form-${subjectId}`);
      const matriculeInput = document.getElementById(`matricule-${subjectId}`);
      if (matriculeInput) matriculeInput.value = getActiveMatricule();

      if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }


    function stopCameraStream() {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
      }
    }

    function closeCameraGate() {
      stopCameraStream();
      const modal = document.getElementById("cameraGateModal");
      if (modal) modal.remove();
    }

    function beginEvaluationAfterPhoto(subjectId, student, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        ...student,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    async function openCameraGate(subjectId, student) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Votre navigateur ne permet pas l'utilisation de la caméra. Utilisez Chrome, Edge ou Firefox avec un lien HTTPS.");
        return;
      }

      closeCameraGate();

      const modal = document.createElement("div");
      modal.id = "cameraGateModal";
      modal.className = "camera-gate-modal";
      modal.innerHTML = `

</div>
      `;
      document.body.appendChild(modal);

      const video = document.getElementById("cameraGateVideo");
      const takeBtn = document.getElementById("takeCameraPhotoBtn");
      const preview = document.getElementById("cameraGatePreview");
      const canvas = document.getElementById("cameraGateCanvas");

      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false
        });
        video.srcObject = cameraStream;
      } catch (error) {
        closeCameraGate();
        alert("Caméra non activée. Vous devez autoriser la caméra et prendre une photo avant d'accéder à l'évaluation.");
        return;
      }

      takeBtn.onclick = () => {
        const width = 320;
        const videoWidth = video.videoWidth || 640;
        const videoHeight = video.videoHeight || 480;
        const height = Math.round(width * (videoHeight / videoWidth));

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, width, height);
        const photoData = canvas.toDataURL("image/jpeg", 0.65);

        preview.classList.remove("hidden");
        preview.innerHTML = `
<p>Photo prise avec succès.</p>`;
        takeBtn.textContent = "Accéder à l'évaluation";
        takeBtn.onclick = () => {
          closeCameraGate();
          beginEvaluationAfterPhoto(subjectId, student, photoData);
        };
      };
    }


    function startQuickEvaluation(subjectId) {
      if (quizSettings.cameraEnabled === false) {
        beginQuizAfterCamera(subjectId, "");
        return;
      }
      openCameraBeforeQuiz(subjectId);
    }

    function openCameraBeforeQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const modal = document.getElementById("modal");
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-content camera-modal-content">
          <h2>Photo obligatoire avant l'évaluation</h2>
          <p class="muted">Autorisez la caméra, puis prenez une photo pour accéder à l'évaluation.</p>

          <div class="camera-box">
            <video id="cameraPreview" autoplay playsinline muted></video>
            <canvas id="cameraCanvas" class="hidden"></canvas>
            <img id="cameraPhotoPreview" class="camera-photo-preview hidden" alt="Photo prise">
            <div id="cameraFallbackBox" class="camera-fallback-box hidden">
              <p><strong>Caméra directe bloquée ou indisponible.</strong></p>
              <p>Utilisez le bouton ci-dessous pour prendre une photo avec votre téléphone ou choisir une photo.</p>
              <label class="camera-file-btn">
                Prendre / choisir une photo
                <input id="cameraFileInput" type="file" accept="image/*" capture="user" onchange="handleStudentPhotoFile('${subjectId}', this)">
              </label>
            </div>
          </div>

          <div class="actions camera-actions">
            <button id="captureCameraBtn" class="btn-green" onclick="captureStudentPhoto('${subjectId}')">Prendre la photo</button>
            <button class="btn-light" onclick="closeCameraModal()">Annuler</button>
          </div>
          <p id="cameraError" class="camera-error hidden"></p>
        </div>
      `;

      startCompatibleCamera(subjectId);
    }

    function getCompatibleGetUserMedia() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return constraints => navigator.mediaDevices.getUserMedia(constraints);
      }

      const legacy =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      if (!legacy) return null;

      return constraints => new Promise((resolve, reject) => {
        legacy.call(navigator, constraints, resolve, reject);
      });
    }

    function startCompatibleCamera(subjectId) {
      const getMedia = getCompatibleGetUserMedia();
      const video = document.getElementById("cameraPreview");
      const captureBtn = document.getElementById("captureCameraBtn");

      if (!getMedia) {
        showCameraFallback(subjectId, "Votre navigateur ne permet pas la caméra directe.");
        return;
      }

      const attempts = [
        { video: { facingMode: "user" }, audio: false },
        { video: true, audio: false }
      ];

      function tryCamera(index) {
        if (index >= attempts.length) {
          showCameraFallback(subjectId, "La caméra directe est bloquée. Utilisez le bouton de photo proposé ci-dessous.");
          return;
        }

        getMedia(attempts[index])
          .then(stream => {
            window.currentCameraStream = stream;
            if (video) {
              video.srcObject = stream;
              video.classList.remove("hidden");
              video.play().catch(() => {});
            }
            if (captureBtn) captureBtn.disabled = false;
            const errorBox = document.getElementById("cameraError");
            if (errorBox) errorBox.classList.add("hidden");
          })
          .catch(() => tryCamera(index + 1));
      }

      if (captureBtn) captureBtn.disabled = false;
      tryCamera(0);
    }

    function showCameraFallback(subjectId, message = "") {
      const video = document.getElementById("cameraPreview");
      const fallback = document.getElementById("cameraFallbackBox");
      const captureBtn = document.getElementById("captureCameraBtn");
      const errorBox = document.getElementById("cameraError");

      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }

      if (video) {
        video.srcObject = null;
        video.classList.add("hidden");
      }
      if (fallback) fallback.classList.remove("hidden");
      if (captureBtn) captureBtn.disabled = true;

      if (message && errorBox) {
        errorBox.textContent = message + " Si possible, ouvrez le site en HTTPS ou en localhost.";
        errorBox.classList.remove("hidden");
      }
    }

    function handleStudentPhotoFile(subjectId, input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type || !file.type.startsWith("image/")) {
        alert("Veuillez sélectionner une image.");
        input.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        const photoData = event.target.result;
        window.currentStudentPhoto = photoData;

        const img = document.getElementById("cameraPhotoPreview");
        if (img) {
          img.src = photoData;
          img.classList.remove("hidden");
        }

        closeCameraModal();
        beginQuizAfterCamera(subjectId, photoData);
      };
      reader.onerror = () => alert("Impossible de lire la photo. Veuillez réessayer.");
      reader.readAsDataURL(file);
    }

    function closeCameraModal() {
      if (window.currentCameraStream) {
        window.currentCameraStream.getTracks().forEach(track => track.stop());
        window.currentCameraStream = null;
      }
      const modal = document.getElementById("modal");
      if (modal) {
        modal.className = "modal hidden";
        modal.innerHTML = "";
      }
    }

    function captureStudentPhoto(subjectId) {
      const video = document.getElementById("cameraPreview");
      const canvas = document.getElementById("cameraCanvas");
      const img = document.getElementById("cameraPhotoPreview");

      if (!video || !canvas || !video.srcObject) {
        showCameraFallback(subjectId, "Veuillez autoriser la caméra, puis reprendre la photo.");
        return;
      }

      const width = video.videoWidth || 640;
      const height = video.videoHeight || 480;
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      const photoData = canvas.toDataURL("image/jpeg", 0.85);
      window.currentStudentPhoto = photoData;

      if (img) {
        img.src = photoData;
        img.classList.remove("hidden");
      }

      closeCameraModal();
      beginQuizAfterCamera(subjectId, photoData);
    }

    function beginQuizAfterCamera(subjectId, photoData) {
      const subject = subjects.find(s => s.id === subjectId);
      if (!subject) return alert("Sujet introuvable.");

      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const profile = getStudentProfile();
      currentSubject = prepareSubjectForQuiz(subject);
      currentStudent = {
        nom: profile.nom,
        prenom: profile.prenom,
        matricule: profile.matricule,
        photo: photoData || ""
      };
      quizStartTime = new Date();

      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("quizView").classList.remove("hidden");

      currentQuestionIndex = 0;
      savedQuestionAnswers = {};
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
      startPageExitTracking();
    }

    function logoutStudent() {
      clearInterval(timerInterval);
      localStorage.removeItem("REVISION_LICENCE_1_ACTIVE_FULL_NAME");
      window.activeStudentFullName = "";

      const accessPage = document.getElementById("accessPage");
      const siteHeader = document.getElementById("siteHeader");
      const mainContent = document.getElementById("mainContent");
      const input = document.getElementById("accessFullName");

      if (siteHeader) siteHeader.style.display = "none";
      if (mainContent) mainContent.style.display = "none";
      if (accessPage) accessPage.style.display = "flex";
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 50);
      }
    }

    function startQuiz(subjectId) {
      const subject = subjects.find(s => s.id === subjectId);
      const status = getSubjectStatus(subject);
      if (status.key !== "available") return alert(status.message);

      const nom = document.getElementById(`nom-${subjectId}`).value.trim();
      const prenom = document.getElementById(`prenom-${subjectId}`).value.trim();
      const matricule = (document.getElementById(`matricule-${subjectId}`).value || getActiveMatricule()).trim();

      if (!matricule) {
        alert("Veuillez entrer votre nom et vos prénoms sur la première page.");
        location.reload();
        return;
      }
      if (!nom || !prenom) return alert("Veuillez renseigner nom et prénom.");

      // Les étudiants peuvent reprendre le même sujet autant de fois qu’ils le souhaitent.
      if (quizSettings.cameraEnabled === false) {
        beginEvaluationAfterPhoto(subjectId, { nom, prenom, matricule }, "");
        return;
      }
      openCameraGate(subjectId, { nom, prenom, matricule });
    }

    /********************************************************************
     * INTERFACE QUIZ
     ********************************************************************/
    function renderQuiz() {
      const quizView = document.getElementById("quizView");
      const totalQuestions = currentSubject.questions.length;
      if (quizSettings.displayMode === "all") {
        quizView.innerHTML = `
          <div class="quiz-layout quiz-layout-single">
            <div class="panel quiz-panel quiz-panel-clean">
              <div class="question-timer-top question-timer-clean">
                <strong id="timer" class="timer question-timer">${String(Math.floor((totalQuestions * QUESTION_DURATION_SECONDS) / 60)).padStart(2, "0")}:00</strong>
                <div class="question-progress-wrap"><div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div></div>
              </div>
              <form id="quizForm">
                <p class="muted all-questions-note">${totalQuestions} questions affichées sur cette page.</p>
                ${currentSubject.questions.map((question, index) => `
                  <section class="all-question-block">
                    <div class="all-question-number">Question ${index + 1} / ${totalQuestions}</div>
                    ${renderQuestion(question, index)}
                  </section>`).join("")}
                <div class="question-navigation">
                  <button type="button" class="btn-green" onclick="submitQuiz(false)">Valider ma composition</button>
                </div>
              </form>
            </div>
          </div>`;
        restoreAllQuestionAnswers();
        quizView.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const q = currentSubject.questions[currentQuestionIndex];
      const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

      quizView.innerHTML = `
        <div class="quiz-layout quiz-layout-single">
          <div class="panel quiz-panel quiz-panel-clean">
            <div class="question-timer-top question-timer-clean">
              <strong id="timer" class="timer question-timer">00:30</strong>
              <div class="question-progress-wrap" aria-label="Progression du temps restant">
                <div id="questionProgressBar" class="question-progress-bar" style="width:100%"></div>
              </div>
            </div>

            <form id="quizForm">
              ${renderQuestion(q, currentQuestionIndex)}
              <div class="question-navigation">
                <button type="button" class="btn-green" onclick="goToNextQuestion()">
                  ${isLastQuestion ? "Valider ma composition" : "Question suivante"}
                </button>
              </div>
            </form>
          </div>
        </div>
      `;
      restoreCurrentQuestionAnswer();
      quizView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderQuestion(q, index) {
      const isMultiple = Array.isArray(q.answers) || Array.isArray(q.correct);
      const inputType = isMultiple ? "checkbox" : "radio";
      const help = isMultiple ? `<p class="muted">Plusieurs réponses sont possibles.</p>` : "";
      const options = Array.isArray(q.options) ? q.options : [];
      const caseContext = q.caseContext ? `<div class="case-context"><div class="case-context-label">Texte de l’étude de cas</div><div class="case-context-text">${escapeHTML(q.caseContext).replace(/\n/g, "<br>")}</div></div>` : "";
      return `
        <div class="question question-clean">
          ${caseContext}
          <p class="question-text-only">${escapeHTML(q.text)}</p>
          ${help}
          ${options.map(option => `
            <label class="option">
              <input type="${inputType}" name="q-${index}" value="${escapeHTML(option)}">
              <span>${escapeHTML(option)}</span>
            </label>
          `).join("")}
        </div>
      `;
    }

    function saveCurrentQuestionAnswer() {
      const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]:checked`));
      savedQuestionAnswers[currentQuestionIndex] = selectedNodes.map(input => input.value);
    }

    function saveAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        const selectedNodes = Array.from(document.querySelectorAll(`input[name="q-${index}"]:checked`));
        savedQuestionAnswers[index] = selectedNodes.map(input => input.value);
      });
    }

    function restoreAllQuestionAnswers() {
      currentSubject.questions.forEach((question, index) => {
        (savedQuestionAnswers[index] || []).forEach(value => {
          const input = Array.from(document.querySelectorAll(`input[name="q-${index}"]`)).find(node => node.value === value);
          if (input) input.checked = true;
        });
      });
    }

    function restoreCurrentQuestionAnswer() {
      const savedAnswers = savedQuestionAnswers[currentQuestionIndex] || [];
      savedAnswers.forEach(value => {
        const input = Array.from(document.querySelectorAll(`input[name="q-${currentQuestionIndex}"]`))
          .find(node => node.value === value);
        if (input) input.checked = true;
      });
    }

    function goToNextQuestion() {
      saveCurrentQuestionAnswer();
      if (currentQuestionIndex >= currentSubject.questions.length - 1) {
        submitQuiz(false);
        return;
      }
      currentQuestionIndex++;
      renderQuiz();
      startTimer(QUESTION_DURATION_SECONDS);
    }

    function startTimer(seconds) {
      if (quizSettings.displayMode === "all") seconds = currentSubject.questions.length * QUESTION_DURATION_SECONDS;
      let remaining = seconds;
      updateTimerDisplay(remaining, seconds);
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        remaining--;
        updateTimerDisplay(remaining, seconds);
        if (remaining <= 0) {
          clearInterval(timerInterval);
          if (quizSettings.displayMode === "all") submitQuiz(true);
          else goToNextQuestion();
        }
      }, 1000);
    }

    function updateTimerDisplay(seconds, totalSeconds = QUESTION_DURATION_SECONDS) {
      const safeSeconds = Math.max(0, seconds);
      const min = Math.floor(safeSeconds / 60).toString().padStart(2, "0");
      const sec = (safeSeconds % 60).toString().padStart(2, "0");
      const el = document.getElementById("timer");
      if (el) el.textContent = `${min}:${sec}`;

      const progress = document.getElementById("questionProgressBar");
      if (progress) {
        const percent = totalSeconds > 0 ? Math.max(0, Math.min(100, (safeSeconds / totalSeconds) * 100)) : 0;
        progress.style.width = `${percent}%`;
        progress.classList.toggle("warning", percent <= 35 && percent > 15);
        progress.classList.toggle("danger", percent <= 15);
      }
    }


    function sameAnswers(studentAnswers, expectedAnswers) {
      const normalize = arr => arr.filter(Boolean).map(v => String(v).trim()).sort();
      const a = normalize(studentAnswers);
      const b = normalize(expectedAnswers);
      return a.length === b.length && a.every((value, index) => value === b[index]);
    }

    function renderSecurityEvents(events) {
      if (!events || !events.length) return "Aucun incident détecté";
      return events.map(item => escapeHTML(`${item.time || ""} - ${item.reason || "Incident de sécurité"}`)).join("<br>");
    }

    function submitQuiz(auto = false) {
      clearInterval(timerInterval);

      let good = 0, bad = 0, empty = 0, score = 0;
      const marking = currentSubject.marking || CONFIG.defaultMarking;
      const answers = [];

      if (quizSettings.displayMode === "all") saveAllQuestionAnswers();
      else saveCurrentQuestionAnswer();

      currentSubject.questions.forEach((q, index) => {
        const expected = Array.isArray(q.answers) ? q.answers : (Array.isArray(q.correct) ? q.correct : [q.answer || q.correct]);
        const studentAnswers = savedQuestionAnswers[index] || [];
        const studentAnswer = studentAnswers.join(" ; ");
        const correctAnswer = expected.join(" ; ");
        let state = "empty";

        if (studentAnswers.length === 0) {
          empty++;
          score += Number(marking.empty);
        } else if (sameAnswers(studentAnswers, expected)) {
          good++;
          score += Number(marking.correct);
          state = "good";
        } else {
          bad++;
          // Barème : -1 uniquement pour une mauvaise réponse en QCD.
          // Une mauvaise réponse en QCM vaut 0 point.
          if (String(q.type || "").toLowerCase() === "qcd") {
            score += Number(marking.wrong);
          }
          state = "bad";
        }

        answers.push({
          question: q.text,
          options: Array.isArray(q.options) ? q.options : [],
          studentAnswer,
          correctAnswer,
          correction: q.correction || q.explanation || "",
          source: q.source || "",
          state
        });
      });

      const maxScore = currentSubject.questions.length * Number(marking.correct);
      let note20 = maxScore > 0 ? (score / maxScore) * 20 : 0;
      note20 = Math.max(0, note20).toFixed(2);

      // Si l'étudiant sort de la page, de l'onglet, de l'application ou du plein écran,
      // il continue son devoir jusqu'à la fin. Au résultat, on affiche seulement
      // la mention "Auto envoi" et l'information est enregistrée dans l'administration.
      const pageExitDetected = hasRealPageExitDuringQuiz();
      const autoSend = pageExitDetected === true;

      const usedSeconds = Math.round((new Date() - quizStartTime) / 1000);
      const result = {
        id: Date.now().toString(),
        date: new Date().toLocaleString("fr-FR"),
        student: currentStudent,
        studentPhoto: currentStudent.photo || "",
        photoTaken: Boolean(currentStudent.photo),
        subjectId: currentSubject.id,
        subjectTitle: currentSubject.title,
        matter: currentSubject.matter,
        score,
        note20,
        good,
        bad,
        empty,
        total: currentSubject.questions.length,
        answers,
        usedTime: formatDuration(usedSeconds),
        pageExitCount,
        pageExitEvents,
        securityEvents: pageExitEvents,
        pageExitDetected,
        autoSend,
        autoSendScoreZero: false
      };

      const results = getResults();
      results.push(result);
      saveResults(results);

      // Aucune tentative n’est verrouillée : le même matricule peut composer plusieurs fois le même sujet.

      renderResult(result);
    }

    function formatScoreForDisplay(value) {
      const numericValue = Number(value || 0);
      if (Number.isInteger(numericValue)) return String(numericValue);
      return numericValue.toFixed(2).replace(/\.00$/, "");
    }

    function renderResult(result) {
      stopPageExitTracking();
      // Afficher "Auto envoi" seulement si une sortie réelle a été détectée
      // pendant l'évaluation. La note calculée est conservée.
      const resultIsAutoSend = (result.autoSend === true || result.pageExitDetected === true);
      const displayedScore = Number(result.score || 0);
      const displayedResult = formatScoreForDisplay(displayedScore);
      const autoSendMessage = resultIsAutoSend ? '<div class="auto-send-message">Auto envoi</div>' : "";
      const mainContent = document.getElementById("mainContent");
      const resultPhoto = result.studentPhoto || result.student?.photo || "";
      const photoHtml = resultPhoto ? `
` : "";
      if (mainContent) mainContent.style.display = "block";
      const welcomePopup = document.getElementById("welcomePopup");
      if (welcomePopup) welcomePopup.style.display = "none";
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("adminView").classList.add("hidden");
      document.getElementById("resultView").classList.remove("hidden");
      document.getElementById("resultView").innerHTML = `
        <div class="panel result-card">
          <h2>Résultat de composition</h2>
          ${autoSendMessage}
          <p class="score-big">${displayedResult}</p>
          <div class="grid">
            <div><strong>Statut :</strong> ${resultIsAutoSend ? "Auto envoi" : "Envoi normal"}</div>
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(result.student.matricule || `${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
            <div><strong>Sujet :</strong> ${escapeHTML(result.subjectTitle)}</div>
            <div><strong>Score :</strong> ${displayedScore}</div>
            <div><strong>Bonnes réponses :</strong> ${result.good}</div>
            <div><strong>Mauvaises réponses :</strong> ${result.bad}</div>
            <div><strong>Sans réponse :</strong> ${result.empty}</div>
            <div><strong>Temps utilisé :</strong> ${result.usedTime}</div>
            <div><strong>Incidents sécurité :</strong> ${Number(result.pageExitCount || 0)}</div>
            <div><strong>Détails sécurité :</strong><br>${renderSecurityEvents(result.pageExitEvents || result.securityEvents)}</div>
          </div>
          ${photoHtml}
          <br>
          <div class="actions">
            <button id="correctionToggleButton" type="button" class="btn-green" onclick="toggleCorrection()">Voir la correction</button>
            <button onclick="showHome()">Retour à l'accueil</button>
          </div>
          <div id="correctionBox" class="correction-box hidden">
            ${renderCorrection(result)}
          </div>
        </div>
      `;
      document.getElementById("resultView").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function toggleCorrection() {
      const box = document.getElementById("correctionBox");
      const button = document.getElementById("correctionToggleButton");
      if (!box) return;
      const willShow = box.classList.contains("hidden");
      box.classList.toggle("hidden");
      if (button) button.textContent = willShow ? "Masquer la correction" : "Voir la correction";
      if (willShow) box.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function renderCorrection(result) {
      if (!result.answers || !result.answers.length) {
        return `<p class="muted">Aucune correction disponible pour cet ancien résultat.</p>`;
      }

      return `
        <h3>Correction détaillée</h3>
        <p class="muted">Comparez vos réponses avec les bonnes réponses et lisez l'explication de chaque question.</p>
        ${result.answers.map((a, index) => {
          const answerState = a.state === "good" ? "Trouvé" : (a.state === "empty" ? "Non répondu" : "Non trouvé");
          return `
          <div class="correction-item ${a.state}">
            <h4>Question ${index + 1}</h4>
            <p class="answer-status ${a.state}"><strong>${answerState}</strong></p>
            <p><strong>Énoncé :</strong> ${escapeHTML(a.question)}</p>
            <p><strong>Réponse donnée :</strong> ${a.studentAnswer ? escapeHTML(a.studentAnswer) : "Aucune réponse"}</p>
            <p><strong>Bonne réponse :</strong> ${escapeHTML(a.correctAnswer)}</p>
            ${a.correction ? `<p><strong>Explication :</strong> ${escapeHTML(a.correction)}</p>` : `<p><strong>Explication :</strong> La bonne réponse est ${escapeHTML(a.correctAnswer)}.</p>`}
            ${a.source ? `<p><strong>Sources :</strong> ${escapeHTML(a.source)}</p>` : ""}
          </div>
        `}).join("")}
      `;
    }

    /********************************************************************
     * ADMINISTRATION
     ********************************************************************/
    function openAdminLogin() {
      const password = prompt("Mot de passe ADMIN :");
      if (password === ADMIN_PASSWORD) showAdmin();
      else if (password !== null) alert("Mot de passe incorrect.");
    }

    function showAdmin() {
      clearInterval(timerInterval);
      document.getElementById("homeView").classList.add("hidden");
      document.getElementById("quizView").classList.add("hidden");
      document.getElementById("resultView").classList.add("hidden");
      document.getElementById("adminView").classList.remove("hidden");
      renderAdminSubjects();
    }

    function renderAdminSubjects() {
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="table-wrap">
          <table>
            <thead><tr><th>Titre</th><th>Matière</th><th>Affichage accueil</th><th>Dates</th><th>Durée</th><th>Questions</th><th>Actions</th></tr></thead>
            <tbody>
              ${subjects.map(s => `
                <tr>
                  <td>${escapeHTML(s.title)}</td>
                  <td>${escapeHTML(s.matter)}</td>
                  <td><span class="badge ${s.programmed ? 'available' : 'locked'}">${s.programmed ? 'Programmé' : 'Non programmé'}</span></td>
                  <td>Du ${formatDateTime(s.openDate, s.openTime)}<br>au ${formatDateTime(s.closeDate, s.closeTime)}</td>
                  <td>${s.duration} min</td>
                  <td>${getQuizQuestionCount()} tirées sur ${s.questions.length}</td>
                  <td class="actions">
                    <button class="${s.programmed ? 'btn-dark' : 'btn-green'}" onclick="toggleProgrammed('${s.id}')">${s.programmed ? 'Retirer' : 'Programmer'}</button>
                    <button class="btn-orange" onclick="openSubjectEditor('${s.id}')">Modifier</button>
                    <button class="btn-red" onclick="deleteSubject('${s.id}')">Supprimer</button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderAdminResults() {
      const results = getResults().slice().reverse();
      const content = document.getElementById("adminContent");
      content.innerHTML = `
        <div class="topbar results-toolbar">
          <div>
            <h3>Résultats enregistrés</h3>
            <p class="muted">Importe les résultats d’un autre devoir ou exporte les résultats sauvegardés.</p>
          </div>
          <div class="actions">
            <label class="btn btn-light file-btn" for="importResultsFile">Choisir un fichier</label>
            <input id="importResultsFile" class="hidden" type="file" accept=".json,.csv,application/json,text/csv">
            <button class="btn-green" onclick="importResultsFromFile()">Importer les résultats</button>
            <button class="btn-dark" onclick="exportResultsJSON()">Exporter JSON</button>
            <button class="btn-orange" onclick="exportResultsCSV()">Exporter Excel/CSV</button>
          </div>
        </div>
        <div class="import-help">
          <strong>Formats acceptés :</strong> JSON exporté par la plateforme ou CSV avec les colonnes : nom, prenom, matricule, sujet, note20.
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Nom et Prénoms</th><th>Sujet</th><th>Note</th><th>Détails</th></tr></thead>
            <tbody>
              ${results.map(r => `
                <tr>
                  <td>${escapeHTML(r.date)}</td>
                  <td>${escapeHTML(r.student?.matricule || `${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
                  <td>${escapeHTML(r.subjectTitle || r.subjectId || "Devoir importé")}</td>
                  <td><strong>${escapeHTML(r.note20 ?? "")}</strong></td>
                  <td>Statut ${(r.autoSend === true || r.pageExitDetected === true) ? "Auto envoi" : "Normal"} | Score ${escapeHTML(r.score ?? "")} | Bonnes ${escapeHTML(r.good ?? "")} | Mauvaises ${escapeHTML(r.bad ?? "")} | Vides ${escapeHTML(r.empty ?? "")} | Temps ${escapeHTML(r.usedTime ?? "")} | Incidents sécurité ${escapeHTML(r.pageExitCount ?? 0)}<br>${renderSecurityEvents(r.pageExitEvents || r.securityEvents)}
</td>
                </tr>
              `).join("") || `<tr><td colspan="5">Aucun résultat pour le moment.</td></tr>`}
            </tbody>
          </table>
        </div>
      `;
    }

    /********************************************************************
     * IMPORTATION / EXPORTATION DES RÉSULTATS
     ********************************************************************/
    function importResultsFromFile() {
      const input = document.getElementById("importResultsFile");
      if (!input || !input.files.length) return alert("Veuillez choisir un fichier de résultats à importer.");

      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function(event) {
        try {
          const text = event.target.result;
          const imported = file.name.toLowerCase().endsWith(".csv") ? parseResultsCSV(text) : JSON.parse(text);

          if (!Array.isArray(imported) || imported.length === 0) {
            return alert("Le fichier ne contient aucun résultat valide.");
          }

          const normalized = imported.map(normalizeImportedResult).filter(Boolean);
          if (!normalized.length) return alert("Aucun résultat valide n’a été trouvé dans le fichier.");

          const existing = getResults();
          const existingKeys = new Set(existing.map(resultUniqueKey));
          let added = 0;

          normalized.forEach(result => {
            const key = resultUniqueKey(result);
            if (!existingKeys.has(key)) {
              existing.push(result);
              existingKeys.add(key);
              added++;
            }
          });

          saveResults(existing);
          input.value = "";
          renderAdminResults();
          alert(`${added} résultat(s) importé(s). ${normalized.length - added} doublon(s) ignoré(s).`);
        } catch (error) {
          console.error(error);
          alert("Impossible d’importer ce fichier. Vérifiez qu’il s’agit d’un fichier JSON ou CSV valide.");
        }
      };

      reader.readAsText(file);
    }

    function normalizeImportedResult(item) {
      if (!item || typeof item !== "object") return null;
      const student = item.student || {};
      const nom = student.nom || item.nom || item.name || "";
      const prenom = student.prenom || item.prenom || item.firstname || "";
      const matricule = student.matricule || item.matricule || item.code || "";
      const note20 = item.note20 ?? item.note ?? item.note_sur_20 ?? "";
      if (!nom && !prenom && !matricule && note20 === "") return null;

      return {
        id: item.id || `import-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        date: item.date || new Date().toLocaleString("fr-FR"),
        student: { nom: String(nom), prenom: String(prenom), matricule: String(matricule) },
        subjectId: item.subjectId || item.subject_id || "devoir-importe",
        subjectTitle: item.subjectTitle || item.sujet || item.subject || item.title || "Devoir importé",
        matter: item.matter || item.matiere || "",
        score: item.score ?? "",
        note20: note20 !== "" ? String(note20).replace(",", ".") : "",
        good: item.good ?? item.bonnes ?? "",
        bad: item.bad ?? item.mauvaises ?? "",
        empty: item.empty ?? item.vides ?? "",
        total: item.total ?? "",
        answers: Array.isArray(item.answers) ? item.answers : [],
        usedTime: item.usedTime || item.temps || ""
      };
    }

    function resultUniqueKey(result) {
      return [
        result.student?.matricule || "",
        result.subjectId || result.subjectTitle || "",
        result.note20 || "",
        result.date || ""
      ].join("|").toLowerCase();
    }

    function exportResultsJSON() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      downloadTextFile("resultats-composition.json", JSON.stringify(results, null, 2), "application/json");
    }

    function exportResultsCSV() {
      const results = getResults();
      if (!results.length) return alert("Aucun résultat à exporter.");
      const headers = ["date", "nom", "prenom", "matricule", "sujet", "matiere", "note20", "score", "bonnes", "mauvaises", "vides", "total", "temps"];
      const rows = results.map(r => [
        r.date,
        r.student?.nom,
        r.student?.prenom,
        r.student?.matricule,
        r.subjectTitle,
        r.matter,
        r.note20,
        r.score,
        r.good,
        r.bad,
        r.empty,
        r.total,
        r.usedTime
      ]);
      const csv = [headers, ...rows].map(row => row.map(csvEscape).join(";")).join("\n");
      downloadTextFile("resultats-composition.csv", "﻿" + csv, "text/csv;charset=utf-8");
    }

    function parseResultsCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) return [];
      const separator = lines[0].includes(";") ? ";" : ",";
      const headers = splitCSVLine(lines[0], separator).map(h => h.trim().toLowerCase());
      return lines.slice(1).map(line => {
        const values = splitCSVLine(line, separator);
        const obj = {};
        headers.forEach((h, i) => obj[h] = values[i] || "");
        return {
          date: obj.date,
          nom: obj.nom,
          prenom: obj.prenom || obj["prénom"],
          matricule: obj.matricule || obj.code,
          sujet: obj.sujet || obj.subject || obj.devoir,
          matiere: obj.matiere || obj["matière"],
          note20: obj.note20 || obj.note || obj["note"],
          score: obj.score,
          good: obj.bonnes,
          bad: obj.mauvaises,
          empty: obj.vides,
          total: obj.total,
          usedTime: obj.temps
        };
      });
    }

    function splitCSVLine(line, separator) {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const next = line[i + 1];
        if (char === '"' && inQuotes && next === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === separator && !inQuotes) {
          values.push(current);
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current);
      return values;
    }

    function csvEscape(value) {
      const str = String(value ?? "");
      return `"${str.replaceAll('"', '""')}"`;
    }

    function downloadTextFile(filename, content, type) {
      const blob = new Blob([content], { type });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function openSubjectEditor(subjectId = null) {
      const subject = subjectId ? cloneData(subjects.find(s => s.id === subjectId)) : {
        id: "sujet-" + Date.now(),
        title: "Nouveau sujet",
        matter: "Soins infirmiers",
        description: "Description du sujet",
        instructions: "Répondez à toutes les questions.",
        duration: 30,
        programmed: false,
        openDate: new Date().toISOString().slice(0, 10),
        openTime: "08:00",
        closeDate: new Date().toISOString().slice(0, 10),
        closeTime: "18:00",
        marking: { correct: 1, wrong: -1, empty: 0 },
        questions: []
      };

      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").innerHTML = `
        <div class="modal-content">
          <div class="topbar">
            <h2>${subjectId ? "Modifier" : "Ajouter"} un sujet</h2>
            <button class="btn-red" onclick="closeModal()">Fermer</button>
          </div>
          <div class="form-grid">
            <div><label>Titre</label><input id="edit-title" value="${escapeAttr(subject.title)}"></div>
            <div><label>Matière</label><select id="edit-matter">
              ${["Soins infirmiers", "Santé publique", "Obstétrique", "Anatomie", "Pharmacologie"].map(m => `<option ${subject.matter === m ? "selected" : ""}>${m}</option>`).join("")}
            </select></div>
            <div><label>Durée en minutes</label><input id="edit-duration" type="number" min="1" value="${subject.duration}"></div>
            <div><label>Affichage accueil</label><select id="edit-programmed">
              <option value="false" ${subject.programmed !== true ? "selected" : ""}>Non programmé</option>
              <option value="true" ${subject.programmed === true ? "selected" : ""}>Programmé</option>
            </select></div>
            <div><label>Bonne réponse</label><input id="edit-correct" type="number" value="${subject.marking.correct}"></div>
            <div><label>Mauvaise réponse</label><input id="edit-wrong" type="number" value="${subject.marking.wrong}"></div>
            <div><label>Pas de réponse</label><input id="edit-empty" type="number" value="${subject.marking.empty}"></div>
            <div><label>Date ouverture</label><input id="edit-open-date" type="date" value="${subject.openDate}"></div>
            <div><label>Heure ouverture</label><input id="edit-open-time" type="time" value="${subject.openTime}"></div>
            <div><label>Date fermeture</label><input id="edit-close-date" type="date" value="${subject.closeDate}"></div>
            <div><label>Heure fermeture</label><input id="edit-close-time" type="time" value="${subject.closeTime}"></div>
          </div>
          <label>Description</label><textarea id="edit-description">${escapeHTML(subject.description)}</textarea>
          <label>Consignes</label><textarea id="edit-instructions">${escapeHTML(subject.instructions)}</textarea>
          <h3>Questions</h3>
          <div id="questionsEditor"></div>
          <button class="btn-green" onclick="addQuestionEditor()">+ Ajouter une question</button>
          <br><br>
          <button class="btn-green" onclick="saveSubjectFromEditor('${subject.id}')">Enregistrer le sujet</button>
        </div>
      `;

      window.editingQuestions = subject.questions;
      renderQuestionsEditor();
    }

    function renderQuestionsEditor() {
      const box = document.getElementById("questionsEditor");
      box.innerHTML = window.editingQuestions.map((q, index) => `
        <div class="question-editor">
          <div class="topbar">
            <h3>Question ${index + 1}</h3>
            <button class="btn-red" onclick="removeQuestionEditor(${index})">Supprimer</button>
          </div>
          <label>Type</label>
          <select onchange="updateQuestionField(${index}, 'type', this.value)">
            <option value="qcm" ${q.type === "qcm" ? "selected" : ""}>QCM</option>
            <option value="vf" ${q.type === "vf" ? "selected" : ""}>Vrai/Faux</option>
          </select>
          <label>Question</label>
          <textarea oninput="updateQuestionField(${index}, 'text', this.value)">${escapeHTML(q.text)}</textarea>
          <label>Options séparées par un point-virgule ;</label>
          <input value="${escapeAttr(q.options.join('; '))}" oninput="updateOptions(${index}, this.value)">
          <label>Réponse correcte</label>
          <input value="${escapeAttr(q.answer)}" oninput="updateQuestionField(${index}, 'answer', this.value)">
          <label>Correction / explication à afficher après le résultat</label>
          <textarea oninput="updateQuestionField(${index}, 'correction', this.value)">${escapeHTML(q.correction || "")}</textarea>
        </div>
      `).join("") || `<p class="muted">Aucune question. Clique sur “Ajouter une question”.</p>`;
    }

    function updateQuestionField(index, field, value) {
      window.editingQuestions[index][field] = value;
      if (field === "type" && value === "vf") {
        window.editingQuestions[index].options = ["Vrai", "Faux"];
        window.editingQuestions[index].answer = "Vrai";
        renderQuestionsEditor();
      }
    }

    function updateOptions(index, value) {
      window.editingQuestions[index].options = value.split(";").map(v => v.trim()).filter(Boolean);
    }

    function addQuestionEditor() {
      window.editingQuestions.push({ type: "qcm", text: "Nouvelle question", options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A", correction: "Explication de la bonne réponse." });
      renderQuestionsEditor();
    }

    function removeQuestionEditor(index) {
      window.editingQuestions.splice(index, 1);
      renderQuestionsEditor();
    }

    function saveSubjectFromEditor(id) {
      const subject = {
        id,
        title: document.getElementById("edit-title").value.trim(),
        matter: document.getElementById("edit-matter").value,
        description: document.getElementById("edit-description").value.trim(),
        instructions: document.getElementById("edit-instructions").value.trim(),
        duration: Number(document.getElementById("edit-duration").value),
        programmed: document.getElementById("edit-programmed").value === "true",
        openDate: document.getElementById("edit-open-date").value,
        openTime: document.getElementById("edit-open-time").value,
        closeDate: document.getElementById("edit-close-date").value,
        closeTime: document.getElementById("edit-close-time").value,
        marking: {
          correct: Number(document.getElementById("edit-correct").value),
          wrong: Number(document.getElementById("edit-wrong").value),
          empty: Number(document.getElementById("edit-empty").value)
        },
        questions: window.editingQuestions
      };

      if (!subject.title || !subject.openDate || !subject.closeDate || !subject.duration) {
        return alert("Veuillez remplir les champs obligatoires.");
      }

      const index = subjects.findIndex(s => s.id === id);
      if (index >= 0) subjects[index] = subject;
      else subjects.push(subject);

      saveSubjects();
      closeModal();
      renderAdminSubjects();
      alert("Sujet sauvegardé avec succès.");
    }

    function toggleProgrammed(id) {
      const subject = subjects.find(s => s.id === id);
      if (!subject) return;
      subject.programmed = subject.programmed !== true;
      saveSubjects();
      renderAdminSubjects();
      renderSubjects();
    }

    function deleteSubject(id) {
      if (!confirm("Supprimer ce sujet ?")) return;
      subjects = subjects.filter(s => s.id !== id);
      saveSubjects();
      renderAdminSubjects();
    }

    function resetDefaultSubjects() {
      if (!confirm("Voulez-vous restaurer les sujets par défaut ? Les sujets modifiés seront supprimés.")) return;
      localStorage.removeItem(STORAGE_SUBJECTS);
      subjects = cloneData(CONFIG.subjects);
      saveSubjects();
      renderAdminSubjects();
      alert("Sujets par défaut restaurés.");
    }

    function closeModal() {
      document.getElementById("modal").classList.add("hidden");
      document.getElementById("modal").innerHTML = "";
    }

    /********************************************************************
     * SÉCURITÉ SIMPLE
     ********************************************************************/
    // Le suivi beforeunload est déjà géré plus haut avec le comptage des sorties.

    function blockBackButton() {
      history.pushState(null, null, location.href);
      window.addEventListener("popstate", function() {
        history.pushState(null, null, location.href);
        if (!document.getElementById("quizView").classList.contains("hidden")) {
          alert("Le retour est bloqué pendant la composition.");
        }
      });
    }

    /********************************************************************
     * OUTILS
     ********************************************************************/
    function formatDuration(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min} min ${sec} s`;
    }

    function escapeHTML(str) {
      return String(str ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function escapeAttr(str) {
      return escapeHTML(str).replaceAll("\n", " ");
    }


/************************************************
 * MESSAGE AUCUN DEVOIR
 ************************************************/
function renderEmptySubjectsMessage(container){
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">📝</div>

            <h2>Aucun devoir disponible pour le moment</h2>

            <p>
                Aucun devoir n’est actuellement programmé sur la plateforme.
                Veuillez revenir plus tard afin de consulter les prochaines compositions en ligne.
            </p>

            <div class="empty-info">
                La plateforme reste accessible 24h/24 pour les prochaines évaluations.
            </div>
        </div>
    `;
}








/* ============================================================
   PATCH - Bouton Commencer uniquement pour devoir disponible
   ============================================================ */
(function () {
  function cleanStartButtons() {
    const candidates = Array.from(document.querySelectorAll("button, a"));
    candidates.forEach(btn => {
      const label = (btn.innerText || btn.textContent || "").trim().toLowerCase();
      if (label.includes("choisir ce devoir")) {
        btn.textContent = "Commencer";
      }
      if (!label.includes("commencer") && !label.includes("choisir ce devoir")) return;

      let card = btn;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        card = card.parentElement;
        const text = (card.innerText || card.textContent || "").toLowerCase();
        if (text.includes("verrouill") || text.includes("termin")) {
          btn.style.display = "none";
          btn.disabled = true;
          return;
        }
        if (text.includes("disponible")) {
          btn.style.display = "";
          btn.disabled = false;
          return;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(cleanStartButtons, 100);
    setTimeout(cleanStartButtons, 500);
    setTimeout(cleanStartButtons, 1200);
  });

  new MutationObserver(function () {
    setTimeout(cleanStartButtons, 50);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
