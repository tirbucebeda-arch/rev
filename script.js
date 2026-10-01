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
    },
    {
      "id": "hygiene-hospitaliere-as-210",
      "title": "Hygiène hospitalière AS — 210 questions",
      "matter": "Hygiène hospitalière",
      "description": "90 QCD, 90 QCM et 3 études de cas de 10 questions.",
      "instructions": "Respectez le nombre de réponses indiqué. QCD : +1 / −1 / 0. QCM : +1 pour la sélection exacte, 0 sinon. Chaque étude de cas est affichée avec ses questions.",
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
          "id": "hygiene-as-1",
          "type": "qcd",
          "text": "Question 1 — QCD\nL’hygiène hospitalière vise notamment à prévenir les infections associées aux soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle comprend les règles et pratiques qui réduisent le risque infectieux lié aux soins.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 4 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-2",
          "type": "qcd",
          "text": "Question 2 — QCD\nL’hygiène en milieu de soins relève uniquement du personnel d’entretien.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elle concerne tous les acteurs : soignants, personnel d’entretien, patients et visiteurs.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 4–6 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-3",
          "type": "qcd",
          "text": "Question 3 — QCD\nL’hygiène individuelle comprend l’hygiène corporelle et vestimentaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Ces mesures personnelles participent à la préservation de la santé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 4 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-4",
          "type": "qcd",
          "text": "Question 4 — QCD\nL’entretien des locaux constitue l’unique composante de l’hygiène hospitalière.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’hygiène des mains, le matériel, le linge et les déchets sont aussi concernés.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 4 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-5",
          "type": "qcd",
          "text": "Question 5 — QCD\nUne infection associée aux soins peut apparaître après la fin de la prise en charge.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La définition inclut une infection survenant au cours ou à la suite des soins, absente et non en incubation au début.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 6 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-6",
          "type": "qcd",
          "text": "Question 6 — QCD\nToute infection présente à l’admission est automatiquement une infection associée aux soins de ce séjour.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La présence ou l’incubation au début de la prise en charge exclut cette attribution automatique.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 6 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-7",
          "type": "qcd",
          "text": "Question 7 — QCD\nUne infection associée aux soins acquise en milieu hospitalier est dite nosocomiale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le terme nosocomial précise le lieu d’acquisition hospitalier.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 6–7 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-8",
          "type": "qcd",
          "text": "Question 8 — QCD\nUne infection endogène provient nécessairement d’un germe extérieur au patient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elle provient des micro-organismes hébergés par le patient lui-même.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-9",
          "type": "qcd",
          "text": "Question 9 — QCD\nDes micro-organismes présents dans l’environnement peuvent être à l’origine d’une infection exogène.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "L’origine exogène implique une source extérieure au patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 7–8 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-10",
          "type": "qcd",
          "text": "Question 10 — QCD\nLes infections nosocomiales sont exclusivement dues à des bactéries.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Des virus, champignons et autres agents peuvent également être impliqués.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-11",
          "type": "qcd",
          "text": "Question 11 — QCD\nLes nouveau-nés, les prématurés et les personnes âgées figurent parmi les patients vulnérables du cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Les âges extrêmes sont cités parmi les facteurs liés au patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-12",
          "type": "qcd",
          "text": "Question 12 — QCD\nLe sondage et le cathétérisme n’augmentent jamais le risque infectieux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Ces gestes invasifs peuvent créer une porte d’entrée et favoriser une infection.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 8 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-13",
          "type": "qcd",
          "text": "Question 13 — QCD\nUne infection nosocomiale peut prolonger la durée d’hospitalisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle entraîne des conséquences humaines, économiques et organisationnelles.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 9 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-14",
          "type": "qcd",
          "text": "Question 14 — QCD\nLe respect des règles d’hygiène garantit un risque infectieux nul.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le risque zéro n’existe pas ; les mesures réduisent la fréquence et la gravité des infections.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 6 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-15",
          "type": "qcd",
          "text": "Question 15 — QCD\nLes visiteurs peuvent intervenir dans la transmission de certains agents infectieux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours les inclut parmi les réservoirs humains possibles.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 8 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-16",
          "type": "qcd",
          "text": "Question 16 — QCD\nLes mains des soignants peuvent transmettre des micro-organismes d’un patient à un autre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elles constituent un intermédiaire important des infections croisées.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-17",
          "type": "qcd",
          "text": "Question 17 — QCD\nLe port de gants dispense de pratiquer l’hygiène des mains après leur retrait.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Une hygiène des mains reste nécessaire après le retrait des gants.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,48–49 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-18",
          "type": "qcd",
          "text": "Question 18 — QCD\nLe lavage à l’eau et au savon est indiqué lorsque les mains sont visiblement souillées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le lavage enlève les salissures visibles par une action mécanique.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-19",
          "type": "qcd",
          "text": "Question 19 — QCD\nUne friction hydroalcoolique doit être systématiquement rincée à l’eau.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le produit est frictionné jusqu’au séchage complet, sans rinçage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 16 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-20",
          "type": "qcd",
          "text": "Question 20 — QCD\nLe cours recommande des ongles courts, sans faux ongles, pour le personnel soignant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Cette préparation des mains facilite l’hygiène et limite les réservoirs de germes.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 17 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-21",
          "type": "qcd",
          "text": "Question 21 — QCD\nUne montre de poignet peut être conservée pendant l’hygiène des mains.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours demande des mains et avant-bras dégagés, sans bijoux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 14,17 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-22",
          "type": "qcd",
          "text": "Question 22 — QCD\nLa friction hydroalcoolique s’effectue jusqu’au séchage complet des mains.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il faut traiter toutes les surfaces et laisser sécher le produit.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 16 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-23",
          "type": "qcd",
          "text": "Question 23 — QCD\nLa même paire de gants peut servir pour plusieurs patients si elle paraît propre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les gants doivent être changés entre les patients.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,49 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-24",
          "type": "qcd",
          "text": "Question 24 — QCD\nDes gants sont indiqués lorsqu’un contact avec du sang est prévisible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Ils protègent lors d’un contact possible avec du sang ou des produits biologiques.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,49 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-25",
          "type": "qcd",
          "text": "Question 25 — QCD\nLe choix des équipements de protection ne dépend pas de l’activité réalisée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les équipements sont adaptés aux risques de contact, de projection et aux tâches.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 21–24 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-26",
          "type": "qcd",
          "text": "Question 26 — QCD\nUne protection oculaire peut être nécessaire si un soin expose à des projections de liquide biologique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Les lunettes ou la visière protègent les yeux exposés.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 23,49 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-27",
          "type": "qcd",
          "text": "Question 27 — QCD\nUn masque chirurgical correctement porté laisse le nez découvert.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il doit couvrir le nez, la bouche et le menton.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 22 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-28",
          "type": "qcd",
          "text": "Question 28 — QCD\nLes chaussures professionnelles recommandées sont lavables et antidérapantes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elles doivent aussi être fermées sur l’avant et adaptées au travail.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 21 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-29",
          "type": "qcd",
          "text": "Question 29 — QCD\nUne tenue de travail souillée par un liquide biologique peut être conservée jusqu’à la fin de la semaine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elle doit être changée dès qu’elle est souillée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 23 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-30",
          "type": "qcd",
          "text": "Question 30 — QCD\nLes gants doivent être retirés en limitant le contact de la peau avec leur face externe contaminée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La technique de retrait évite une contamination des mains et des avant-bras.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 25 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-31",
          "type": "qcd",
          "text": "Question 31 — QCD\nUn détergent aide à éliminer les graisses et les salissures.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Sa fonction principale est le nettoyage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 10 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-32",
          "type": "qcd",
          "text": "Question 32 — QCD\nUne surface visuellement propre est nécessairement désinfectée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le nettoyage ne prouve pas l’élimination des micro-organismes.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 10–11 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-33",
          "type": "qcd",
          "text": "Question 33 — QCD\nL’antisepsie concerne les tissus vivants.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle réduit ou inhibe les micro-organismes sur la peau, les muqueuses ou les plaies selon le produit.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 10 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-34",
          "type": "qcd",
          "text": "Question 34 — QCD\nUn désinfectant de surface peut être appliqué sur toute plaie sans vérifier sa destination.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Un produit pour milieu inerte n’est pas automatiquement adapté aux tissus vivants.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 10–11 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-35",
          "type": "qcd",
          "text": "Question 35 — QCD\nLa rémanence d’un antiseptique correspond à la persistance de son activité après application.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "C’est l’un des critères de choix cités dans le cours.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 10 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-36",
          "type": "qcd",
          "text": "Question 36 — QCD\nMélanger deux antiseptiques garantit toujours une meilleure efficacité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours interdit de les mélanger sur un même site sans indication validée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 11 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-37",
          "type": "qcd",
          "text": "Question 37 — QCD\nLa date d’ouverture d’un flacon d’antiseptique doit être indiquée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle aide à respecter sa durée d’utilisation après ouverture.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 11 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-38",
          "type": "qcd",
          "text": "Question 38 — QCD\nLe temps de contact d’un désinfectant peut être supprimé lorsque la surface paraît propre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le temps prévu par le fabricant est une condition de son efficacité.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 11–12 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-39",
          "type": "qcd",
          "text": "Question 39 — QCD\nL’entretien des locaux suit le principe du propre vers le sale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Cette progression limite le transfert de contamination.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 26–27 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-40",
          "type": "qcd",
          "text": "Question 40 — QCD\nIl faut commencer par le sol puis nettoyer les surfaces situées au-dessus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "On progresse de haut en bas et le sol est traité après les surfaces hautes.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 27 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-41",
          "type": "qcd",
          "text": "Question 41 — QCD\nLe matériel de nettoyage doit lui-même être entretenu après utilisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il doit être nettoyé et désinfecté selon la procédure.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 27 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-42",
          "type": "qcd",
          "text": "Question 42 — QCD\nUn instrument réutilisable encore couvert de sang peut être envoyé directement à la stérilisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le nettoyage doit enlever les souillures avant la stérilisation.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 33–35 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-43",
          "type": "qcd",
          "text": "Question 43 — QCD\nLe séchage du matériel contribue à limiter la prolifération microbienne pendant le stockage.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il réduit aussi les risques de corrosion.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 35 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-44",
          "type": "qcd",
          "text": "Question 44 — QCD\nUn emballage de stérilisation déchiré garantit toujours le maintien de la stérilité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’intégrité du conditionnement est nécessaire à la conservation de l’état stérile.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 35–37 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-45",
          "type": "qcd",
          "text": "Question 45 — QCD\nLa traçabilité permet de retrouver le traitement subi par un dispositif médical.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La date, le lot et les contrôles sont notamment enregistrés.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 36 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-46",
          "type": "qcd",
          "text": "Question 46 — QCD\nLe tri des déchets sanitaires doit commencer à leur lieu de production.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le tri à la source permet de séparer immédiatement les filières.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 43 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-47",
          "type": "qcd",
          "text": "Question 47 — QCD\nUne aiguille usagée peut être jetée dans un sac souple si elle est courte.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les objets piquants et tranchants sont placés dans une boîte de sécurité adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 43,49 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-48",
          "type": "qcd",
          "text": "Question 48 — QCD\nLes déchets ménagers et assimilés constituent une catégorie du cours AS.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours distingue aussi les déchets médicaux infectieux et non infectieux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 42 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-49",
          "type": "qcd",
          "text": "Question 49 — QCD\nTous les déchets hospitaliers sont nécessairement infectieux.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Certains sont assimilables aux déchets ménagers, d’autres présentent des risques différents.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 42 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-50",
          "type": "qcd",
          "text": "Question 50 — QCD\nLa mauvaise gestion des déchets peut exposer la communauté à des risques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La récupération et la réutilisation de matériel contaminé sont notamment dangereuses.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 43 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-51",
          "type": "qcd",
          "text": "Question 51 — QCD\nLe brûlage des déchets à l’air libre est sans risque pour l’environnement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les fumées et les produits toxiques peuvent polluer l’air et nuire à la santé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 43 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-52",
          "type": "qcd",
          "text": "Question 52 — QCD\nLe personnel qui transporte les déchets doit porter les protections adaptées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours prévoit des équipements de protection pendant ce transport.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 44 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-53",
          "type": "qcd",
          "text": "Question 53 — QCD\nLes déchets peuvent être stockés avec du matériel propre si les sacs sont fermés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le local de stockage temporaire doit être distinct de celui du matériel propre.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 44 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-54",
          "type": "qcd",
          "text": "Question 54 — QCD\nAprès usage, le linge est considéré comme sale même sans tache visible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il peut être contaminé par la flore du patient et les matières organiques.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 39 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-55",
          "type": "qcd",
          "text": "Question 55 — QCD\nSecouer le linge sale avant sa collecte limite la dispersion des micro-organismes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’agitation favorise leur dispersion ; les gestes doivent être mesurés.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 39–40 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-56",
          "type": "qcd",
          "text": "Question 56 — QCD\nLe linge neuf doit être lavé avant sa première utilisation selon le cours AS.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours recommande un cycle complet de lavage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 39 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-57",
          "type": "qcd",
          "text": "Question 57 — QCD\nUn sac de linge sale peut être traîné au sol pendant son transport.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il doit être fermé et transporté avec un équipement réservé à cet usage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 40 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-58",
          "type": "qcd",
          "text": "Question 58 — QCD\nLe cours AS recommande de remplir les sacs de linge sale aux deux tiers.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Cette limite facilite leur fermeture et leur manipulation.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 40 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-59",
          "type": "qcd",
          "text": "Question 59 — QCD\nLe linge propre déconditionné dans la chambre peut être remis systématiquement dans la réserve propre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Le cours demande de ne pas remettre en lingerie le linge défilmé pendant les soins.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 41 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-60",
          "type": "qcd",
          "text": "Question 60 — QCD\nLa protection du linge propre doit être maintenue jusqu’à son utilisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le transport couvert, le rangement et la limitation des manipulations évitent sa recontamination.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 40–41 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-61",
          "type": "qcd",
          "text": "Question 61 — QCD\nLes précautions standard s’appliquent à tous les patients, quel que soit leur statut infectieux connu.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elles assurent une protection systématique du personnel et des patients.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 48 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-62",
          "type": "qcd",
          "text": "Question 62 — QCD\nLes précautions complémentaires remplacent entièrement les précautions standard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elles s’y ajoutent selon le mode de transmission et la situation.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 50 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-63",
          "type": "qcd",
          "text": "Question 63 — QCD\nL’isolement septique cherche à limiter la diffusion d’un agent infectieux à partir d’un patient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il protège les autres patients, le personnel et les visiteurs contre la transmission.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 49 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-64",
          "type": "qcd",
          "text": "Question 64 — QCD\nL’isolement protecteur vise avant tout à protéger les autres patients contre un patient fragile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il vise à protéger le patient immunodéprimé des agents venant de son entourage ou de l’environnement.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 51 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-65",
          "type": "qcd",
          "text": "Question 65 — QCD\nLa tuberculose pulmonaire transmissible fait partie des indications de précautions air du cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours la cite avec la rougeole et la varicelle.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 50 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-66",
          "type": "qcd",
          "text": "Question 66 — QCD\nLe cours classe la gale uniquement parmi les précautions gouttelettes.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La gale figure parmi les indications des précautions contact.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 51 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-67",
          "type": "qcd",
          "text": "Question 67 — QCD\nUn matériel souillé doit subir un entretien approprié avant sa réutilisation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La désinfection ou la stérilisation requise dépend du dispositif et de son usage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 49 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-68",
          "type": "qcd",
          "text": "Question 68 — QCD\nLes visiteurs n’ont aucune consigne à respecter dans une chambre d’isolement.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les mesures d’isolement et d’hygiène concernent aussi les visiteurs.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 9,23–24 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-69",
          "type": "qcd",
          "text": "Question 69 — QCD\nL’hygiène du patient participe à la prévention des infections.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours l’associe au respect des règles d’asepsie.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 9 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-70",
          "type": "qcd",
          "text": "Question 70 — QCD\nLa toilette d’un malade dépend de son degré d’autonomie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le patient est encouragé à réaliser ce qu’il peut faire.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 18 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-71",
          "type": "qcd",
          "text": "Question 71 — QCD\nLa toilette peut être réalisée sans prévenir le patient puisqu’elle est utile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Informer le patient et respecter son intimité font partie de la préparation.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 18 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-72",
          "type": "qcd",
          "text": "Question 72 — QCD\nIl est approprié de protéger la pudeur du patient pendant la toilette.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours prévoit notamment de couvrir les parties du corps non lavées.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 18–20 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-73",
          "type": "qcd",
          "text": "Question 73 — QCD\nAprès un décès, toutes les précautions infectieuses sont immédiatement supprimées.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les précautions déjà instaurées doivent être poursuivies lorsque le défunt présente un risque infectieux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 20 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-74",
          "type": "qcd",
          "text": "Question 74 — QCD\nL’hygiène des mains avant la distribution des repas contribue à la sécurité alimentaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle fait partie des mesures prévues pour le soignant.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 46 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-75",
          "type": "qcd",
          "text": "Question 75 — QCD\nUn médicament contaminé peut devenir un vecteur d’infection.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La qualité de sa conservation et de sa manipulation est donc importante.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 47 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-76",
          "type": "qcd",
          "text": "Question 76 — QCD\nUne projection de sang dans l’œil constitue un accident avec exposition au sang.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "L’œil est une muqueuse et cette projection nécessite une prise en charge immédiate.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 28,30 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-77",
          "type": "qcd",
          "text": "Question 77 — QCD\nUn AES ne peut survenir que chez un infirmier qui réalise une injection.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il peut aussi toucher un auxiliaire, un agent d’entretien ou un professionnel manipulant du matériel souillé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 28–31 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-78",
          "type": "qcd",
          "text": "Question 78 — QCD\nUne piqûre par une aiguille usagée est une effraction cutanée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle constitue une voie d’exposition percutanée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 28 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-79",
          "type": "qcd",
          "text": "Question 79 — QCD\nRecapuchonner une aiguille usagée réduit le risque d’AES.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Cette manipulation peut provoquer une piqûre et doit être évitée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 28,49 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-80",
          "type": "qcd",
          "text": "Question 80 — QCD\nUne aiguille creuse contenant du sang peut augmenter le risque de transmission.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le dispositif et la quantité de sang influencent l’évaluation du risque.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-81",
          "type": "qcd",
          "text": "Question 81 — QCD\nUne blessure profonde présente exactement le même risque que toute autre exposition.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La profondeur fait partie des facteurs de risque à évaluer.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-82",
          "type": "qcd",
          "text": "Question 82 — QCD\nLes virus des hépatites B et C et le VIH sont notamment recherchés dans l’évaluation d’un AES.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Le cours les cite comme principaux risques viraux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–30 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-83",
          "type": "qcd",
          "text": "Question 83 — QCD\nAprès une piqûre, il faut attendre des symptômes avant de demander un avis médical.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les premiers soins et l’évaluation médicale doivent être réalisés sans délai.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–31 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-84",
          "type": "qcd",
          "text": "Question 84 — QCD\nAprès une exposition cutanée avec blessure, le lavage à l’eau et au savon fait partie des premiers soins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Il est suivi d’un rinçage puis d’une antisepsie adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–30 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-85",
          "type": "qcd",
          "text": "Question 85 — QCD\nEn cas de projection de sang dans l’œil, on y applique un désinfectant de surface.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il faut rincer abondamment à l’eau ou au sérum physiologique, sans désinfectant de surface.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 30 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-86",
          "type": "qcd",
          "text": "Question 86 — QCD\nL’information du supérieur hiérarchique fait partie de la conduite à tenir du cours AS.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle accompagne les soins urgents et le contact médical.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 30 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-87",
          "type": "qcd",
          "text": "Question 87 — QCD\nLa vaccination contre l’hépatite B protège également contre le VIH.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elle cible l’hépatite B et ne protège pas du VIH.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 30 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-88",
          "type": "qcd",
          "text": "Question 88 — QCD\nL’ancienneté professionnelle élimine tout risque d’AES.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Un accident peut survenir lors d’un geste habituel, même chez un professionnel expérimenté.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 31 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-89",
          "type": "qcd",
          "text": "Question 89 — QCD\nIl faut terminer la collecte des déchets avant de s’occuper d’une piqûre accidentelle.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La prise en charge de l’exposition est urgente.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–31 du PDF.",
          "answer": "Faux"
        },
        {
          "id": "hygiene-as-90",
          "type": "qcd",
          "text": "Question 90 — QCD\nLa surveillance des AES aide à choisir des actions de prévention.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "L’analyse des accidents oriente la formation et le choix du matériel.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answer": "Vrai"
        },
        {
          "id": "hygiene-as-91",
          "type": "qcm",
          "text": "Question 91 — QCM\nQuels domaines participent à l’hygiène hospitalière ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Entretien des locaux",
            "Gestion du linge",
            "Gestion des déchets",
            "Décoration seule"
          ],
          "correct": [
            "Entretien des locaux",
            "Gestion du linge",
            "Gestion des déchets"
          ],
          "explanation": "Les trois premiers domaines contribuent à maîtriser le risque infectieux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 4 du PDF.",
          "answers": [
            "Entretien des locaux",
            "Gestion du linge",
            "Gestion des déchets"
          ]
        },
        {
          "id": "hygiene-as-92",
          "type": "qcm",
          "text": "Question 92 — QCM\nQue signifie « infection nosocomiale » ?\nChoisir une seule bonne réponse.",
          "options": [
            "Toute maladie héréditaire",
            "Infection associée aux soins acquise à l’hôpital",
            "Toute infection communautaire",
            "Toute allergie médicamenteuse"
          ],
          "correct": "Infection associée aux soins acquise à l’hôpital",
          "explanation": "Le terme précise une acquisition en milieu hospitalier.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 6–7 du PDF.",
          "answer": "Infection associée aux soins acquise à l’hôpital"
        },
        {
          "id": "hygiene-as-93",
          "type": "qcm",
          "text": "Question 93 — QCM\nQuelles situations correspondent à des facteurs de vulnérabilité du patient ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Dénutrition",
            "Diabète",
            "Couleur de la tenue",
            "Brûlures étendues"
          ],
          "correct": [
            "Dénutrition",
            "Diabète",
            "Brûlures étendues"
          ],
          "explanation": "La dénutrition, le diabète et les brûlures figurent parmi les facteurs liés au patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answers": [
            "Dénutrition",
            "Diabète",
            "Brûlures étendues"
          ]
        },
        {
          "id": "hygiene-as-94",
          "type": "qcm",
          "text": "Question 94 — QCM\nDans la démarche des « 5 M », quels éléments sont cités dans le cours ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Matériel",
            "Méthode",
            "Monnaie",
            "Milieu"
          ],
          "correct": [
            "Matériel",
            "Méthode",
            "Milieu"
          ],
          "explanation": "Les deux autres M sont Matière et Main-d’œuvre.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 6 du PDF.",
          "answers": [
            "Matériel",
            "Méthode",
            "Milieu"
          ]
        },
        {
          "id": "hygiene-as-95",
          "type": "qcm",
          "text": "Question 95 — QCM\nQuelle action vise directement à interrompre une transmission par les mains ?\nChoisir une seule bonne réponse.",
          "options": [
            "Augmenter le volume de musique",
            "Pratiquer l’hygiène des mains",
            "Modifier le nom du service",
            "Changer la couleur des murs"
          ],
          "correct": "Pratiquer l’hygiène des mains",
          "explanation": "L’hygiène des mains réduit la transmission manuportée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF.",
          "answer": "Pratiquer l’hygiène des mains"
        },
        {
          "id": "hygiene-as-96",
          "type": "qcm",
          "text": "Question 96 — QCM\nQuels éléments peuvent constituer des réservoirs de micro-organismes en milieu hospitalier ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Patient",
            "Eau contaminée",
            "Surface contaminée",
            "Uniquement les aiguilles"
          ],
          "correct": [
            "Patient",
            "Eau contaminée",
            "Surface contaminée"
          ],
          "explanation": "Les réservoirs humains et environnementaux sont multiples.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 8 du PDF.",
          "answers": [
            "Patient",
            "Eau contaminée",
            "Surface contaminée"
          ]
        },
        {
          "id": "hygiene-as-97",
          "type": "qcm",
          "text": "Question 97 — QCM\nUne transmission indirecte peut se faire par :\nChoisir les 2 bonnes réponses.",
          "options": [
            "Du matériel contaminé",
            "Les mains contaminées d’un soignant",
            "Une mutation génétique héréditaire",
            "Un document administratif propre, sans contact avec le soin"
          ],
          "correct": [
            "Du matériel contaminé",
            "Les mains contaminées d’un soignant"
          ],
          "explanation": "Les mains et le matériel peuvent transporter l’agent entre la source et le patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 8 du PDF.",
          "answers": [
            "Du matériel contaminé",
            "Les mains contaminées d’un soignant"
          ]
        },
        {
          "id": "hygiene-as-98",
          "type": "qcm",
          "text": "Question 98 — QCM\nQuelles conséquences peuvent résulter d’une infection nosocomiale ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Séjour prolongé",
            "Coût accru",
            "Complication clinique",
            "Guérison garantie plus rapide"
          ],
          "correct": [
            "Séjour prolongé",
            "Coût accru",
            "Complication clinique"
          ],
          "explanation": "Le cours décrit des conséquences sanitaires, économiques et organisationnelles.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 9 du PDF.",
          "answers": [
            "Séjour prolongé",
            "Coût accru",
            "Complication clinique"
          ]
        },
        {
          "id": "hygiene-as-99",
          "type": "qcm",
          "text": "Question 99 — QCM\nQuelle description correspond à une infection endogène ?\nChoisir une seule bonne réponse.",
          "options": [
            "Infection issue de la flore propre du patient",
            "Infection nécessairement apportée par un visiteur",
            "Infection exclusivement due à l’eau",
            "Infection exclusivement due aux déchets"
          ],
          "correct": "Infection issue de la flore propre du patient",
          "explanation": "L’origine endogène est interne au patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answer": "Infection issue de la flore propre du patient"
        },
        {
          "id": "hygiene-as-100",
          "type": "qcm",
          "text": "Question 100 — QCM\nQuelles catégories d’agents sont citées parmi les causes d’infections nosocomiales ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Bactéries",
            "Virus",
            "Champignons",
            "Uniquement les insectes visibles"
          ],
          "correct": [
            "Bactéries",
            "Virus",
            "Champignons"
          ],
          "explanation": "Le cours cite aussi des parasites et des prions.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 7 du PDF.",
          "answers": [
            "Bactéries",
            "Virus",
            "Champignons"
          ]
        },
        {
          "id": "hygiene-as-101",
          "type": "qcm",
          "text": "Question 101 — QCM\nQuel objectif est réaliste pour un programme d’hygiène ?\nChoisir une seule bonne réponse.",
          "options": [
            "Supprimer toute maladie en une journée",
            "Réduire le risque infectieux",
            "Garantir l’absence totale de germes partout",
            "Remplacer tous les soins"
          ],
          "correct": "Réduire le risque infectieux",
          "explanation": "Les mesures de prévention diminuent le risque sans garantir un risque nul.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 5–6 du PDF.",
          "answer": "Réduire le risque infectieux"
        },
        {
          "id": "hygiene-as-102",
          "type": "qcm",
          "text": "Question 102 — QCM\nParmi ces gestes, lesquels peuvent créer une porte d’entrée infectieuse ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Cathétérisme",
            "Sondage",
            "Lecture d’une affiche",
            "Consultation d’un planning sans soin"
          ],
          "correct": [
            "Cathétérisme",
            "Sondage"
          ],
          "explanation": "Les gestes invasifs franchissent les barrières naturelles.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 8 du PDF.",
          "answers": [
            "Cathétérisme",
            "Sondage"
          ]
        },
        {
          "id": "hygiene-as-103",
          "type": "qcm",
          "text": "Question 103 — QCM\nQuels acteurs doivent participer à la prévention des infections ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Personnel soignant",
            "Personnel d’entretien",
            "Patients et visiteurs selon les consignes",
            "Uniquement le directeur"
          ],
          "correct": [
            "Personnel soignant",
            "Personnel d’entretien",
            "Patients et visiteurs selon les consignes"
          ],
          "explanation": "La prévention exige l’implication des différents acteurs de l’établissement.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 4–9 du PDF.",
          "answers": [
            "Personnel soignant",
            "Personnel d’entretien",
            "Patients et visiteurs selon les consignes"
          ]
        },
        {
          "id": "hygiene-as-104",
          "type": "qcm",
          "text": "Question 104 — QCM\nUne infection absente et non en incubation au début des soins apparaît à leur suite. Quelle qualification peut être envisagée après évaluation du lien avec les soins ?\nChoisir une seule bonne réponse.",
          "options": [
            "Infection associée aux soins",
            "Allergie certaine",
            "Maladie héréditaire certaine",
            "Infection obligatoirement présente à l’admission"
          ],
          "correct": "Infection associée aux soins",
          "explanation": "La définition inclut les infections survenant à la suite de la prise en charge.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 6 du PDF.",
          "answer": "Infection associée aux soins"
        },
        {
          "id": "hygiene-as-105",
          "type": "qcm",
          "text": "Question 105 — QCM\nQuels axes figurent dans la prévention de la transmission ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Agir sur l’agent infectieux",
            "Isoler le réservoir lorsque nécessaire",
            "Protéger l’hôte",
            "Ignorer les voies de transmission"
          ],
          "correct": [
            "Agir sur l’agent infectieux",
            "Isoler le réservoir lorsque nécessaire",
            "Protéger l’hôte"
          ],
          "explanation": "Le cours associe ces axes au contrôle des modes de transmission.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 5 du PDF.",
          "answers": [
            "Agir sur l’agent infectieux",
            "Isoler le réservoir lorsque nécessaire",
            "Protéger l’hôte"
          ]
        },
        {
          "id": "hygiene-as-106",
          "type": "qcm",
          "text": "Question 106 — QCM\nAvant l’hygiène des mains, quelles préparations sont adaptées ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Retirer les bijoux",
            "Garder des ongles courts",
            "Ajouter de faux ongles",
            "Dégager les avant-bras"
          ],
          "correct": [
            "Retirer les bijoux",
            "Garder des ongles courts",
            "Dégager les avant-bras"
          ],
          "explanation": "Les bijoux et faux ongles gênent une hygiène efficace.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 14,17 du PDF.",
          "answers": [
            "Retirer les bijoux",
            "Garder des ongles courts",
            "Dégager les avant-bras"
          ]
        },
        {
          "id": "hygiene-as-107",
          "type": "qcm",
          "text": "Question 107 — QCM\nAprès retrait de gants utilisés pour une toilette, que faut-il faire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Mettre les gants dans sa poche",
            "Pratiquer l’hygiène des mains",
            "Toucher immédiatement le repas",
            "Réutiliser les gants"
          ],
          "correct": "Pratiquer l’hygiène des mains",
          "explanation": "Le retrait des gants est suivi d’une hygiène des mains.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,49 du PDF.",
          "answer": "Pratiquer l’hygiène des mains"
        },
        {
          "id": "hygiene-as-108",
          "type": "qcm",
          "text": "Question 108 — QCM\nQuelle est la durée totale habituelle d’une friction hydroalcoolique selon l’affiche OMS ?\nChoisir une seule bonne réponse.",
          "options": [
            "2 à 3 secondes",
            "20 à 30 secondes",
            "10 minutes",
            "Une heure"
          ],
          "correct": "20 à 30 secondes",
          "explanation": "Actualisation : l’affiche OMS indique 20 à 30 secondes pour la procédure complète ; le cours donne une durée différente. Respecter aussi les instructions du produit.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 16 du PDF. / Organisation mondiale de la Santé, How to Handrub? et How to Handwash?, affiches, 2009, page 1. https://www.who.int/publications/m/item/how-to-handrub ; https://www.who.int/publications/m/item/how-to-handwash",
          "answer": "20 à 30 secondes"
        },
        {
          "id": "hygiene-as-109",
          "type": "qcm",
          "text": "Question 109 — QCM\nQuelle est la durée totale du lavage des mains selon l’affiche OMS ?\nChoisir une seule bonne réponse.",
          "options": [
            "40 à 60 secondes",
            "3 secondes",
            "20 minutes",
            "Sans durée minimale"
          ],
          "correct": "40 à 60 secondes",
          "explanation": "Il s’agit de l’ensemble de la procédure, et non uniquement du temps de frottement.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF. / Organisation mondiale de la Santé, How to Handrub? et How to Handwash?, affiches, 2009, page 1. https://www.who.int/publications/m/item/how-to-handrub ; https://www.who.int/publications/m/item/how-to-handwash",
          "answer": "40 à 60 secondes"
        },
        {
          "id": "hygiene-as-110",
          "type": "qcm",
          "text": "Question 110 — QCM\nQuand l’hygiène des mains est-elle indiquée selon les cinq moments OMS ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Avant de toucher le patient",
            "Après un risque d’exposition à un liquide biologique",
            "Après avoir touché l’environnement du patient",
            "Seulement en début de journée"
          ],
          "correct": [
            "Avant de toucher le patient",
            "Après un risque d’exposition à un liquide biologique",
            "Après avoir touché l’environnement du patient"
          ],
          "explanation": "Ces moments complètent les indications avant un geste aseptique et après contact avec le patient.",
          "source": "Organisation mondiale de la Santé, Five moments for hand hygiene, affiche, 2021, page 1. https://www.who.int/publications/m/item/five-moments-for-hand-hygiene",
          "answers": [
            "Avant de toucher le patient",
            "Après un risque d’exposition à un liquide biologique",
            "Après avoir touché l’environnement du patient"
          ]
        },
        {
          "id": "hygiene-as-111",
          "type": "qcm",
          "text": "Question 111 — QCM\nDans quelle situation le lavage à l’eau et au savon est-il clairement indiqué ?\nChoisir une seule bonne réponse.",
          "options": [
            "Mains visiblement sales",
            "Simple changement de couleur de blouse",
            "Lecture d’un dossier sans contact",
            "Port de chaussures propres"
          ],
          "correct": "Mains visiblement sales",
          "explanation": "Les salissures visibles nécessitent une élimination par lavage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF.",
          "answer": "Mains visiblement sales"
        },
        {
          "id": "hygiene-as-112",
          "type": "qcm",
          "text": "Question 112 — QCM\nComment terminer une friction hydroalcoolique ?\nChoisir une seule bonne réponse.",
          "options": [
            "Rincer immédiatement",
            "Essuyer le produit encore humide",
            "Frictionner jusqu’au séchage complet",
            "Mettre les mains humides dans les gants"
          ],
          "correct": "Frictionner jusqu’au séchage complet",
          "explanation": "La friction se poursuit jusqu’au séchage, sans rinçage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 16 du PDF.",
          "answer": "Frictionner jusqu’au séchage complet"
        },
        {
          "id": "hygiene-as-113",
          "type": "qcm",
          "text": "Question 113 — QCM\nQuels équipements sont adaptés à un risque de projection de sang vers le visage ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Protection oculaire",
            "Masque adapté à la projection",
            "Sandales",
            "Bijoux de poignet"
          ],
          "correct": [
            "Protection oculaire",
            "Masque adapté à la projection"
          ],
          "explanation": "Les yeux, le nez et la bouche doivent être protégés selon le risque.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 23,49 du PDF.",
          "answers": [
            "Protection oculaire",
            "Masque adapté à la projection"
          ]
        },
        {
          "id": "hygiene-as-114",
          "type": "qcm",
          "text": "Question 114 — QCM\nQuels critères correspondent aux chaussures professionnelles décrites dans le cours ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Lavables",
            "Antidérapantes",
            "Ouvertes sur l’avant",
            "Fermées sur l’avant"
          ],
          "correct": [
            "Lavables",
            "Antidérapantes",
            "Fermées sur l’avant"
          ],
          "explanation": "Ces propriétés facilitent l’entretien et la sécurité.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 21 du PDF.",
          "answers": [
            "Lavables",
            "Antidérapantes",
            "Fermées sur l’avant"
          ]
        },
        {
          "id": "hygiene-as-115",
          "type": "qcm",
          "text": "Question 115 — QCM\nDans quelles situations faut-il changer de gants ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Entre deux patients",
            "Lorsqu’ils sont détériorés",
            "Entre activités incompatibles, du sale vers le propre",
            "Seulement à la fin du mois"
          ],
          "correct": [
            "Entre deux patients",
            "Lorsqu’ils sont détériorés",
            "Entre activités incompatibles, du sale vers le propre"
          ],
          "explanation": "Une même paire ne doit pas transporter une contamination vers une autre tâche.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,49 du PDF.",
          "answers": [
            "Entre deux patients",
            "Lorsqu’ils sont détériorés",
            "Entre activités incompatibles, du sale vers le propre"
          ]
        },
        {
          "id": "hygiene-as-116",
          "type": "qcm",
          "text": "Question 116 — QCM\nComment doit être porté un masque chirurgical ?\nChoisir une seule bonne réponse.",
          "options": [
            "Sous le menton",
            "Sur la bouche seulement",
            "Sur le nez, la bouche et le menton",
            "Dans la poche pendant le soin exposant"
          ],
          "correct": "Sur le nez, la bouche et le menton",
          "explanation": "Le cours précise cette couverture du visage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 22 du PDF.",
          "answer": "Sur le nez, la bouche et le menton"
        },
        {
          "id": "hygiene-as-117",
          "type": "qcm",
          "text": "Question 117 — QCM\nQuelle tenue facilite l’hygiène des mains et des avant-bras ?\nChoisir une seule bonne réponse.",
          "options": [
            "Tenue à manches courtes",
            "Vêtements avec bijoux aux poignets",
            "Manches longues couvrant les mains",
            "Gants permanents toute la journée"
          ],
          "correct": "Tenue à manches courtes",
          "explanation": "Les manches courtes dégagent les avant-bras.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 22 du PDF.",
          "answer": "Tenue à manches courtes"
        },
        {
          "id": "hygiene-as-118",
          "type": "qcm",
          "text": "Question 118 — QCM\nUne blouse vient d’être souillée par du sang. Quelle conduite est adaptée ?\nChoisir une seule bonne réponse.",
          "options": [
            "La conserver une semaine",
            "La changer",
            "Masquer la tache avec un badge",
            "La porter à domicile"
          ],
          "correct": "La changer",
          "explanation": "Le cours recommande le changement dès qu’une tenue est souillée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 23 du PDF.",
          "answer": "La changer"
        },
        {
          "id": "hygiene-as-119",
          "type": "qcm",
          "text": "Question 119 — QCM\nQuels contacts justifient le port de gants selon le risque ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Sang",
            "Muqueuse",
            "Peau lésée",
            "Uniquement peau saine sans autre risque"
          ],
          "correct": [
            "Sang",
            "Muqueuse",
            "Peau lésée"
          ],
          "explanation": "Le port de gants dépend de l’exposition prévisible.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,49 du PDF.",
          "answers": [
            "Sang",
            "Muqueuse",
            "Peau lésée"
          ]
        },
        {
          "id": "hygiene-as-120",
          "type": "qcm",
          "text": "Question 120 — QCM\nPendant une toilette, quels objectifs doivent être respectés ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Confort",
            "Intimité",
            "Participation du patient selon ses capacités",
            "Exposition inutile du corps"
          ],
          "correct": [
            "Confort",
            "Intimité",
            "Participation du patient selon ses capacités"
          ],
          "explanation": "La toilette associe hygiène, observation et respect de la personne.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 17–19 du PDF.",
          "answers": [
            "Confort",
            "Intimité",
            "Participation du patient selon ses capacités"
          ]
        },
        {
          "id": "hygiene-as-121",
          "type": "qcm",
          "text": "Question 121 — QCM\nQuel produit est destiné principalement à enlever les salissures ?\nChoisir une seule bonne réponse.",
          "options": [
            "Détergent",
            "Antibiotique",
            "Vaccin",
            "Analgésique"
          ],
          "correct": "Détergent",
          "explanation": "Le détergent facilite l’élimination des salissures ; cette action ne garantit pas une désinfection.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 10 du PDF.",
          "answer": "Détergent"
        },
        {
          "id": "hygiene-as-122",
          "type": "qcm",
          "text": "Question 122 — QCM\nQuelle association est correcte ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Antiseptique : tissu vivant",
            "Désinfectant : surface inerte",
            "Désinfectant de surface : œil",
            "Détergent : vaccin"
          ],
          "correct": [
            "Antiseptique : tissu vivant",
            "Désinfectant : surface inerte"
          ],
          "explanation": "Le support d’utilisation distingue l’antiseptique du désinfectant.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 10–11 du PDF.",
          "answers": [
            "Antiseptique : tissu vivant",
            "Désinfectant : surface inerte"
          ]
        },
        {
          "id": "hygiene-as-123",
          "type": "qcm",
          "text": "Question 123 — QCM\nQuelles informations faut-il respecter pour utiliser un désinfectant ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Dilution",
            "Temps de contact",
            "Compatibilité avec le support",
            "Seulement couleur du flacon"
          ],
          "correct": [
            "Dilution",
            "Temps de contact",
            "Compatibilité avec le support"
          ],
          "explanation": "Ces paramètres conditionnent l’efficacité et la sécurité.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 11–12 du PDF.",
          "answers": [
            "Dilution",
            "Temps de contact",
            "Compatibilité avec le support"
          ]
        },
        {
          "id": "hygiene-as-124",
          "type": "qcm",
          "text": "Question 124 — QCM\nQuelle pratique est adaptée aux flacons de produits ?\nChoisir une seule bonne réponse.",
          "options": [
            "Ajouter du produit neuf dans un reste ancien",
            "Fermer après usage",
            "Mélanger tous les produits",
            "Retirer l’étiquette"
          ],
          "correct": "Fermer après usage",
          "explanation": "Les flacons restent identifiés et fermés ; le remplissage sur un reste est déconseillé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 11 du PDF.",
          "answer": "Fermer après usage"
        },
        {
          "id": "hygiene-as-125",
          "type": "qcm",
          "text": "Question 125 — QCM\nQuel ordre de nettoyage limite le transfert de salissures ?\nChoisir une seule bonne réponse.",
          "options": [
            "Du sale vers le propre",
            "Du bas vers le haut",
            "Du propre vers le sale",
            "Au hasard"
          ],
          "correct": "Du propre vers le sale",
          "explanation": "Le cours recommande aussi de progresser du haut vers le bas.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 27 du PDF.",
          "answer": "Du propre vers le sale"
        },
        {
          "id": "hygiene-as-126",
          "type": "qcm",
          "text": "Question 126 — QCM\nAvant une désinfection séparée, quelle étape est habituellement nécessaire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Nettoyage",
            "Application de parfum",
            "Décoration",
            "Suppression du temps de contact"
          ],
          "correct": "Nettoyage",
          "explanation": "Les salissures doivent être éliminées selon le protocole avant la désinfection.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 27–28 du PDF.",
          "answer": "Nettoyage"
        },
        {
          "id": "hygiene-as-127",
          "type": "qcm",
          "text": "Question 127 — QCM\nPour préparer 1 litre de solution à 0,5 % à partir d’une solution à 5 %, quel volume de solution mère faut-il prélever ?\nChoisir une seule bonne réponse.",
          "options": [
            "10 mL",
            "100 mL",
            "500 mL",
            "1 000 mL"
          ],
          "correct": "100 mL",
          "explanation": "C₁V₁ = C₂V₂ : V₁ = (0,5 × 1 000)/5 = 100 mL ; compléter avec de l’eau jusqu’à 1 000 mL selon le protocole.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 12 du PDF.",
          "answer": "100 mL"
        },
        {
          "id": "hygiene-as-128",
          "type": "qcm",
          "text": "Question 128 — QCM\nPour préparer 500 mL à 1 % à partir d’une solution à 5 %, quel volume de solution mère faut-il prélever ?\nChoisir une seule bonne réponse.",
          "options": [
            "50 mL",
            "100 mL",
            "250 mL",
            "500 mL"
          ],
          "correct": "100 mL",
          "explanation": "V₁ = (1 × 500)/5 = 100 mL ; compléter jusqu’à 500 mL, soit environ 400 mL d’eau.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 12 du PDF.",
          "answer": "100 mL"
        },
        {
          "id": "hygiene-as-129",
          "type": "qcm",
          "text": "Question 129 — QCM\nQuelle valeur de pH correspond à une solution neutre ?\nChoisir une seule bonne réponse.",
          "options": [
            "2",
            "5",
            "7",
            "13"
          ],
          "correct": "7",
          "explanation": "Le tableau du cours situe la neutralité à pH 7.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 10 du PDF.",
          "answer": "7"
        },
        {
          "id": "hygiene-as-130",
          "type": "qcm",
          "text": "Question 130 — QCM\nQue signifie le bionettoyage dans le cours ?\nChoisir une seule bonne réponse.",
          "options": [
            "Seulement parfumer",
            "Associer l’élimination des salissures et la réduction des micro-organismes",
            "Ne jamais nettoyer",
            "Uniquement ouvrir les fenêtres"
          ],
          "correct": "Associer l’élimination des salissures et la réduction des micro-organismes",
          "explanation": "Le bionettoyage combine les objectifs de nettoyage et de maîtrise microbienne.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 26–28 du PDF.",
          "answer": "Associer l’élimination des salissures et la réduction des micro-organismes"
        },
        {
          "id": "hygiene-as-131",
          "type": "qcm",
          "text": "Question 131 — QCM\nQuels paramètres sont pertinents pour choisir un désinfectant ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Spectre d’activité",
            "Compatibilité avec le matériel",
            "Toxicité",
            "Popularité de la publicité uniquement"
          ],
          "correct": [
            "Spectre d’activité",
            "Compatibilité avec le matériel",
            "Toxicité"
          ],
          "explanation": "Le cours cite également la stabilité, l’environnement et le coût.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 11 du PDF.",
          "answers": [
            "Spectre d’activité",
            "Compatibilité avec le matériel",
            "Toxicité"
          ]
        },
        {
          "id": "hygiene-as-132",
          "type": "qcm",
          "text": "Question 132 — QCM\nUn dispositif pénètre dans le système vasculaire. Quel traitement est requis avant réutilisation ?\nChoisir une seule bonne réponse.",
          "options": [
            "Simple essuyage sec",
            "Stérilisation adaptée",
            "Parfumage",
            "Rangement immédiat sans traitement"
          ],
          "correct": "Stérilisation adaptée",
          "explanation": "Un dispositif critique réutilisable doit être stérilisé selon une procédure validée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 32–36 du PDF. / Centers for Disease Control and Prevention, Recommendations for Disinfection and Sterilization in Healthcare Facilities, rubriques 2 et 3, 2023. https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/summary-recommendations.html",
          "answer": "Stérilisation adaptée"
        },
        {
          "id": "hygiene-as-133",
          "type": "qcm",
          "text": "Question 133 — QCM\nPour un dispositif semi-critique réutilisable en contact avec une muqueuse, quel niveau minimal indique la recommandation CDC ?\nChoisir une seule bonne réponse.",
          "options": [
            "Aucun traitement",
            "Désinfection de haut niveau",
            "Désinfection de bas niveau seule",
            "Dépoussiérage seul"
          ],
          "correct": "Désinfection de haut niveau",
          "explanation": "Actualisation : la recommandation impose au minimum une désinfection de haut niveau ; la classification du cours AS est à corriger sur ce point.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 32 du PDF. / Centers for Disease Control and Prevention, Recommendations for Disinfection and Sterilization in Healthcare Facilities, rubriques 2 et 3, 2023. https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/summary-recommendations.html",
          "answer": "Désinfection de haut niveau"
        },
        {
          "id": "hygiene-as-134",
          "type": "qcm",
          "text": "Question 134 — QCM\nAprès nettoyage et rinçage d’un dispositif, pourquoi le sécher avant conditionnement ?\nChoisir une seule bonne réponse.",
          "options": [
            "Limiter l’humidité et la corrosion",
            "Éviter toute traçabilité",
            "Remplacer la stérilisation",
            "Faciliter un stockage humide"
          ],
          "correct": "Limiter l’humidité et la corrosion",
          "explanation": "Le séchage fait partie du traitement et ne remplace pas les autres étapes.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 35–37 du PDF.",
          "answer": "Limiter l’humidité et la corrosion"
        },
        {
          "id": "hygiene-as-135",
          "type": "qcm",
          "text": "Question 135 — QCM\nUn emballage de matériel stérile est déchiré. Que faire ?\nChoisir une seule bonne réponse.",
          "options": [
            "L’utiliser comme stérile",
            "Le retirer du circuit stérile et appliquer le protocole",
            "Coller un autocollant et garantir la stérilité",
            "Ignorer la déchirure"
          ],
          "correct": "Le retirer du circuit stérile et appliquer le protocole",
          "explanation": "L’intégrité de l’emballage conditionne le maintien de la stérilité.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 35–37 du PDF.",
          "answer": "Le retirer du circuit stérile et appliquer le protocole"
        },
        {
          "id": "hygiene-as-136",
          "type": "qcm",
          "text": "Question 136 — QCM\nÀ quel moment faut-il trier les déchets de soins ?\nChoisir une seule bonne réponse.",
          "options": [
            "Au lieu de production",
            "Après mélange dans la décharge",
            "Uniquement une fois par mois",
            "Après transport avec le linge propre"
          ],
          "correct": "Au lieu de production",
          "explanation": "Le tri à la source évite les mélanges et les manipulations dangereuses.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 43 du PDF.",
          "answer": "Au lieu de production"
        },
        {
          "id": "hygiene-as-137",
          "type": "qcm",
          "text": "Question 137 — QCM\nOù jeter immédiatement une aiguille usagée ?\nChoisir une seule bonne réponse.",
          "options": [
            "Dans un sac souple",
            "Dans un collecteur adapté aux objets piquants et coupants",
            "Dans une poche",
            "Dans le panier de linge"
          ],
          "correct": "Dans un collecteur adapté aux objets piquants et coupants",
          "explanation": "Le collecteur doit être accessible près du lieu d’utilisation.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 43,49 du PDF.",
          "answer": "Dans un collecteur adapté aux objets piquants et coupants"
        },
        {
          "id": "hygiene-as-138",
          "type": "qcm",
          "text": "Question 138 — QCM\nQuelles manipulations augmentent le risque de piqûre ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Recapuchonner une aiguille usagée",
            "La démonter à la main",
            "La jeter dans un sac souple",
            "L’éliminer directement dans le collecteur adapté"
          ],
          "correct": [
            "Recapuchonner une aiguille usagée",
            "La démonter à la main",
            "La jeter dans un sac souple"
          ],
          "explanation": "Ces manipulations exposent le personnel aux objets piquants.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 28,49 du PDF.",
          "answers": [
            "Recapuchonner une aiguille usagée",
            "La démonter à la main",
            "La jeter dans un sac souple"
          ]
        },
        {
          "id": "hygiene-as-139",
          "type": "qcm",
          "text": "Question 139 — QCM\nQuels risques sont liés à une mauvaise gestion des déchets sanitaires ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Infectieux",
            "Chimiques",
            "Environnementaux",
            "Amélioration garantie de la qualité de l’eau"
          ],
          "correct": [
            "Infectieux",
            "Chimiques",
            "Environnementaux"
          ],
          "explanation": "Le cours décrit des risques pour les personnes et l’environnement.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 42–43 du PDF.",
          "answers": [
            "Infectieux",
            "Chimiques",
            "Environnementaux"
          ]
        },
        {
          "id": "hygiene-as-140",
          "type": "qcm",
          "text": "Question 140 — QCM\nQuel moyen est adapté au transport interne des déchets selon le cours ?\nChoisir une seule bonne réponse.",
          "options": [
            "Chariot dédié entretenu",
            "Panier de repas",
            "Bras du personnel sans contenant",
            "Chariot de linge propre non protégé"
          ],
          "correct": "Chariot dédié entretenu",
          "explanation": "Le transport doit préserver les circuits et permettre l’entretien du matériel.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 44 du PDF.",
          "answer": "Chariot dédié entretenu"
        },
        {
          "id": "hygiene-as-141",
          "type": "qcm",
          "text": "Question 141 — QCM\nQuels éléments ne doivent pas être mélangés au linge utilisé ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Aiguilles",
            "Instruments de soins",
            "Objets coupants",
            "Uniquement les draps utilisés"
          ],
          "correct": [
            "Aiguilles",
            "Instruments de soins",
            "Objets coupants"
          ],
          "explanation": "Ces objets créent des risques et doivent suivre leur propre circuit.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 38–40 du PDF.",
          "answers": [
            "Aiguilles",
            "Instruments de soins",
            "Objets coupants"
          ]
        },
        {
          "id": "hygiene-as-142",
          "type": "qcm",
          "text": "Question 142 — QCM\nComment manipuler le linge utilisé ?\nChoisir une seule bonne réponse.",
          "options": [
            "Le secouer fortement",
            "Limiter son agitation",
            "Le plaquer contre sa tenue",
            "Le poser au sol"
          ],
          "correct": "Limiter son agitation",
          "explanation": "Le cours demande une manipulation limitée, sans contact avec la tenue ni le sol.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 39–40 du PDF.",
          "answer": "Limiter son agitation"
        },
        {
          "id": "hygiene-as-143",
          "type": "qcm",
          "text": "Question 143 — QCM\nSelon le cours AS, quelle limite de remplissage convient au sac de linge utilisé ?\nChoisir une seule bonne réponse.",
          "options": [
            "Environ deux tiers",
            "Au-delà de sa fermeture",
            "Sans limite",
            "Jusqu’à rupture du sac"
          ],
          "correct": "Environ deux tiers",
          "explanation": "Le sac rempli aux deux tiers est fermé pour le transport.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 40 du PDF.",
          "answer": "Environ deux tiers"
        },
        {
          "id": "hygiene-as-144",
          "type": "qcm",
          "text": "Question 144 — QCM\nOù doit être placé le linge propre en attente d’utilisation ?\nChoisir une seule bonne réponse.",
          "options": [
            "Dans un endroit protégé",
            "Au sol à côté des déchets",
            "Sous du linge utilisé",
            "Dans un collecteur d’aiguilles"
          ],
          "correct": "Dans un endroit protégé",
          "explanation": "Le stockage doit protéger le linge propre de la contamination.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 40–41 du PDF.",
          "answer": "Dans un endroit protégé"
        },
        {
          "id": "hygiene-as-145",
          "type": "qcm",
          "text": "Question 145 — QCM\nQuelle gestion des stocks de linge correspond au cours ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Utiliser les stocks les plus anciens en premier",
            "Placer les arrivages récents sous les anciens",
            "Remettre tout linge sorti dans la réserve",
            "Mélanger propre et utilisé"
          ],
          "correct": [
            "Utiliser les stocks les plus anciens en premier",
            "Placer les arrivages récents sous les anciens"
          ],
          "explanation": "La rotation évite l’accumulation des stocks et le retour de linge exposé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 41 du PDF.",
          "answers": [
            "Utiliser les stocks les plus anciens en premier",
            "Placer les arrivages récents sous les anciens"
          ]
        },
        {
          "id": "hygiene-as-146",
          "type": "qcm",
          "text": "Question 146 — QCM\nQuelle quantité de linge propre faut-il apporter dans la chambre ?\nChoisir une seule bonne réponse.",
          "options": [
            "Uniquement ce qui est nécessaire",
            "Toute la réserve du service",
            "Le linge d’une semaine pour tous les patients",
            "Le linge utilisé d’autres chambres"
          ],
          "correct": "Uniquement ce qui est nécessaire",
          "explanation": "Limiter les apports préserve le stock propre.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 41 du PDF.",
          "answer": "Uniquement ce qui est nécessaire"
        },
        {
          "id": "hygiene-as-147",
          "type": "qcm",
          "text": "Question 147 — QCM\nPourquoi fermer les contenants de linge utilisé avant transport ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Limiter la dissémination",
            "Maintenir la séparation des circuits",
            "Faciliter le mélange avec les repas",
            "Permettre de transporter des aiguilles en vrac"
          ],
          "correct": [
            "Limiter la dissémination",
            "Maintenir la séparation des circuits"
          ],
          "explanation": "Le contenant fermé protège l’environnement du circuit.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 40 du PDF.",
          "answers": [
            "Limiter la dissémination",
            "Maintenir la séparation des circuits"
          ]
        },
        {
          "id": "hygiene-as-148",
          "type": "qcm",
          "text": "Question 148 — QCM\nUn déchet médicamenteux doit suivre :\nChoisir une seule bonne réponse.",
          "options": [
            "Le circuit défini pour ce déchet selon le protocole",
            "Toujours la poubelle des repas",
            "Toujours le lavabo",
            "Le panier de linge"
          ],
          "correct": "Le circuit défini pour ce déchet selon le protocole",
          "explanation": "Le cours distingue les déchets médicamenteux et chimiques des déchets assimilables aux ordures ménagères.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 42–44 du PDF.",
          "answer": "Le circuit défini pour ce déchet selon le protocole"
        },
        {
          "id": "hygiene-as-149",
          "type": "qcm",
          "text": "Question 149 — QCM\nQue doit-on faire d’un chariot de collecte après usage ?\nChoisir une seule bonne réponse.",
          "options": [
            "L’entretenir selon le protocole",
            "Le laisser souillé",
            "Le ranger avec le matériel stérile sans entretien",
            "Le remplir de repas immédiatement"
          ],
          "correct": "L’entretenir selon le protocole",
          "explanation": "Le matériel de transport doit être nettoyé et entretenu.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 40,44 du PDF.",
          "answer": "L’entretenir selon le protocole"
        },
        {
          "id": "hygiene-as-150",
          "type": "qcm",
          "text": "Question 150 — QCM\nPourquoi porter les protections prévues lors de la collecte ?\nChoisir une seule bonne réponse.",
          "options": [
            "Limiter l’exposition aux déchets et aux souillures",
            "Remplacer le tri",
            "Autoriser le recapuchonnage",
            "Supprimer tout risque de manière absolue"
          ],
          "correct": "Limiter l’exposition aux déchets et aux souillures",
          "explanation": "Les équipements protègent le personnel mais ne remplacent ni le tri ni les bonnes pratiques.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 43–44 du PDF.",
          "answer": "Limiter l’exposition aux déchets et aux souillures"
        },
        {
          "id": "hygiene-as-151",
          "type": "qcm",
          "text": "Question 151 — QCM\nÀ quels patients s’appliquent les précautions standard ?\nChoisir une seule bonne réponse.",
          "options": [
            "Seulement patients connus VIH positifs",
            "Tous les patients",
            "Seulement patients opérés",
            "Seulement patients fébriles"
          ],
          "correct": "Tous les patients",
          "explanation": "Elles constituent la base de prévention pour tout patient.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 48–49 du PDF.",
          "answer": "Tous les patients"
        },
        {
          "id": "hygiene-as-152",
          "type": "qcm",
          "text": "Question 152 — QCM\nQuels éléments appartiennent aux précautions standard du cours ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Hygiène des mains",
            "Gestion sûre des objets piquants",
            "Équipements adaptés au risque",
            "Réutilisation de gants entre patients"
          ],
          "correct": [
            "Hygiène des mains",
            "Gestion sûre des objets piquants",
            "Équipements adaptés au risque"
          ],
          "explanation": "Ces mesures préviennent l’exposition et la transmission.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 48–49 du PDF.",
          "answers": [
            "Hygiène des mains",
            "Gestion sûre des objets piquants",
            "Équipements adaptés au risque"
          ]
        },
        {
          "id": "hygiene-as-153",
          "type": "qcm",
          "text": "Question 153 — QCM\nQuel est l’objectif de l’isolement septique ?\nChoisir une seule bonne réponse.",
          "options": [
            "Limiter la diffusion des agents d’un patient infecté ou colonisé",
            "Punir le patient",
            "Supprimer toute communication",
            "Remplacer son traitement"
          ],
          "correct": "Limiter la diffusion des agents d’un patient infecté ou colonisé",
          "explanation": "Il protège les autres personnes d’une transmission.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 49–50 du PDF.",
          "answer": "Limiter la diffusion des agents d’un patient infecté ou colonisé"
        },
        {
          "id": "hygiene-as-154",
          "type": "qcm",
          "text": "Question 154 — QCM\nQuel est l’objectif de l’isolement protecteur ?\nChoisir une seule bonne réponse.",
          "options": [
            "Protéger un patient particulièrement vulnérable",
            "Protéger uniquement les déchets",
            "Interdire tout soin",
            "Supprimer l’hygiène des mains"
          ],
          "correct": "Protéger un patient particulièrement vulnérable",
          "explanation": "Il limite l’exposition d’une personne fragilisée aux agents infectieux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 51 du PDF.",
          "answer": "Protéger un patient particulièrement vulnérable"
        },
        {
          "id": "hygiene-as-155",
          "type": "qcm",
          "text": "Question 155 — QCM\nQuelles catégories de précautions complémentaires figurent dans le cours ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Contact",
            "Gouttelettes",
            "Air",
            "Décoratives"
          ],
          "correct": [
            "Contact",
            "Gouttelettes",
            "Air"
          ],
          "explanation": "Elles complètent les précautions standard selon la transmission.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 50–51 du PDF.",
          "answers": [
            "Contact",
            "Gouttelettes",
            "Air"
          ]
        },
        {
          "id": "hygiene-as-156",
          "type": "qcm",
          "text": "Question 156 — QCM\nQuel exemple est associé à une transmission aérienne dans le cours ?\nChoisir une seule bonne réponse.",
          "options": [
            "Tuberculose pulmonaire",
            "Fracture fermée",
            "Diabète sans infection",
            "Entorse"
          ],
          "correct": "Tuberculose pulmonaire",
          "explanation": "La tuberculose est citée parmi les situations relevant des précautions Air.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 50 du PDF.",
          "answer": "Tuberculose pulmonaire"
        },
        {
          "id": "hygiene-as-157",
          "type": "qcm",
          "text": "Question 157 — QCM\nQuel exemple figure dans la catégorie des précautions Gouttelettes du cours ?\nChoisir une seule bonne réponse.",
          "options": [
            "Coqueluche",
            "Hypertension isolée",
            "Anémie nutritionnelle",
            "Calcul rénal sans infection"
          ],
          "correct": "Coqueluche",
          "explanation": "La coqueluche est citée dans cette catégorie.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 50 du PDF.",
          "answer": "Coqueluche"
        },
        {
          "id": "hygiene-as-158",
          "type": "qcm",
          "text": "Question 158 — QCM\nQuel exemple figure dans les précautions Contact du cours ?\nChoisir une seule bonne réponse.",
          "options": [
            "Gale",
            "Myopie",
            "Migraine",
            "Luxation"
          ],
          "correct": "Gale",
          "explanation": "Les précautions visent la transmission par contact.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 51 du PDF.",
          "answer": "Gale"
        },
        {
          "id": "hygiene-as-159",
          "type": "qcm",
          "text": "Question 159 — QCM\nQuelles actions protègent l’intimité pendant une toilette ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Fermer le rideau ou la porte selon la situation",
            "Découvrir seulement la zone lavée",
            "Expliquer le soin",
            "Exposer entièrement le patient sans nécessité"
          ],
          "correct": [
            "Fermer le rideau ou la porte selon la situation",
            "Découvrir seulement la zone lavée",
            "Expliquer le soin"
          ],
          "explanation": "La toilette doit préserver la pudeur et la dignité.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 18–19 du PDF.",
          "answers": [
            "Fermer le rideau ou la porte selon la situation",
            "Découvrir seulement la zone lavée",
            "Expliquer le soin"
          ]
        },
        {
          "id": "hygiene-as-160",
          "type": "qcm",
          "text": "Question 160 — QCM\nQuel sens convient à la toilette de la région génitale vers la région anale ?\nChoisir une seule bonne réponse.",
          "options": [
            "Du moins contaminé vers le plus contaminé",
            "De l’anus vers les organes génitaux à chaque passage",
            "Sans changer de matériel malgré les souillures",
            "Toujours avec le linge de visage"
          ],
          "correct": "Du moins contaminé vers le plus contaminé",
          "explanation": "Cette progression limite le transfert de contamination fécale.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 18–20 du PDF.",
          "answer": "Du moins contaminé vers le plus contaminé"
        },
        {
          "id": "hygiene-as-161",
          "type": "qcm",
          "text": "Question 161 — QCM\nQue faut-il faire avant d’aider un patient à manger ?\nChoisir une seule bonne réponse.",
          "options": [
            "Pratiquer l’hygiène des mains",
            "Utiliser les gants souillés de la toilette",
            "Poser le repas sur le sac de déchets",
            "Secouer du linge sale près du plateau"
          ],
          "correct": "Pratiquer l’hygiène des mains",
          "explanation": "La distribution et l’aide au repas exigent une hygiène adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 46 du PDF.",
          "answer": "Pratiquer l’hygiène des mains"
        },
        {
          "id": "hygiene-as-162",
          "type": "qcm",
          "text": "Question 162 — QCM\nQuels principes participent à l’hygiène des médicaments du cours ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Conserver l’identification du produit",
            "Vérifier la péremption",
            "Maintenir un rangement propre",
            "Mélanger les produits sans étiquette"
          ],
          "correct": [
            "Conserver l’identification du produit",
            "Vérifier la péremption",
            "Maintenir un rangement propre"
          ],
          "explanation": "Le circuit doit préserver l’identité et la qualité des produits.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 47–48 du PDF.",
          "answers": [
            "Conserver l’identification du produit",
            "Vérifier la péremption",
            "Maintenir un rangement propre"
          ]
        },
        {
          "id": "hygiene-as-163",
          "type": "qcm",
          "text": "Question 163 — QCM\nPourquoi limiter le matériel apporté dans la chambre à ce qui est nécessaire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Réduire les objets exposés à la contamination",
            "Remplacer tous les soins",
            "Supprimer la traçabilité",
            "Rendre inutile l’entretien"
          ],
          "correct": "Réduire les objets exposés à la contamination",
          "explanation": "Le cours applique ce principe notamment au linge propre.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 41 du PDF.",
          "answer": "Réduire les objets exposés à la contamination"
        },
        {
          "id": "hygiene-as-164",
          "type": "qcm",
          "text": "Question 164 — QCM\nLes précautions complémentaires :\nChoisir une seule bonne réponse.",
          "options": [
            "Remplacent toujours l’hygiène des mains",
            "S’ajoutent aux précautions standard",
            "Concernent uniquement les vêtements",
            "Autorisent à réutiliser les aiguilles"
          ],
          "correct": "S’ajoutent aux précautions standard",
          "explanation": "La protection spécifique ne supprime pas les mesures de base.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 48–51 du PDF.",
          "answer": "S’ajoutent aux précautions standard"
        },
        {
          "id": "hygiene-as-165",
          "type": "qcm",
          "text": "Question 165 — QCM\nQuels patients sont cités pour l’isolement protecteur ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Certains prématurés",
            "Certains grands brûlés",
            "Certains patients greffés",
            "Tous les visiteurs sans distinction"
          ],
          "correct": [
            "Certains prématurés",
            "Certains grands brûlés",
            "Certains patients greffés"
          ],
          "explanation": "Le cours cite ces personnes particulièrement vulnérables.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 51 du PDF.",
          "answers": [
            "Certains prématurés",
            "Certains grands brûlés",
            "Certains patients greffés"
          ]
        },
        {
          "id": "hygiene-as-166",
          "type": "qcm",
          "text": "Question 166 — QCM\nQuelles situations correspondent à un AES ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Piqûre avec aiguille souillée de sang",
            "Projection de sang dans l’œil",
            "Contact de sang avec une peau lésée",
            "Lecture d’un dossier propre"
          ],
          "correct": [
            "Piqûre avec aiguille souillée de sang",
            "Projection de sang dans l’œil",
            "Contact de sang avec une peau lésée"
          ],
          "explanation": "L’exposition implique une effraction ou un contact avec une muqueuse ou une peau lésée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 28 du PDF.",
          "answers": [
            "Piqûre avec aiguille souillée de sang",
            "Projection de sang dans l’œil",
            "Contact de sang avec une peau lésée"
          ]
        },
        {
          "id": "hygiene-as-167",
          "type": "qcm",
          "text": "Question 167 — QCM\nQuels virus sont particulièrement recherchés dans l’évaluation d’un AES ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C",
            "Uniquement virus de la rougeole"
          ],
          "correct": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C"
          ],
          "explanation": "Ces trois infections sont les principaux risques viraux cités.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answers": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C"
          ]
        },
        {
          "id": "hygiene-as-168",
          "type": "qcm",
          "text": "Question 168 — QCM\nAprès une piqûre, quelle première séquence de soins locaux est adaptée ?\nChoisir une seule bonne réponse.",
          "options": [
            "Laver à l’eau et au savon puis rincer",
            "Sucer la plaie",
            "Appliquer un désinfectant de sol",
            "Attendre le lendemain"
          ],
          "correct": "Laver à l’eau et au savon puis rincer",
          "explanation": "Le lavage et le rinçage précèdent l’antisepsie adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–30 du PDF.",
          "answer": "Laver à l’eau et au savon puis rincer"
        },
        {
          "id": "hygiene-as-169",
          "type": "qcm",
          "text": "Question 169 — QCM\nAprès une piqûre, que faut-il éviter ?\nChoisir une seule bonne réponse.",
          "options": [
            "Faire saigner volontairement la plaie",
            "Nettoyer la plaie",
            "Demander une évaluation urgente",
            "Signaler l’accident"
          ],
          "correct": "Faire saigner volontairement la plaie",
          "explanation": "Il ne faut pas faire saigner la plaie.",
          "source": "Institut national de recherche et de sécurité, Hépatite B, fiche Eficatt, janvier 2026, rubrique Que faire en cas d’exposition ? https://www.inrs.fr/publications/bdd/eficatt/fiche.html?refINRS=EFICATT_H%C3%A9patite+B&section=queFaireExposition",
          "answer": "Faire saigner volontairement la plaie"
        },
        {
          "id": "hygiene-as-170",
          "type": "qcm",
          "text": "Question 170 — QCM\nAprès projection de sang dans l’œil, quelle conduite est adaptée ?\nChoisir une seule bonne réponse.",
          "options": [
            "Rinçage abondant à l’eau ou au sérum physiologique",
            "Application de Javel de surface",
            "Frottement avec un chiffon souillé",
            "Absence de soins"
          ],
          "correct": "Rinçage abondant à l’eau ou au sérum physiologique",
          "explanation": "La muqueuse doit être rincée ; un désinfectant de surface ne s’applique pas dans l’œil.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 30 du PDF.",
          "answer": "Rinçage abondant à l’eau ou au sérum physiologique"
        },
        {
          "id": "hygiene-as-171",
          "type": "qcm",
          "text": "Question 171 — QCM\nQuels facteurs peuvent augmenter le risque lors d’une piqûre ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Piqûre profonde",
            "Aiguille creuse ayant contenu du sang",
            "Source avec charge virale élevée",
            "Ancienneté seule comme protection absolue"
          ],
          "correct": [
            "Piqûre profonde",
            "Aiguille creuse ayant contenu du sang",
            "Source avec charge virale élevée"
          ],
          "explanation": "L’évaluation considère le type d’exposition et la source.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answers": [
            "Piqûre profonde",
            "Aiguille creuse ayant contenu du sang",
            "Source avec charge virale élevée"
          ]
        },
        {
          "id": "hygiene-as-172",
          "type": "qcm",
          "text": "Question 172 — QCM\nQui décide des mesures médicales après l’exposition ?\nChoisir une seule bonne réponse.",
          "options": [
            "Un professionnel habilité après évaluation",
            "L’AS seul sans avis",
            "Un visiteur",
            "Le fournisseur de sacs"
          ],
          "correct": "Un professionnel habilité après évaluation",
          "explanation": "L’AS réalise les gestes immédiats et sollicite une évaluation médicale urgente.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answer": "Un professionnel habilité après évaluation"
        },
        {
          "id": "hygiene-as-173",
          "type": "qcm",
          "text": "Question 173 — QCM\nSi une prophylaxie post-exposition VIH est indiquée, quel délai maximal d’initiation donne l’OMS ?\nChoisir une seule bonne réponse.",
          "options": [
            "72 heures",
            "Deux semaines",
            "Un mois",
            "Six mois"
          ],
          "correct": "72 heures",
          "explanation": "Elle doit commencer au plus vite, idéalement dans les 24 heures et au plus tard dans les 72 heures ; ce maximum ne justifie aucune attente.",
          "source": "Organisation mondiale de la Santé, Guidelines for HIV post-exposure prophylaxis, 2024, présentation et recommandations sur le délai et la durée. https://www.who.int/publications/i/item/9789240095137",
          "answer": "72 heures"
        },
        {
          "id": "hygiene-as-174",
          "type": "qcm",
          "text": "Question 174 — QCM\nQuelle durée de prophylaxie VIH recommande l’OMS lorsqu’elle est prescrite ?\nChoisir une seule bonne réponse.",
          "options": [
            "28 jours",
            "Un seul jour",
            "Deux heures",
            "Sans durée prévue"
          ],
          "correct": "28 jours",
          "explanation": "La recommandation prévoit une prescription de 28 jours, avec suivi médical.",
          "source": "Organisation mondiale de la Santé, Guidelines for HIV post-exposure prophylaxis, 2024, présentation et recommandations sur le délai et la durée. https://www.who.int/publications/i/item/9789240095137",
          "answer": "28 jours"
        },
        {
          "id": "hygiene-as-175",
          "type": "qcm",
          "text": "Question 175 — QCM\nQuelle vaccination contribue à la prévention professionnelle d’une infection transmise par le sang ?\nChoisir une seule bonne réponse.",
          "options": [
            "Vaccination contre l’hépatite B",
            "Vaccination contre le VIH disponible en routine",
            "Vaccination contre l’hépatite C disponible en routine",
            "Vaccination uniquement antigrippale"
          ],
          "correct": "Vaccination contre l’hépatite B",
          "explanation": "Le cours cite la vaccination contre l’hépatite B dans la prévention des AES.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 30 du PDF.",
          "answer": "Vaccination contre l’hépatite B"
        },
        {
          "id": "hygiene-as-176",
          "type": "qcm",
          "text": "Question 176 — QCM\nQuelles mesures réduisent les AES liés aux aiguilles ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Ne pas recapuchonner",
            "Éliminer immédiatement dans le collecteur adapté",
            "Placer le collecteur à proximité",
            "Démonter à la main l’aiguille souillée"
          ],
          "correct": [
            "Ne pas recapuchonner",
            "Éliminer immédiatement dans le collecteur adapté",
            "Placer le collecteur à proximité"
          ],
          "explanation": "Ces mesures limitent les manipulations après le geste.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 49 du PDF.",
          "answers": [
            "Ne pas recapuchonner",
            "Éliminer immédiatement dans le collecteur adapté",
            "Placer le collecteur à proximité"
          ]
        },
        {
          "id": "hygiene-as-177",
          "type": "qcm",
          "text": "Question 177 — QCM\nUne personne s’est piquée pendant la collecte. Que doit-elle faire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Interrompre la tâche pour les soins immédiats et l’évaluation",
            "Terminer obligatoirement toutes les chambres",
            "Cacher l’accident",
            "Attendre une douleur intense"
          ],
          "correct": "Interrompre la tâche pour les soins immédiats et l’évaluation",
          "explanation": "La prise en charge de l’exposition est urgente.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–31 du PDF.",
          "answer": "Interrompre la tâche pour les soins immédiats et l’évaluation"
        },
        {
          "id": "hygiene-as-178",
          "type": "qcm",
          "text": "Question 178 — QCM\nPourquoi analyser les AES survenus dans un service ?\nChoisir une seule bonne réponse.",
          "options": [
            "Améliorer les pratiques et le matériel",
            "Blâmer systématiquement la victime",
            "Supprimer les déclarations",
            "Conclure que les accidents sont impossibles"
          ],
          "correct": "Améliorer les pratiques et le matériel",
          "explanation": "La surveillance aide à choisir des actions préventives.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answer": "Améliorer les pratiques et le matériel"
        },
        {
          "id": "hygiene-as-179",
          "type": "qcm",
          "text": "Question 179 — QCM\nAprès un AES, quelles actions accompagnent les soins immédiats ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Informer le responsable selon la procédure",
            "Obtenir un avis médical urgent",
            "Organiser le suivi prescrit",
            "Ignorer le statut vaccinal"
          ],
          "correct": [
            "Informer le responsable selon la procédure",
            "Obtenir un avis médical urgent",
            "Organiser le suivi prescrit"
          ],
          "explanation": "L’évaluation et le suivi complètent les gestes locaux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answers": [
            "Informer le responsable selon la procédure",
            "Obtenir un avis médical urgent",
            "Organiser le suivi prescrit"
          ]
        },
        {
          "id": "hygiene-as-180",
          "type": "qcm",
          "text": "Question 180 — QCM\nLorsqu’un collecteur atteint sa limite de remplissage indiquée, que faire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Le fermer et le remplacer selon le protocole",
            "Tasser les aiguilles à la main",
            "Forcer l’ajout d’objets",
            "Vider son contenu dans un sac souple"
          ],
          "correct": "Le fermer et le remplacer selon le protocole",
          "explanation": "Le collecteur ne doit pas être utilisé au-delà de sa limite.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 49 du PDF.",
          "answer": "Le fermer et le remplacer selon le protocole"
        },
        {
          "id": "hygiene-as-181",
          "type": "qcd",
          "text": "Question 181 — QCD\nLes précautions Contact prescrites dispensent l’AS des précautions standard.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Elles s’ajoutent aux mesures de base.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 48–51 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-182",
          "type": "qcd",
          "text": "Question 182 — QCD\nL’AS doit préserver l’intimité de Mme K. pendant la toilette.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "Elle protège la pudeur et ne découvre que la zone nécessaire.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 18–19 du PDF.",
          "answer": "Vrai",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-183",
          "type": "qcd",
          "text": "Question 183 — QCD\nLe linge utilisé peut être secoué dans la chambre pour en retirer les salissures.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il faut limiter l’agitation et utiliser le circuit prévu.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 39–40 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-184",
          "type": "qcd",
          "text": "Question 184 — QCD\nLes gants utilisés pour la toilette peuvent être conservés pour aider Mme K. à manger.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il faut retirer les gants, pratiquer l’hygiène des mains et préparer l’aide au repas proprement.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 24,46,49 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-185",
          "type": "qcd",
          "text": "Question 185 — QCD\nL’AS peut encourager Mme K. à participer à la toilette selon ses capacités.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La participation respecte l’autonomie et favorise le confort.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 17–18 du PDF.",
          "answer": "Vrai",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-186",
          "type": "qcm",
          "text": "Question 186 — QCM\nPour la toilette intime de Mme K., quelle progression limite la contamination fécale ?\nChoisir une seule bonne réponse.",
          "options": [
            "De la région génitale vers la région anale",
            "De l’anus vers le visage",
            "Sans distinction entre zones",
            "Avec le même linge souillé pour toutes les zones"
          ],
          "correct": "De la région génitale vers la région anale",
          "explanation": "Le cours recommande une progression du moins contaminé vers le plus contaminé.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 18–20 du PDF.",
          "answer": "De la région génitale vers la région anale",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-187",
          "type": "qcm",
          "text": "Question 187 — QCM\nQuelles actions conviennent au linge utilisé de Mme K. ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Le placer dans le contenant prévu",
            "Éviter de le plaquer contre la tenue",
            "Le déposer au sol",
            "Le mélanger au linge propre"
          ],
          "correct": [
            "Le placer dans le contenant prévu",
            "Éviter de le plaquer contre la tenue"
          ],
          "explanation": "Le linge utilisé suit un circuit séparé et doit être manipulé le moins possible.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 39–40 du PDF.",
          "answers": [
            "Le placer dans le contenant prévu",
            "Éviter de le plaquer contre la tenue"
          ],
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-188",
          "type": "qcm",
          "text": "Question 188 — QCM\nLes mains de l’AS sont visiblement souillées après la tâche. Que faire ?\nChoisir une seule bonne réponse.",
          "options": [
            "Lavage à l’eau et au savon",
            "Essuyage sur la blouse",
            "Port immédiat de gants sans lavage",
            "Attendre la fin du repas"
          ],
          "correct": "Lavage à l’eau et au savon",
          "explanation": "Le lavage élimine les salissures visibles.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 14 du PDF.",
          "answer": "Lavage à l’eau et au savon",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-189",
          "type": "qcm",
          "text": "Question 189 — QCM\nAvant le repas, quelles actions sont adaptées ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Préparer un environnement propre",
            "Pratiquer l’hygiène des mains",
            "Déposer le plateau sur le sac de linge utilisé",
            "Réutiliser les gants souillés"
          ],
          "correct": [
            "Préparer un environnement propre",
            "Pratiquer l’hygiène des mains"
          ],
          "explanation": "Le repas doit être protégé des contaminations provenant de la toilette.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 46 du PDF.",
          "answers": [
            "Préparer un environnement propre",
            "Pratiquer l’hygiène des mains"
          ],
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-190",
          "type": "qcm",
          "text": "Question 190 — QCM\nAprès la toilette, que faire du matériel réutilisable ?\nChoisir une seule bonne réponse.",
          "options": [
            "Appliquer le traitement prévu selon son usage",
            "Le ranger encore souillé",
            "L’utiliser directement pour une autre patiente",
            "Le mélanger aux repas"
          ],
          "correct": "Appliquer le traitement prévu selon son usage",
          "explanation": "Le nettoyage et, si nécessaire, la désinfection suivent le protocole du matériel.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 33–37 du PDF.",
          "answer": "Appliquer le traitement prévu selon son usage",
          "caseContext": "Étude de cas 1 : toilette, linge et repas\nUne AS aide Mme K., hospitalisée et présentant une diarrhée, à faire sa toilette. Un protocole de précautions Contact est prescrit. Le sac de linge utilisé est disponible à proximité. Après la toilette, l’AS doit entretenir le matériel puis aider Mme K. à manger."
        },
        {
          "id": "hygiene-as-191",
          "type": "qcd",
          "text": "Question 191 — QCD\nLe port de gants exclut tout AES après cette piqûre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les gants ne garantissent pas l’absence d’effraction cutanée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 28–29 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-192",
          "type": "qcd",
          "text": "Question 192 — QCD\nL’AS doit faire saigner volontairement la plaie pour évacuer le virus.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il ne faut pas faire saigner la plaie ; réaliser les soins locaux puis obtenir un avis urgent.",
          "source": "Institut national de recherche et de sécurité, Hépatite B, fiche Eficatt, janvier 2026, rubrique Que faire en cas d’exposition ? https://www.inrs.fr/publications/bdd/eficatt/fiche.html?refINRS=EFICATT_H%C3%A9patite+B&section=queFaireExposition",
          "answer": "Faux",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-193",
          "type": "qcd",
          "text": "Question 193 — QCD\nL’absence d’identification immédiate du patient source justifie d’attendre avant de consulter.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’évaluation médicale doit commencer sans attendre ; elle tient compte de l’incertitude.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-194",
          "type": "qcd",
          "text": "Question 194 — QCD\nCette piqûre profonde avec aiguille creuse est un élément important de l’évaluation du risque.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La profondeur et la nature de l’aiguille sont des facteurs cités.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answer": "Vrai",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-195",
          "type": "qcd",
          "text": "Question 195 — QCD\nLe sac souple était un contenant adapté pour cette aiguille usagée.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’aiguille devait être éliminée immédiatement dans un collecteur pour piquants et coupants.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 43,49 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-196",
          "type": "qcm",
          "text": "Question 196 — QCM\nQuelle action locale doit commencer immédiatement ?\nChoisir une seule bonne réponse.",
          "options": [
            "Laver à l’eau et au savon, puis rincer",
            "Sucer la plaie",
            "Appliquer un produit de sol",
            "Attendre le prochain service"
          ],
          "correct": "Laver à l’eau et au savon, puis rincer",
          "explanation": "Le lavage et le rinçage sont suivis de l’antisepsie adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 29–30 du PDF.",
          "answer": "Laver à l’eau et au savon, puis rincer",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-197",
          "type": "qcm",
          "text": "Question 197 — QCM\nAprès les premiers soins, quelles actions sont indiquées ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Solliciter une évaluation médicale urgente",
            "Informer le responsable selon la procédure",
            "Cacher l’accident",
            "Reprendre sans avis médical"
          ],
          "correct": [
            "Solliciter une évaluation médicale urgente",
            "Informer le responsable selon la procédure"
          ],
          "explanation": "L’exposition nécessite une évaluation et un signalement selon la procédure.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 30–31 du PDF.",
          "answers": [
            "Solliciter une évaluation médicale urgente",
            "Informer le responsable selon la procédure"
          ],
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-198",
          "type": "qcm",
          "text": "Question 198 — QCM\nQuels virus doivent être considérés lors de cette évaluation ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C",
            "Uniquement virus grippal"
          ],
          "correct": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C"
          ],
          "explanation": "Le cours identifie ces trois risques viraux.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 29 du PDF.",
          "answers": [
            "VIH",
            "Virus de l’hépatite B",
            "Virus de l’hépatite C"
          ],
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-199",
          "type": "qcm",
          "text": "Question 199 — QCM\nQue faut-il faire du collecteur trop rempli ?\nChoisir une seule bonne réponse.",
          "options": [
            "Appliquer sa procédure de fermeture et de remplacement",
            "Tasser avec la main",
            "Transvaser dans un sac souple",
            "Continuer à forcer les aiguilles"
          ],
          "correct": "Appliquer sa procédure de fermeture et de remplacement",
          "explanation": "La limite de remplissage doit être respectée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 49 du PDF.",
          "answer": "Appliquer sa procédure de fermeture et de remplacement",
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-200",
          "type": "qcm",
          "text": "Question 200 — QCM\nQuelle amélioration prévient une répétition de cet accident ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Collecteur adapté accessible au lieu du geste",
            "Élimination immédiate de l’aiguille après usage",
            "Rappel des consignes de non-recapuchonnage",
            "Mélange des aiguilles au linge"
          ],
          "correct": [
            "Collecteur adapté accessible au lieu du geste",
            "Élimination immédiate de l’aiguille après usage",
            "Rappel des consignes de non-recapuchonnage"
          ],
          "explanation": "La prévention repose sur le circuit sûr et la réduction des manipulations.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 43,49 du PDF.",
          "answers": [
            "Collecteur adapté accessible au lieu du geste",
            "Élimination immédiate de l’aiguille après usage",
            "Rappel des consignes de non-recapuchonnage"
          ],
          "caseContext": "Étude de cas 2 : piqûre pendant la collecte\nPendant la collecte, un AS se pique profondément avec une aiguille creuse souillée de sang, abandonnée dans un sac souple. Il porte des gants. Le patient source n’est pas encore identifié. Le collecteur d’objets piquants du secteur a dépassé sa limite de remplissage. Le service dispose d’une procédure AES et d’un accès à une évaluation médicale urgente."
        },
        {
          "id": "hygiene-as-201",
          "type": "qcd",
          "text": "Question 201 — QCD\nLa solution mère à 5 % peut être utilisée pure à la place de la solution prescrite à 0,5 %.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "La concentration prévue doit être respectée ; une solution plus concentrée n’est pas automatiquement adaptée.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 11–12 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-202",
          "type": "qcd",
          "text": "Question 202 — QCD\nL’AS doit mélanger le produit chloré avec un autre produit d’entretien pour accroître son efficacité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Les produits ne doivent pas être mélangés ; suivre les instructions et le protocole.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 11–12 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-203",
          "type": "qcd",
          "text": "Question 203 — QCD\nL’emballage déchiré permet de garantir la stérilité du matériel qu’il contient.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "L’intégrité de la barrière stérile n’est plus garantie.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 35–37 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-204",
          "type": "qcd",
          "text": "Question 204 — QCD\nLe linge propre doit être protégé et séparé du linge utilisé.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Vrai",
          "explanation": "La séparation évite sa contamination pendant le stockage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 40–41 du PDF.",
          "answer": "Vrai",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-205",
          "type": "qcd",
          "text": "Question 205 — QCD\nLe matériel encore souillé peut être rangé directement dans le stock propre.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "correct": "Faux",
          "explanation": "Il doit d’abord suivre la procédure de traitement correspondant à son usage.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 33–37 du PDF.",
          "answer": "Faux",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-206",
          "type": "qcm",
          "text": "Question 206 — QCM\nQuel volume de solution mère à 5 % faut-il pour obtenir 1 000 mL à 0,5 % ?\nChoisir une seule bonne réponse.",
          "options": [
            "100 mL",
            "10 mL",
            "500 mL",
            "1 000 mL"
          ],
          "correct": "100 mL",
          "explanation": "V₁ = C₂V₂/C₁ = 0,5 × 1 000/5 = 100 mL.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 12 du PDF.",
          "answer": "100 mL",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-207",
          "type": "qcm",
          "text": "Question 207 — QCM\nAprès le prélèvement de solution mère, quel volume final faut-il atteindre avec l’eau ?\nChoisir une seule bonne réponse.",
          "options": [
            "1 000 mL au total",
            "1 100 mL au total",
            "100 mL au total",
            "5 000 mL au total"
          ],
          "correct": "1 000 mL au total",
          "explanation": "Compléter jusqu’à 1 000 mL ; cela correspond à environ 900 mL d’eau pour 100 mL de solution mère.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 12 du PDF.",
          "answer": "1 000 mL au total",
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-208",
          "type": "qcm",
          "text": "Question 208 — QCM\nQuelle progression convient à l’entretien de la salle ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Du propre vers le sale",
            "Du haut vers le bas",
            "Du sale vers le propre",
            "Du sol vers les surfaces hautes"
          ],
          "correct": [
            "Du propre vers le sale",
            "Du haut vers le bas"
          ],
          "explanation": "Cette progression limite le transfert des salissures.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, page 27 du PDF.",
          "answers": [
            "Du propre vers le sale",
            "Du haut vers le bas"
          ],
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-209",
          "type": "qcm",
          "text": "Question 209 — QCM\nQuels éléments doivent être vérifiés avant l’utilisation de la solution préparée ?\nChoisir les 3 bonnes réponses.",
          "options": [
            "Identification de la solution",
            "Concentration et temps de contact prescrits",
            "Compatibilité du support",
            "Seulement l’odeur"
          ],
          "correct": [
            "Identification de la solution",
            "Concentration et temps de contact prescrits",
            "Compatibilité du support"
          ],
          "explanation": "L’identification et le respect des conditions d’emploi sont essentiels.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 11–12 du PDF.",
          "answers": [
            "Identification de la solution",
            "Concentration et temps de contact prescrits",
            "Compatibilité du support"
          ],
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
        },
        {
          "id": "hygiene-as-210",
          "type": "qcm",
          "text": "Question 210 — QCM\nQue faire du matériel contenu dans l’emballage stérile déchiré ?\nChoisir les 2 bonnes réponses.",
          "options": [
            "Le retirer du stock utilisable comme stérile",
            "Appliquer la procédure de retraitement adaptée",
            "L’utiliser sans contrôle",
            "Garantir la stérilité après un simple essuyage"
          ],
          "correct": [
            "Le retirer du stock utilisable comme stérile",
            "Appliquer la procédure de retraitement adaptée"
          ],
          "explanation": "La perte d’intégrité impose une prise en charge selon le protocole.",
          "source": "Documentation AS : Hygienne Hospitaliere et deontologie.pdf, pages 35–37 du PDF.",
          "answers": [
            "Le retirer du stock utilisable comme stérile",
            "Appliquer la procédure de retraitement adaptée"
          ],
          "caseContext": "Étude de cas 3 : entretien et contrôle des stocks\nUne AS prépare l’entretien d’une salle et vérifie les stocks. Le protocole demande 1 000 mL d’une solution à 0,5 %, préparée avec une solution mère à 5 % ; ces concentrations sont exprimées dans la même unité. Elle trouve aussi du linge propre non protégé près du linge utilisé, un emballage stérile déchiré et du matériel réutilisable encore souillé. Aucun produit ne doit être mélangé à un autre produit chimique."
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
          <p class="student-evaluation-meta"><strong>Questions :</strong> ${Math.min(getQuizQuestionCount(), getQuestionsForSelectedType(availableSubject.questions).length)} sur ${availableSubject.questions.length} — ${getQuizTypeLabel()} — ${quizSettings.displayMode === "all" ? "toutes sur une page" : "question par question"}</p>
          <p class="student-evaluation-meta"><strong>Fermeture :</strong> ${formatDateTime(availableSubject.closeDate, availableSubject.closeTime)}</p>
          <button class="student-start-btn" onclick="startQuickEvaluation('${availableSubject.id}')">Commencer</button>
        </div>
      `).join("") : `
        <div class="student-empty-state">Choisissez le sujet que vous souhaitez traiter.</div>
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
            <h3>Sujets disponibles</h3>
            <p class="student-section-note">Choisissez le sujet que vous souhaitez traiter.</p>
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
      const bank = (subjects.length ? subjects : CONFIG.subjects).flatMap(subject => subject.questions || []);
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
