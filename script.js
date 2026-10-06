const ADMIN_PASSWORD = "admin123";
const CONFIG = {
  "defaultMarking": {
    "correct": 1,
    "wrong": -1,
    "empty": 0
  },
  "subjects": [
    {
      "id": "stomatologie-60",
      "title": "Stomatologie — 60 questions QCD et QCM",
      "matter": "Stomatologie",
      "description": "30 QCD et 30 QCM — Document de référence : stoma.pdf.",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : sélectionner le nombre de réponses indiqué. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM ou absence de réponse : 0.",
      "duration": 90,
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
          "type": "qcd",
          "text": "La cavité buccale participe à la mastication, à la déglutition et à la phonation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La bouche intervient dans la préparation des aliments, leur déglutition et la production de la parole.",
          "source": "stoma.pdf, partie anatomie de la cavité buccale.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Le palais constitue la paroi inférieure de la cavité buccale.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le palais constitue la paroi supérieure ; le plancher buccal ferme la cavité en bas.",
          "source": "stoma.pdf, partie anatomie de la cavité buccale.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le palais dur est situé en avant du palais mou.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La voûte palatine osseuse est antérieure et le voile du palais est postérieur.",
          "source": "stoma.pdf, partie anatomie de la cavité buccale.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La langue intervient uniquement dans la perception du goût.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle participe également à la mastication, à la déglutition et à la phonation.",
          "source": "stoma.pdf, partie anatomie de la cavité buccale.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Il existe trois paires de glandes salivaires principales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ce sont les parotides, les sous-mandibulaires et les sublinguales.",
          "source": "stoma.pdf, partie glandes salivaires principales.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La couronne dentaire correspond à la partie implantée dans l’alvéole osseuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La racine est implantée dans l’alvéole ; la couronne constitue la partie visible de la dent.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Le collet se situe à la jonction entre la couronne et la racine.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il représente la zone de transition entre ces deux parties.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L’émail, la dentine et le cément sont des tissus minéralisés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ces trois tissus constituent les parties minéralisées de la dent.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La pulpe dentaire contient des vaisseaux et des nerfs.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La pulpe assure notamment la vascularisation et l’innervation de la dent.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La denture temporaire complète comprend 32 dents.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle comprend 20 dents ; la denture permanente complète en comprend 32.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "La dentition désigne le processus de formation et d’éruption des dents.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La denture désigne, quant à elle, l’ensemble des dents présentes.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une carie limitée à l’émail provoque toujours une douleur spontanée intense.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’atteinte de l’émail est souvent asymptomatique.",
          "source": "stoma.pdf, partie carie dentaire.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Une atteinte carieuse de la dentine peut provoquer une douleur au contact des aliments sucrés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La douleur peut être déclenchée par le sucre, les aliments acides et les variations thermiques.",
          "source": "stoma.pdf, partie carie de la dentine.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La pulpite est une inflammation de la gencive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La pulpite touche la pulpe dentaire ; l’inflammation de la gencive est une gingivite.",
          "source": "stoma.pdf, parties pulpopathies et stomatites.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Une infection dentaire peut entraîner des complications à distance.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le document cite notamment l’endocardite et la septicémie.",
          "source": "stoma.pdf, partie complications de la carie dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La desmodontite correspond à une inflammation du ligament alvéolo-dentaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Ce ligament, également appelé desmodonte, relie la racine à l’alvéole.",
          "source": "stoma.pdf, partie desmodontite.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une cellulite d’origine dentaire peut atteindre les tissus de la face et du cou.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’infection peut diffuser dans les espaces cellulaires cervico-faciaux.",
          "source": "stoma.pdf, chapitre 4 : Les cellulites d’origine dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La carie compliquée constitue une cause majeure de cellulite dentaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Une infection issue de la dent peut se propager aux tissus voisins.",
          "source": "stoma.pdf, chapitre 4, étiologie dentaire.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La fistulisation d’un foyer infectieux dentaire garantit sa guérison définitive.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elle peut soulager les symptômes alors que le foyer infectieux persiste.",
          "source": "stoma.pdf, chapitre 4, évolution des cellulites.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "La cellulite diffuse peut engager le pronostic vital.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Son extension rapide et ses complications générales justifient une prise en charge urgente.",
          "source": "stoma.pdf, chapitre 4, cellulites diffuses.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "La subluxation dentaire entraîne obligatoirement une expulsion complète de la dent.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La subluxation donne une mobilité anormale sans déplacement de la dent.",
          "source": "stoma.pdf, partie traumatismes alvéolo-dentaires.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "L’intrusion correspond à l’enfoncement d’une dent dans son alvéole.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le déplacement se fait vers l’intérieur de l’alvéole.",
          "source": "stoma.pdf, partie luxations axiales.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L’avulsion dentaire correspond à une expulsion complète de la dent.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "La dent est totalement sortie de son alvéole.",
          "source": "stoma.pdf, partie traumatismes alvéolo-dentaires.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Toutes les stomatites sont d’origine bactérienne.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elles peuvent aussi être virales, fongiques, allergiques, traumatiques ou médicamenteuses.",
          "source": "stoma.pdf, chapitre 6 : Les stomatites.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "La chéilite est une inflammation des lèvres.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Le terme désigne une atteinte inflammatoire labiale.",
          "source": "stoma.pdf, chapitre 6, classification topographique.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Le muguet buccal est une forme de candidose.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Il correspond à une infection fongique de la muqueuse buccale.",
          "source": "stoma.pdf, chapitre 6, stomatite crémeuse ou muguet.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Les fentes labio-alvéolo-palatines sont des malformations congénitales.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Elles résultent d’un défaut de fusion de structures embryonnaires de la face.",
          "source": "stoma.pdf, chapitre 7 : Les fentes labio-alvéolo-palatines.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "Une ulcération linguale persistante peut être négligée lorsqu’elle est peu douloureuse.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "Sa persistance nécessite une recherche diagnostique, même si la douleur est faible.",
          "source": "stoma.pdf, chapitre 8 : Diagnostic des ulcérations linguales.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcd",
          "text": "Devant un traumatisme facial, la recherche d’une obstruction respiratoire est prioritaire.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’asphyxie constitue une urgence vitale.",
          "source": "stoma.pdf, chapitre 9 : Les urgences traumatiques maxillo-faciales.",
          "answer": "Vrai",
          "correct": "Vrai"
        },
        {
          "type": "qcd",
          "text": "L’aspect clinique seul permet toujours de distinguer une tumeur bénigne d’une tumeur maligne des maxillaires.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "explanation": "L’imagerie et l’examen anatomopathologique peuvent être nécessaires.",
          "source": "stoma.pdf, chapitre 10 : Tumeurs des maxillaires.",
          "answer": "Faux",
          "correct": "Faux"
        },
        {
          "type": "qcm",
          "text": "Quelles structures limitent respectivement la cavité buccale en haut et en bas ? Choisir deux réponses.",
          "options": [
            "Le palais",
            "Le plancher buccal",
            "La parotide",
            "La racine dentaire"
          ],
          "explanation": "Le palais forme la paroi supérieure et le plancher buccal la paroi inférieure.",
          "source": "stoma.pdf, partie anatomie de la cavité buccale.",
          "answers": [
            "Le palais",
            "Le plancher buccal"
          ],
          "correct": [
            "Le palais",
            "Le plancher buccal"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles glandes appartiennent aux glandes salivaires principales ? Choisir trois réponses.",
          "options": [
            "Les parotides",
            "Les sous-mandibulaires",
            "Les sublinguales",
            "Les lacrymales",
            "La thyroïde"
          ],
          "explanation": "Ces trois types de glandes existent par paires.",
          "source": "stoma.pdf, partie glandes salivaires principales.",
          "answers": [
            "Les parotides",
            "Les sous-mandibulaires",
            "Les sublinguales"
          ],
          "correct": [
            "Les parotides",
            "Les sous-mandibulaires",
            "Les sublinguales"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles fonctions impliquent la langue ? Choisir trois réponses.",
          "options": [
            "La mastication",
            "La déglutition",
            "La phonation",
            "La filtration du sang",
            "La production de bile"
          ],
          "explanation": "La langue mobilise les aliments, participe à leur déglutition et à l’articulation des sons.",
          "source": "stoma.pdf, partie langue.",
          "answers": [
            "La mastication",
            "La déglutition",
            "La phonation"
          ],
          "correct": [
            "La mastication",
            "La déglutition",
            "La phonation"
          ]
        },
        {
          "type": "qcm",
          "text": "Quel tissu recouvre la racine dentaire ? Choisir une réponse.",
          "options": [
            "L’émail",
            "Le cément",
            "La pulpe",
            "La muqueuse palatine"
          ],
          "explanation": "Le cément recouvre la racine ; l’émail recouvre la couronne.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answer": "Le cément",
          "correct": "Le cément"
        },
        {
          "type": "qcm",
          "text": "Quels éléments constituent le parodonte ? Choisir quatre réponses.",
          "options": [
            "La gencive",
            "Le ligament alvéolo-dentaire",
            "Le cément",
            "L’os alvéolaire",
            "La pulpe"
          ],
          "explanation": "Le parodonte regroupe les tissus de soutien de la dent.",
          "source": "stoma.pdf, chapitre 2 : L’organe dentaire.",
          "answers": [
            "La gencive",
            "Le ligament alvéolo-dentaire",
            "Le cément",
            "L’os alvéolaire"
          ],
          "correct": [
            "La gencive",
            "Le ligament alvéolo-dentaire",
            "Le cément",
            "L’os alvéolaire"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelle proposition décrit correctement la denture permanente complète ? Choisir une réponse.",
          "options": [
            "Elle comprend 20 dents.",
            "Elle comprend 24 dents.",
            "Elle comprend 32 dents.",
            "Elle comprend uniquement des incisives et des canines."
          ],
          "explanation": "La denture permanente complète comprend 32 dents, dents de sagesse incluses.",
          "source": "stoma.pdf, chapitre 2, dentures temporaire et permanente.",
          "answer": "Elle comprend 32 dents.",
          "correct": "Elle comprend 32 dents."
        },
        {
          "type": "qcm",
          "text": "Dans la numérotation dentaire à deux chiffres, que désigne le premier chiffre ? Choisir une réponse.",
          "options": [
            "Le nombre de racines",
            "Le quadrant dentaire",
            "Le degré de mobilité",
            "La profondeur de la carie"
          ],
          "explanation": "Le second chiffre indique la position de la dent dans ce quadrant.",
          "source": "stoma.pdf, partie nomenclature des dents.",
          "answer": "Le quadrant dentaire",
          "correct": "Le quadrant dentaire"
        },
        {
          "type": "qcm",
          "text": "Quels stimuli peuvent déclencher une douleur lors d’une carie dentinaire ? Choisir trois réponses.",
          "options": [
            "Le froid",
            "Les aliments sucrés",
            "Les aliments acides",
            "La lumière",
            "Le bruit"
          ],
          "explanation": "La dentine atteinte peut être sensible aux stimuli thermiques et alimentaires.",
          "source": "stoma.pdf, partie carie de la dentine.",
          "answers": [
            "Le froid",
            "Les aliments sucrés",
            "Les aliments acides"
          ],
          "correct": [
            "Le froid",
            "Les aliments sucrés",
            "Les aliments acides"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelle affection correspond à une inflammation de la pulpe dentaire ? Choisir une réponse.",
          "options": [
            "Une glossite",
            "Une pulpite",
            "Une chéilite",
            "Une ouranite"
          ],
          "explanation": "La pulpite touche le tissu vasculo-nerveux contenu dans la dent.",
          "source": "stoma.pdf, partie pulpopathies.",
          "answer": "Une pulpite",
          "correct": "Une pulpite"
        },
        {
          "type": "qcm",
          "text": "Un patient présente une douleur dentaire à la mastication, à la percussion et une sensation de « dent longue ». Quelle affection évoque ce tableau ? Choisir une réponse.",
          "options": [
            "Une desmodontite aiguë",
            "Une fente palatine",
            "Une chéilite",
            "Un muguet"
          ],
          "explanation": "Ces manifestations orientent vers une inflammation du ligament alvéolo-dentaire.",
          "source": "stoma.pdf, partie desmodontite aiguë.",
          "answer": "Une desmodontite aiguë",
          "correct": "Une desmodontite aiguë"
        },
        {
          "type": "qcm",
          "text": "Quelles complications régionales peuvent provenir d’un foyer infectieux dentaire ? Choisir trois réponses.",
          "options": [
            "Une sinusite maxillaire",
            "Une cellulite cervico-faciale",
            "Une adénite",
            "Une fente labiale congénitale",
            "Une agénésie dentaire"
          ],
          "explanation": "L’infection dentaire peut s’étendre aux structures régionales.",
          "source": "stoma.pdf, partie complications de la carie dentaire.",
          "answers": [
            "Une sinusite maxillaire",
            "Une cellulite cervico-faciale",
            "Une adénite"
          ],
          "correct": [
            "Une sinusite maxillaire",
            "Une cellulite cervico-faciale",
            "Une adénite"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles mesures participent à la prévention des caries ? Choisir trois réponses.",
          "options": [
            "Une hygiène buccodentaire régulière",
            "La limitation des prises sucrées répétées",
            "Des contrôles dentaires réguliers",
            "L’attente systématique d’une douleur intense",
            "L’arrêt du brossage en l’absence de douleur"
          ],
          "explanation": "La prévention associe hygiène, maîtrise des apports cariogènes et suivi dentaire.",
          "source": "stoma.pdf, partie prévention des infections dentaires.",
          "answers": [
            "Une hygiène buccodentaire régulière",
            "La limitation des prises sucrées répétées",
            "Des contrôles dentaires réguliers"
          ],
          "correct": [
            "Une hygiène buccodentaire régulière",
            "La limitation des prises sucrées répétées",
            "Des contrôles dentaires réguliers"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels facteurs peuvent favoriser les complications d’une infection dentaire ? Choisir trois réponses.",
          "options": [
            "Le diabète",
            "L’immunodépression",
            "La malnutrition",
            "Une bonne hygiène buccodentaire",
            "Le traitement précoce du foyer dentaire"
          ],
          "explanation": "Ces situations peuvent diminuer les capacités de défense de l’organisme.",
          "source": "stoma.pdf, chapitre 4, facteurs favorisant la diffusion de l’infection.",
          "answers": [
            "Le diabète",
            "L’immunodépression",
            "La malnutrition"
          ],
          "correct": [
            "Le diabète",
            "L’immunodépression",
            "La malnutrition"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelle forme de cellulite se caractérise par une collection de pus ? Choisir une réponse.",
          "options": [
            "La cellulite séreuse",
            "La cellulite suppurée",
            "La contusion dentaire",
            "La gingivite gravidique"
          ],
          "explanation": "La suppuration correspond à la formation d’un abcès.",
          "source": "stoma.pdf, chapitre 4, classification des cellulites.",
          "answer": "La cellulite suppurée",
          "correct": "La cellulite suppurée"
        },
        {
          "type": "qcm",
          "text": "Quelles propositions décrivent une cellulite diffuse ? Choisir trois réponses.",
          "options": [
            "Elle peut s’étendre rapidement.",
            "Elle peut entraîner des complications générales graves.",
            "Elle nécessite une prise en charge hospitalière urgente.",
            "Elle reste toujours limitée à une petite zone.",
            "Elle guérit nécessairement après une fistulisation."
          ],
          "explanation": "Son extension et sa gravité potentielle peuvent engager le pronostic vital.",
          "source": "stoma.pdf, chapitre 4, cellulites diffuses.",
          "answers": [
            "Elle peut s’étendre rapidement.",
            "Elle peut entraîner des complications générales graves.",
            "Elle nécessite une prise en charge hospitalière urgente."
          ],
          "correct": [
            "Elle peut s’étendre rapidement.",
            "Elle peut entraîner des complications générales graves.",
            "Elle nécessite une prise en charge hospitalière urgente."
          ]
        },
        {
          "type": "qcm",
          "text": "Quels éléments peuvent entrer dans la prise en charge d’une cellulite dentaire selon sa forme ? Choisir trois réponses.",
          "options": [
            "Un traitement médical adapté",
            "Le drainage d’une collection",
            "Le traitement de la dent causale",
            "L’abandon du suivi après une diminution de la douleur",
            "Le maintien volontaire du foyer infectieux"
          ],
          "explanation": "La prise en charge traite l’infection, ses conséquences et son origine dentaire.",
          "source": "stoma.pdf, chapitre 4, traitement.",
          "answers": [
            "Un traitement médical adapté",
            "Le drainage d’une collection",
            "Le traitement de la dent causale"
          ],
          "correct": [
            "Un traitement médical adapté",
            "Le drainage d’une collection",
            "Le traitement de la dent causale"
          ]
        },
        {
          "type": "qcm",
          "text": "Après un choc, une dent est mobile mais conserve sa position initiale. Quelle lésion est évoquée ? Choisir une réponse.",
          "options": [
            "Une subluxation",
            "Une avulsion",
            "Une intrusion",
            "Une extrusion"
          ],
          "explanation": "La subluxation associe mobilité et absence de déplacement.",
          "source": "stoma.pdf, partie traumatismes alvéolo-dentaires.",
          "answer": "Une subluxation",
          "correct": "Une subluxation"
        },
        {
          "type": "qcm",
          "text": "Quelles associations entre traumatisme et définition sont correctes ? Choisir trois réponses.",
          "options": [
            "Intrusion : enfoncement de la dent",
            "Extrusion : sortie partielle de la dent",
            "Avulsion : expulsion complète de la dent",
            "Subluxation : expulsion complète de la dent",
            "Contusion : déplacement latéral obligatoire"
          ],
          "explanation": "Ces trois lésions correspondent à des déplacements différents de la dent.",
          "source": "stoma.pdf, partie luxations dentaires.",
          "answers": [
            "Intrusion : enfoncement de la dent",
            "Extrusion : sortie partielle de la dent",
            "Avulsion : expulsion complète de la dent"
          ],
          "correct": [
            "Intrusion : enfoncement de la dent",
            "Extrusion : sortie partielle de la dent",
            "Avulsion : expulsion complète de la dent"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels éléments influencent la prise en charge d’un traumatisme dentaire ? Choisir trois réponses.",
          "options": [
            "Le type de lésion",
            "Le caractère temporaire ou permanent de la dent",
            "Le développement de la racine",
            "La couleur des vêtements du blessé",
            "Le prénom du patient"
          ],
          "explanation": "La décision dépend de la lésion, du type de dent et de sa maturité.",
          "source": "stoma.pdf, partie traitement des traumatismes alvéolo-dentaires.",
          "answers": [
            "Le type de lésion",
            "Le caractère temporaire ou permanent de la dent",
            "Le développement de la racine"
          ],
          "correct": [
            "Le type de lésion",
            "Le caractère temporaire ou permanent de la dent",
            "Le développement de la racine"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles associations entre inflammation et localisation sont correctes ? Choisir trois réponses.",
          "options": [
            "Gingivite : gencive",
            "Glossite : langue",
            "Chéilite : lèvres",
            "Ouranite : racine dentaire",
            "Pulpite : lèvre inférieure"
          ],
          "explanation": "L’ouranite touche le palais et la pulpite touche la pulpe dentaire.",
          "source": "stoma.pdf, chapitre 6, classification topographique ; chapitre 2.",
          "answers": [
            "Gingivite : gencive",
            "Glossite : langue",
            "Chéilite : lèvres"
          ],
          "correct": [
            "Gingivite : gencive",
            "Glossite : langue",
            "Chéilite : lèvres"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles origines de stomatite sont présentées dans le document ? Choisir trois réponses.",
          "options": [
            "Infectieuse",
            "Allergique",
            "Médicamenteuse",
            "Exclusivement osseuse",
            "Exclusivement congénitale"
          ],
          "explanation": "Les stomatites peuvent avoir plusieurs causes et ne sont pas toutes infectieuses.",
          "source": "stoma.pdf, chapitre 6 : Les stomatites.",
          "answers": [
            "Infectieuse",
            "Allergique",
            "Médicamenteuse"
          ],
          "correct": [
            "Infectieuse",
            "Allergique",
            "Médicamenteuse"
          ]
        },
        {
          "type": "qcm",
          "text": "Une muqueuse buccale présente des dépôts blanchâtres évoquant un muguet. Quelle origine est recherchée ? Choisir une réponse.",
          "options": [
            "Une origine fongique",
            "Une fracture mandibulaire",
            "Une fente palatine",
            "Une luxation dentaire"
          ],
          "explanation": "Le muguet est une forme de candidose buccale.",
          "source": "stoma.pdf, chapitre 6, stomatite crémeuse ou muguet.",
          "answer": "Une origine fongique",
          "correct": "Une origine fongique"
        },
        {
          "type": "qcm",
          "text": "Quelle association évoque une maladie de Behçet dans le cours ? Choisir une réponse.",
          "options": [
            "Aphtes buccaux, aphtes génitaux et atteinte oculaire",
            "Carie, fracture dentaire et intrusion",
            "Fente labiale, extrusion et contusion",
            "Muguet isolé et fracture du nez"
          ],
          "explanation": "Le document décrit une aphtose buccale et génitale associée à une atteinte oculaire.",
          "source": "stoma.pdf, chapitre 6, maladie de Behçet.",
          "answer": "Aphtes buccaux, aphtes génitaux et atteinte oculaire",
          "correct": "Aphtes buccaux, aphtes génitaux et atteinte oculaire"
        },
        {
          "type": "qcm",
          "text": "Quelles conséquences peuvent être associées à une fente labio-alvéolo-palatine ? Choisir trois réponses.",
          "options": [
            "Des difficultés d’alimentation",
            "Des troubles de la parole",
            "Des anomalies dentaires",
            "Une amélioration obligatoire de l’audition",
            "Une disparition systématique des besoins de soins dentaires"
          ],
          "explanation": "La malformation peut affecter plusieurs fonctions et le développement dento-maxillaire.",
          "source": "stoma.pdf, chapitre 7 : Les fentes labio-alvéolo-palatines.",
          "answers": [
            "Des difficultés d’alimentation",
            "Des troubles de la parole",
            "Des anomalies dentaires"
          ],
          "correct": [
            "Des difficultés d’alimentation",
            "Des troubles de la parole",
            "Des anomalies dentaires"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels domaines participent à la prise en charge des fentes labio-palatines ? Choisir trois réponses.",
          "options": [
            "La chirurgie",
            "L’orthodontie",
            "La rééducation de la parole",
            "L’abandon de la surveillance de croissance",
            "L’extraction systématique de toutes les dents"
          ],
          "explanation": "La prise en charge est multidisciplinaire et suit le développement de l’enfant.",
          "source": "stoma.pdf, chapitre 7, traitement.",
          "answers": [
            "La chirurgie",
            "L’orthodontie",
            "La rééducation de la parole"
          ],
          "correct": [
            "La chirurgie",
            "L’orthodontie",
            "La rééducation de la parole"
          ]
        },
        {
          "type": "qcm",
          "text": "Quelles causes peuvent expliquer une ulcération linguale ? Choisir trois réponses.",
          "options": [
            "Une morsure",
            "Une dent coupante",
            "Une prothèse traumatisante",
            "Une glande parotide normale",
            "Un émail sain sans facteur traumatique"
          ],
          "explanation": "Les traumatismes locaux constituent des causes possibles d’ulcération.",
          "source": "stoma.pdf, chapitre 8 : Diagnostic des ulcérations linguales.",
          "answers": [
            "Une morsure",
            "Une dent coupante",
            "Une prothèse traumatisante"
          ],
          "correct": [
            "Une morsure",
            "Une dent coupante",
            "Une prothèse traumatisante"
          ]
        },
        {
          "type": "qcm",
          "text": "Devant une ulcération linguale persistante et atypique, quelle démarche est adaptée ? Choisir une réponse.",
          "options": [
            "La considérer systématiquement comme bénigne",
            "Rechercher sa cause et envisager une biopsie en cas de doute",
            "Attendre obligatoirement une douleur intense",
            "Ignorer la présence éventuelle de ganglions"
          ],
          "explanation": "La persistance impose notamment d’éliminer une lésion néoplasique.",
          "source": "stoma.pdf, chapitre 8, conclusion.",
          "answer": "Rechercher sa cause et envisager une biopsie en cas de doute",
          "correct": "Rechercher sa cause et envisager une biopsie en cas de doute"
        },
        {
          "type": "qcm",
          "text": "Quelles situations constituent des priorités vitales devant un traumatisme facial ? Choisir trois réponses.",
          "options": [
            "Une obstruction des voies respiratoires",
            "Une hémorragie importante",
            "Une lésion crânienne grave associée",
            "Une légère irrégularité esthétique isolée",
            "Une coloration ancienne d’une dent sans signe de gravité"
          ],
          "explanation": "Les menaces respiratoires, circulatoires et neurologiques sont prioritaires.",
          "source": "stoma.pdf, chapitre 9, urgences vitales et polytraumatismes.",
          "answers": [
            "Une obstruction des voies respiratoires",
            "Une hémorragie importante",
            "Une lésion crânienne grave associée"
          ],
          "correct": [
            "Une obstruction des voies respiratoires",
            "Une hémorragie importante",
            "Une lésion crânienne grave associée"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels signes peuvent révéler une tumeur des maxillaires ? Choisir trois réponses.",
          "options": [
            "Une tuméfaction osseuse",
            "Une mobilité dentaire inexpliquée",
            "Un trouble de la sensibilité dans un territoire nerveux voisin",
            "Une disparition constante de toute douleur",
            "Une éruption normale des dents sans autre anomalie"
          ],
          "explanation": "La tumeur peut modifier l’os, les rapports dentaires et les structures nerveuses.",
          "source": "stoma.pdf, chapitre 10, signes d’appel.",
          "answers": [
            "Une tuméfaction osseuse",
            "Une mobilité dentaire inexpliquée",
            "Un trouble de la sensibilité dans un territoire nerveux voisin"
          ],
          "correct": [
            "Une tuméfaction osseuse",
            "Une mobilité dentaire inexpliquée",
            "Un trouble de la sensibilité dans un territoire nerveux voisin"
          ]
        },
        {
          "type": "qcm",
          "text": "Quels examens peuvent contribuer au diagnostic et au bilan d’une tumeur des maxillaires ? Choisir trois réponses.",
          "options": [
            "Une radiographie panoramique dentaire",
            "Un scanner ou une IRM selon l’indication",
            "Un examen anatomopathologique",
            "La mesure du poids seule",
            "La prise de température seule"
          ],
          "explanation": "L’imagerie explore la lésion et son extension ; l’anatomopathologie précise sa nature.",
          "source": "stoma.pdf, chapitre 10, aspects radiologiques et examen anatomopathologique.",
          "answers": [
            "Une radiographie panoramique dentaire",
            "Un scanner ou une IRM selon l’indication",
            "Un examen anatomopathologique"
          ],
          "correct": [
            "Une radiographie panoramique dentaire",
            "Un scanner ou une IRM selon l’indication",
            "Un examen anatomopathologique"
          ]
        }
      ]
    },
    {
      "id": "ssr-pf-60",
      "title": "SSR et planification familiale — 60 questions",
      "matter": "SSR / Planification familiale",
      "description": "30 QCD et 30 QCM de santé sexuelle et reproductive et planification familiale.",
      "instructions": "QCD : choisir Vrai ou Faux. QCM : sélectionner le nombre de réponses indiqué. Bonne réponse : +1 ; mauvaise réponse QCD : −1 ; mauvaise réponse QCM ou absence de réponse : 0.",
      "duration": 90,
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
          "type": "qcd",
          "text": "La santé de la reproduction concerne uniquement l’absence de maladie de l’appareil génital.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Elle comprend le bien-être physique, mental et social relatif à l’appareil reproducteur.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 5."
        },
        {
          "type": "qcd",
          "text": "La santé de la reproduction concerne tous les stades de la vie.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Son champ va de la naissance à l’âge avancé.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 5."
        },
        {
          "type": "qcd",
          "text": "La planification familiale consiste à imposer le même nombre d’enfants à toutes les familles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Elle permet aux individus et aux couples de déterminer librement la taille souhaitée de leur famille.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 11."
        },
        {
          "type": "qcd",
          "text": "La lutte contre les IST fait partie des composantes de la PF décrites dans le cours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Les composantes comprennent notamment contraception, IEC/CCC, infertilité, IST/VIH et genre.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 11."
        },
        {
          "type": "qcd",
          "text": "L’insuffisance de personnel qualifié constitue un obstacle institutionnel à la PF.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Cet obstacle concerne l’organisation et la disponibilité des services.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 12."
        },
        {
          "type": "qcd",
          "text": "La continuité renseigne sur le maintien de l’utilisation d’une méthode dans le temps.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Elle correspond à la proportion d’utilisatrices qui poursuivent la méthode après un délai donné.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 14."
        },
        {
          "type": "qcd",
          "text": "En catégorie 2, les avantages de la méthode l’emportent généralement sur les risques.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "La méthode peut généralement être utilisée.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 16."
        },
        {
          "type": "qcd",
          "text": "En catégorie 4, l’utilisation de la méthode présente un risque inacceptable pour la santé.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Cette méthode ne doit pas être utilisée dans cette situation.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 16."
        },
        {
          "type": "qcd",
          "text": "Le counseling vise à choisir une méthode à la place du client.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Le prestataire informe et accompagne le choix éclairé du client.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 21–23."
        },
        {
          "type": "qcd",
          "text": "Dans l’approche REDI, la prise de décision précède l’exploration des besoins.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "L’ordre est établissement de rapports, exploration, décision, mise en application.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 23–24."
        },
        {
          "type": "qcd",
          "text": "Les méthodes d’auto-observation reposent sur la connaissance de la fécondité.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Elles utilisent les signes naturels ou les jours du cycle pour repérer la période fertile.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 28."
        },
        {
          "type": "qcd",
          "text": "La méthode de la température basale nécessite de prendre la température après une activité physique.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "La mesure se fait au réveil, avant de se lever et dans des conditions comparables.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 30."
        },
        {
          "type": "qcd",
          "text": "La température basale s’élève habituellement après l’ovulation.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "La montée thermique est liée à la phase postovulatoire.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 30."
        },
        {
          "type": "qcd",
          "text": "La méthode des jours fixes convient normalement aux cycles de 26 à 32 jours.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Cette durée de cycle est une condition d’utilisation de la MJF.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 32."
        },
        {
          "type": "qcd",
          "text": "Dans la méthode des jours fixes, les jours 8 à 19 nécessitent d’éviter les rapports non protégés.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Cette période représente les jours potentiellement féconds retenus par la méthode.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 32–33."
        },
        {
          "type": "qcd",
          "text": "Les méthodes d’auto-observation protègent contre le VIH.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Elles ne constituent pas une barrière contre les IST.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 13 et 32."
        },
        {
          "type": "qcd",
          "text": "La MAMA exige que le bébé ait moins de six mois.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "L’âge inférieur à six mois est l’une des trois conditions de la méthode.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 38."
        },
        {
          "type": "qcd",
          "text": "La MAMA reste suffisante si le bébé a huit mois, même sans retour des règles.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Au-delà de six mois, une autre méthode est nécessaire pour prévenir une grossesse.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 38–39."
        },
        {
          "type": "qcd",
          "text": "Un même préservatif peut être lavé et réutilisé lors d’un autre rapport.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Chaque préservatif est destiné à une seule utilisation.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 42."
        },
        {
          "type": "qcd",
          "text": "La vaseline convient comme lubrifiant avec un préservatif en latex.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Les corps gras peuvent détériorer le latex.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 41–42."
        },
        {
          "type": "qcd",
          "text": "Un contraceptif hormonal combiné associe un œstrogène et un progestatif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Cette association définit les méthodes hormonales combinées.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 47."
        },
        {
          "type": "qcd",
          "text": "Une pilule progestative contient obligatoirement un œstrogène.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Elle contient seulement un progestatif.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 68."
        },
        {
          "type": "qcd",
          "text": "Les contraceptifs oraux combinés protègent contre le VIH.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Ils ne protègent pas contre les IST ; le préservatif reste utile.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 50."
        },
        {
          "type": "qcd",
          "text": "Le DMPA injectable est un contraceptif hormonal progestatif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "L’acétate de médroxyprogestérone est un progestatif.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 69."
        },
        {
          "type": "qcd",
          "text": "L’utilisateur peut retirer lui-même son implant avec une aiguille à domicile.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Le retrait requiert un prestataire formé et une procédure adaptée.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 76 et 79."
        },
        {
          "type": "qcd",
          "text": "Des saignements irréguliers peuvent survenir sous implant.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Les troubles du cycle font partie des effets secondaires possibles.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 72 et 80."
        },
        {
          "type": "qcd",
          "text": "Le retour à la fécondité peut être retardé après l’arrêt d’un injectable progestatif.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Ce retard possible doit être expliqué lors du choix de la méthode.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 72."
        },
        {
          "type": "qcd",
          "text": "La contraception par DIU est une méthode réversible.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Vrai",
          "correct": "Vrai",
          "explanation": "Le DIU peut être retiré lorsqu’une grossesse est souhaitée ou à la demande de la cliente.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 87."
        },
        {
          "type": "qcd",
          "text": "Une septicémie puerpérale permet la pose immédiate d’un DIU.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "La septicémie puerpérale contre-indique l’insertion du DIU.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 88 et 102."
        },
        {
          "type": "qcd",
          "text": "La vasectomie supprime immédiatement toute possibilité de grossesse dès la fin de l’intervention.",
          "options": [
            "Vrai",
            "Faux"
          ],
          "answer": "Faux",
          "correct": "Faux",
          "explanation": "Une contraception complémentaire est nécessaire pendant la période initiale selon le protocole de suivi.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 122–123."
        },
        {
          "type": "qcm",
          "text": "Quelle définition correspond à la santé de la reproduction ? (1 bonne réponse)",
          "options": [
            "Absence de grossesse uniquement",
            "Bien-être physique, mental et social concernant l’appareil reproducteur",
            "Surveillance exclusive des accouchements",
            "Traitement exclusif des infections génitales"
          ],
          "answer": "Bien-être physique, mental et social concernant l’appareil reproducteur",
          "correct": "Bien-être physique, mental et social concernant l’appareil reproducteur",
          "explanation": "La définition dépasse l’absence de maladie et concerne les fonctions reproductives.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 5."
        },
        {
          "type": "qcm",
          "text": "Quelle proposition définit le mieux la PF ? (1 bonne réponse)",
          "options": [
            "Stérilisation obligatoire",
            "Traitement exclusif de la ménopause",
            "Ensemble des moyens permettant une sexualité responsable et le choix de la taille de la famille",
            "Interdiction de toute grossesse"
          ],
          "answer": "Ensemble des moyens permettant une sexualité responsable et le choix de la taille de la famille",
          "correct": "Ensemble des moyens permettant une sexualité responsable et le choix de la taille de la famille",
          "explanation": "La PF permet notamment de prévenir les grossesses non désirées et d’espacer les naissances.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 11."
        },
        {
          "type": "qcm",
          "text": "Quel exemple correspond à un obstacle socioculturel ? (1 bonne réponse)",
          "options": [
            "Prix du transport",
            "Rupture du stock de contraceptifs",
            "Absence de personnel qualifié",
            "Tabou entourant les questions sexuelles"
          ],
          "answer": "Tabou entourant les questions sexuelles",
          "correct": "Tabou entourant les questions sexuelles",
          "explanation": "Le tabou sexuel figure parmi les obstacles socioculturels du cours.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 12."
        },
        {
          "type": "qcm",
          "text": "Quelle qualité évalue le retour de la fécondité après l’arrêt d’une méthode ? (1 bonne réponse)",
          "options": [
            "Continuité",
            "Coût",
            "Réversibilité",
            "Protection contre les IST"
          ],
          "answer": "Réversibilité",
          "correct": "Réversibilité",
          "explanation": "La réversibilité concerne le retour de la capacité reproductive.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 14."
        },
        {
          "type": "qcm",
          "text": "Que signifie une classification en catégorie 1 ? (1 bonne réponse)",
          "options": [
            "Risque inacceptable",
            "Aucune restriction",
            "Méthode généralement déconseillée",
            "Interdiction de toute contraception"
          ],
          "answer": "Aucune restriction",
          "correct": "Aucune restriction",
          "explanation": "La catégorie 1 permet l’utilisation sans restriction liée à l’état considéré.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 16."
        },
        {
          "type": "qcm",
          "text": "Quelle conduite correspond à une catégorie 4 ? (1 bonne réponse)",
          "options": [
            "Ignorer la pathologie",
            "Doubler la dose",
            "Utiliser sans précaution",
            "Ne pas utiliser cette méthode"
          ],
          "answer": "Ne pas utiliser cette méthode",
          "correct": "Ne pas utiliser cette méthode",
          "explanation": "La catégorie 4 représente un risque inacceptable pour la santé.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 16."
        },
        {
          "type": "qcm",
          "text": "Quels sont deux principes du counseling ? (2 bonnes réponses)",
          "options": [
            "Pression pour accepter une méthode",
            "Information volontairement incomplète",
            "Liberté de choix du client",
            "Respect de la confidentialité"
          ],
          "answers": [
            "Liberté de choix du client",
            "Respect de la confidentialité"
          ],
          "correct": [
            "Liberté de choix du client",
            "Respect de la confidentialité"
          ],
          "explanation": "Le counseling favorise un consentement éclairé et un choix libre.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 21."
        },
        {
          "type": "qcm",
          "text": "Une cliente revient insatisfaite de sa contraception. Quelle phase est particulièrement concernée ? (1 bonne réponse)",
          "options": [
            "Counseling de suivi",
            "Causerie de masse obligatoire",
            "Aucune phase",
            "Counseling initial exclusivement"
          ],
          "answer": "Counseling de suivi",
          "correct": "Counseling de suivi",
          "explanation": "Le suivi explore la satisfaction, les difficultés et les solutions possibles.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 22 et 24."
        },
        {
          "type": "qcm",
          "text": "Quel est l’ordre de l’approche REDI ? (1 bonne réponse)",
          "options": [
            "Mise en application, décision, rapports, exploration",
            "Exploration, mise en application, rapports, décision",
            "Rapports, exploration, décision, mise en application",
            "Décision, exploration, rapports, mise en application"
          ],
          "answer": "Rapports, exploration, décision, mise en application",
          "correct": "Rapports, exploration, décision, mise en application",
          "explanation": "La décision suit l’exploration des besoins et précède sa mise en œuvre.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 23–24."
        },
        {
          "type": "qcm",
          "text": "Quelles sont deux informations utiles à recueillir pendant l’interrogatoire de PF ? (2 bonnes réponses)",
          "options": [
            "Intentions de procréation",
            "Antécédents médicaux",
            "Choix imposé par un autre client",
            "Préférence du prestataire pour une marque"
          ],
          "answers": [
            "Intentions de procréation",
            "Antécédents médicaux"
          ],
          "correct": [
            "Intentions de procréation",
            "Antécédents médicaux"
          ],
          "explanation": "Ces informations orientent une proposition individualisée et sûre.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 23–26."
        },
        {
          "type": "qcm",
          "text": "Quel aspect de la glaire évoque le mieux la période fertile ? (1 bonne réponse)",
          "options": [
            "Épaisse et sèche en permanence",
            "Purulente et malodorante",
            "Toujours absente",
            "Transparente, abondante et filante"
          ],
          "answer": "Transparente, abondante et filante",
          "correct": "Transparente, abondante et filante",
          "explanation": "L’aspect de blanc d’œuf est associé à la période périovulatoire.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 30–31."
        },
        {
          "type": "qcm",
          "text": "Pour quels cycles la méthode des jours fixes est-elle principalement destinée ? (1 bonne réponse)",
          "options": [
            "26 à 32 jours",
            "Tous les cycles sans exception",
            "15 à 20 jours",
            "40 à 50 jours"
          ],
          "answer": "26 à 32 jours",
          "correct": "26 à 32 jours",
          "explanation": "Les cycles doivent habituellement rester dans l’intervalle prévu par la méthode.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 32."
        },
        {
          "type": "qcm",
          "text": "Quels jours nécessitent d’éviter les rapports non protégés avec la MJF ? (1 bonne réponse)",
          "options": [
            "Du 1er au 3e jour uniquement",
            "Du 8e au 19e jour inclus",
            "Le 14e jour uniquement",
            "Du 20e au 22e jour uniquement"
          ],
          "answer": "Du 8e au 19e jour inclus",
          "correct": "Du 8e au 19e jour inclus",
          "explanation": "La MJF retient une fenêtre de douze jours potentiellement féconds.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 32–33."
        },
        {
          "type": "qcm",
          "text": "Pour un exercice d’Ogino, les cycles vont de 26 à 30 jours. Avec les règles « cycle court − 18 » et « cycle long − 11 », quelle fenêtre obtient-on ? (1 bonne réponse)",
          "options": [
            "Du 8e au 19e jour",
            "Du 18e au 30e jour",
            "Du 10e au 16e jour",
            "Du 1er au 7e jour"
          ],
          "answer": "Du 8e au 19e jour",
          "correct": "Du 8e au 19e jour",
          "explanation": "26 − 18 = 8 et 30 − 11 = 19. Il s’agit d’une estimation calendaire.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 29."
        },
        {
          "type": "qcm",
          "text": "Quelles sont les trois conditions essentielles de la MAMA ? (3 bonnes réponses)",
          "options": [
            "Retour des règles",
            "Bébé âgé de moins de six mois",
            "Aménorrhée",
            "Allaitement exclusif ou quasi exclusif, fréquent jour et nuit"
          ],
          "answers": [
            "Bébé âgé de moins de six mois",
            "Aménorrhée",
            "Allaitement exclusif ou quasi exclusif, fréquent jour et nuit"
          ],
          "correct": [
            "Bébé âgé de moins de six mois",
            "Aménorrhée",
            "Allaitement exclusif ou quasi exclusif, fréquent jour et nuit"
          ],
          "explanation": "Les trois conditions doivent être réunies simultanément.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 38–39. CDC, Contraception and Birth Control Methods, 6 août 2024, section « Lactational Amenorrhea Methods »."
        },
        {
          "type": "qcm",
          "text": "Une mère utilisant la MAMA a son retour de couches à quatre mois. Quelle conduite est adaptée ? (1 bonne réponse)",
          "options": [
            "Arrêter obligatoirement l’allaitement",
            "Conserver la MAMA comme unique contraception",
            "Choisir une autre méthode et poursuivre l’allaitement",
            "Attendre systématiquement un an"
          ],
          "answer": "Choisir une autre méthode et poursuivre l’allaitement",
          "correct": "Choisir une autre méthode et poursuivre l’allaitement",
          "explanation": "Le retour des règles fait perdre une condition essentielle de la méthode.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 38–39."
        },
        {
          "type": "qcm",
          "text": "Quelle méthode peut contribuer à prévenir à la fois grossesse et IST ? (1 bonne réponse)",
          "options": [
            "Implant",
            "Méthode du calendrier",
            "Pilule progestative",
            "Préservatif"
          ],
          "answer": "Préservatif",
          "correct": "Préservatif",
          "explanation": "Le préservatif réduit le risque de grossesse et de transmission des IST lorsqu’il est bien utilisé.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 13 et 40–41."
        },
        {
          "type": "qcm",
          "text": "Quel lubrifiant est adapté à un préservatif en latex ? (1 bonne réponse)",
          "options": [
            "Vaseline",
            "Huile pour bébé",
            "Huile de cuisine",
            "Lubrifiant à base d’eau compatible"
          ],
          "answer": "Lubrifiant à base d’eau compatible",
          "correct": "Lubrifiant à base d’eau compatible",
          "explanation": "Les huiles détériorent le latex ; choisir un produit compatible.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 41–42."
        },
        {
          "type": "qcm",
          "text": "Après rupture d’un préservatif avec exposition au sperme, quelles sont deux préoccupations immédiates ? (2 bonnes réponses)",
          "options": [
            "Attente obligatoire des prochaines règles avant toute démarche",
            "Prévention d’une grossesse non désirée",
            "Évaluation du risque d’IST dont le VIH",
            "Prescription systématique d’une ligature tubaire"
          ],
          "answers": [
            "Prévention d’une grossesse non désirée",
            "Évaluation du risque d’IST dont le VIH"
          ],
          "correct": [
            "Prévention d’une grossesse non désirée",
            "Évaluation du risque d’IST dont le VIH"
          ],
          "explanation": "Il faut envisager la contraception d’urgence et évaluer l’exposition infectieuse sans délai.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 45. OMS, Contraception d’urgence, 9 novembre 2021, sections « Mode of action » et « Copper-bearing intrauterine devices ». OMS, Guidelines for HIV post-exposure prophylaxis, 22 juillet 2024, présentation des recommandations."
        },
        {
          "type": "qcm",
          "text": "Quel dispositif peut servir de contraception d’urgence, chez une cliente éligible, dans les cinq jours suivant un rapport non protégé ? (1 bonne réponse)",
          "options": [
            "DIU au cuivre",
            "Préservatif utilisé après le rapport",
            "Implant posé comme unique mesure d’urgence",
            "Collier du cycle"
          ],
          "answer": "DIU au cuivre",
          "correct": "DIU au cuivre",
          "explanation": "Le DIU au cuivre est une méthode de contraception d’urgence.",
          "source": "OMS, Contraception d’urgence, 9 novembre 2021, sections « Mode of action » et « Copper-bearing intrauterine devices »."
        },
        {
          "type": "qcm",
          "text": "Quelles sont deux présentations de contraceptifs progestatifs citées dans le cours ? (2 bonnes réponses)",
          "options": [
            "Préservatif",
            "Méthode de Billings",
            "Pilule progestative",
            "Implant sous-cutané"
          ],
          "answers": [
            "Pilule progestative",
            "Implant sous-cutané"
          ],
          "correct": [
            "Pilule progestative",
            "Implant sous-cutané"
          ],
          "explanation": "Les progestatifs existent notamment en pilules, injectables et implants.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 68."
        },
        {
          "type": "qcm",
          "text": "Quelle voie correspond au Sayana Press étudié dans le cours ? (1 bonne réponse)",
          "options": [
            "Sous-cutanée",
            "Intravaginale",
            "Intra-utérine",
            "Orale"
          ],
          "answer": "Sous-cutanée",
          "correct": "Sous-cutanée",
          "explanation": "Le dispositif contient du DMPA destiné à l’injection sous-cutanée.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 69."
        },
        {
          "type": "qcm",
          "text": "Une cliente sous implant présente de légers saignements irréguliers sans signe de gravité. Quelle démarche est adaptée ? (1 bonne réponse)",
          "options": [
            "Lui retirer l’implant contre sa volonté",
            "Conseiller de se l’enlever elle-même",
            "Évaluer le symptôme, informer et discuter des options selon ses souhaits",
            "Affirmer qu’elle est toujours enceinte"
          ],
          "answer": "Évaluer le symptôme, informer et discuter des options selon ses souhaits",
          "correct": "Évaluer le symptôme, informer et discuter des options selon ses souhaits",
          "explanation": "Il faut rechercher une cause si nécessaire et prendre en compte la satisfaction et les préférences.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 81. CDC, U.S. Selected Practice Recommendations 2024, Implants, section « Bleeding irregularities »."
        },
        {
          "type": "qcm",
          "text": "Une cliente a une migraine avec aura. Quelle classification OMS s’applique à une contraception hormonale combinée ? (1 bonne réponse)",
          "options": [
            "Catégorie 2",
            "Catégorie 4",
            "Catégorie 1",
            "Catégorie 3"
          ],
          "answer": "Catégorie 4",
          "correct": "Catégorie 4",
          "explanation": "La migraine avec aura constitue un risque inacceptable pour les méthodes combinées.",
          "source": "OMS, Medical eligibility criteria for contraceptive use, 6e édition, 2025, tableau récapitulatif « Headaches — migraine with aura ». Vérification concordante : CDC, U.S. MEC 2024, Appendix D, « Headaches »."
        },
        {
          "type": "qcm",
          "text": "Quels sont deux types de DIU décrits dans le cours ? (2 bonnes réponses)",
          "options": [
            "DIU antibiotique oral",
            "DIU au cuivre",
            "DIU au lévonorgestrel",
            "DIU à insuline"
          ],
          "answers": [
            "DIU au cuivre",
            "DIU au lévonorgestrel"
          ],
          "correct": [
            "DIU au cuivre",
            "DIU au lévonorgestrel"
          ],
          "explanation": "Le cours distingue les DIU au cuivre et les dispositifs hormonaux.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 86."
        },
        {
          "type": "qcm",
          "text": "Quels sont deux effets possibles du DIU au cuivre ? (2 bonnes réponses)",
          "options": [
            "Crampes pelviennes",
            "Protection contre toutes les infections génitales",
            "Augmentation des saignements menstruels",
            "Disparition obligatoire des règles"
          ],
          "answers": [
            "Crampes pelviennes",
            "Augmentation des saignements menstruels"
          ],
          "correct": [
            "Crampes pelviennes",
            "Augmentation des saignements menstruels"
          ],
          "explanation": "Les saignements et les crampes peuvent augmenter, surtout au début.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 87–89."
        },
        {
          "type": "qcm",
          "text": "Une femme présente une septicémie puerpérale. Quelle conduite concernant la pose d’un DIU est adaptée ? (1 bonne réponse)",
          "options": [
            "Ne pas poser le DIU et traiter l’infection",
            "Ignorer la fièvre",
            "Poser le DIU immédiatement",
            "Poser deux DIU"
          ],
          "answer": "Ne pas poser le DIU et traiter l’infection",
          "correct": "Ne pas poser le DIU et traiter l’infection",
          "explanation": "L’infection puerpérale contre-indique la pose.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 88 et 102."
        },
        {
          "type": "qcm",
          "text": "Quand réalise-t-on une pose postplacentaire de DIU ? (1 bonne réponse)",
          "options": [
            "Uniquement un an après la délivrance",
            "Dans les dix minutes après l’expulsion du placenta",
            "Trois mois avant l’accouchement",
            "Avant la naissance de l’enfant"
          ],
          "answer": "Dans les dix minutes après l’expulsion du placenta",
          "correct": "Dans les dix minutes après l’expulsion du placenta",
          "explanation": "Le cours définit cette insertion par le délai de dix minutes après la délivrance.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 101–102."
        },
        {
          "type": "qcm",
          "text": "Quelle intervention est une contraception chirurgicale masculine ? (1 bonne réponse)",
          "options": [
            "Hystérectomie",
            "Ligature tubaire",
            "Circoncision comme méthode contraceptive",
            "Vasectomie"
          ],
          "answer": "Vasectomie",
          "correct": "Vasectomie",
          "explanation": "La vasectomie concerne les canaux déférents.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 121."
        },
        {
          "type": "qcm",
          "text": "Quelles sont deux informations essentielles avant une stérilisation ? (2 bonnes réponses)",
          "options": [
            "Caractère permanent de la méthode",
            "Protection contre toutes les IST",
            "Existence d’autres méthodes contraceptives",
            "Garantie absolue d’absence de complication"
          ],
          "answers": [
            "Caractère permanent de la méthode",
            "Existence d’autres méthodes contraceptives"
          ],
          "correct": [
            "Caractère permanent de la méthode",
            "Existence d’autres méthodes contraceptives"
          ],
          "explanation": "Ces informations sont nécessaires au consentement éclairé.",
          "source": "INFAS, SR PF L2, 2021–2022, p. 122."
        }
      ]
    }
  ]
};
    const STORAGE_SUBJECTS = "NEUROCHIRURGIE_L3_subjects_v1";
    const STORAGE_RESULTS = "NEUROCHIRURGIE_L3_results_v1";
    const STORAGE_ATTEMPTS = "NEUROCHIRURGIE_L3_attempts_v1";

    let subjects = [];
        let currentSubject = null;
    let currentStudent = null;
    let quizStartTime = null;
    let timerInterval = null;
    let currentQuestionIndex = 0;
    let savedQuestionAnswers = {};
    const QUESTION_DURATION_SECONDS = 30;
    const QUIZ_SETTINGS_KEY = "STOMATOLOGIE_quiz_settings_v2";
    const DEFAULT_QUIZ_SETTINGS = {
      questionCount: 60,
      displayMode: "one",
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
        saved.displayMode = "one";
        saved.antiCheatEnabled = true;
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
      node.textContent = getStudentProfile().nomComplet;
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
            <h2>${escapeHTML(profile.nomComplet)}</h2>
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
            <select id="settingsDisplayMode" disabled>
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
              <input id="settingsAntiCheatEnabled" type="checkbox" disabled ${quizSettings.antiCheatEnabled !== false ? "checked" : ""}>
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
        displayMode: "one",
        questionType: type,
        cameraEnabled: false,
        antiCheatEnabled: true
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
            <div><strong>Nom et Prénoms :</strong> ${escapeHTML(`${result.student.nom || ""} ${result.student.prenom || ""}`.trim())}</div>
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
                  <td>${escapeHTML(`${r.student?.nom || ""} ${r.student?.prenom || ""}`.trim())}</td>
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
