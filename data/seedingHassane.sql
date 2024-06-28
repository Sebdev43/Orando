INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
    'Abbatiale de Guîtres, promenade en Pays Gabay',
    'Point de départ du parcours, l''Abbatiale de Guîtres (XIe et XVe siècles) est un monument imposant situé sur les chemins de Saint Jacques de Compostelle. Nous poursuivrons notre promenade à travers la douceur du Pays Gabay (prononcer gabaye) à la rencontre de trois rivières, l''Isle, la Dronne et le Lary.',
    ARRAY['/photo/Abbatiale1.jpg','/photo/Abbatiale2.jpg','/photo/Abbatiale3.jpg'],
    'Facile',
    235,
    12.95,
    'Gironde',
    'Description de la randonnée
Se garer sur le parking de l''abbatiale.

(D) Prendre le petit escalier qui descend sur le port (côté route). Prendre en face la rue du Lary jusqu''au chemin des graves.

(1) Emprunter à droite ce chemin qui, sans changer de direction deviendra plus loin le chemin des carrelets. Suivre ce chemin jusqu''au bout.

(2) Confluence de l''Isle et de la Dronne.

(3) Au bout du chemin, prendre la route sur la droite puis, tourner à gauche pour monter aux Jourdennes.

(4) Prendre à droite puis la première à droite pour rejoindre le panorama des Jourdennes(5), qui domine la ville de Coutras. Quittez le panorama et prendre la rue à droite jusqu''à une patte d''oie.

(6) Prendre alors à gauche par le chemin de Cure Bourse.

(7) Au lieu-dit Les Ouillers, prendre le chemin à droite. A la sortie du bois, prendre à gauche puis aussitôt à droite.

(8) A la première intersection, prendre à gauche (épingle à cheveux), passer le pont sur le Lary et prendre à droite vers Chabreville.
Monter la côte et continuez sur la route.

(9) Avant le stop, prendre sur la gauche par Petit Rétiveau.

(10) Au bout du chemin, prendre à droite pour revenir sur Guîtres par le Chemin des Moulins (A).

Points de passages
D/A : km 0 - alt. 26 m - Parking de l''Abbatiale de Guîtres - Isle (rivière) - Affluent de la Dordogne
1 : km 0.43 - alt. 8 m - A droite au chemin des graves. - Lary (rivière) - Affluent de l''Isle
2 : km 3.38 - alt. 10 m - Confluence Isle et Dronne (rivière) - Affluent de l''Isle
3 : km 3.95 - alt. 21 m - Prendre la route sur la droite et tourner à gauche
4 : km 4.61 - alt. 58 m - Prendre à droite puis la première à droite
5 : km 4.97 - alt. 57 m - Panorama des Jourdennes
6 : km 5.44 - alt. 65 m - Prendre à gauche par le chemin de Cure Bourse
7 : km 6.01 - alt. 50 m - Lieu-dit Les Ouillers, prendre le chemin à droite
8 : km 7.76 - alt. 16 m - A la première intersection, prendre à gauche
9 : km 9.5 - alt. 34 m - Avant le stop, prendre sur la gauche
10 : km 10.28 - alt. 19 m - Au bout du chemin, prendre à droite
D/A : km 12.95 - alt. 26 m - Parking de l''Abbatiale de Guîtres
Informations pratiques
Pas d''équipement particulier.',
    ST_GeomFromText(
        'LINESTRING(-0.187961 45.03991, -0.187838 45.039937, -0.187661 45.039569, -0.18757 45.039599, -0.187532 45.039562, -0.187489 45.039565, -0.187634 45.039527, -0.187489 45.039543, -0.187618 45.039501, -0.187521 45.039508, -0.187645 45.039467, -0.187591 45.039391, -0.187532 45.039361, -0.18742 45.039357, -0.187221 45.039429, -0.186942 45.039455, -0.186652 45.039516, -0.186449 45.039527, -0.185859 45.039433, -0.185875 45.039433, -0.18507 45.039349, -0.184249 45.039285, -0.18411 45.039497, -0.183471 45.0393, -0.1825 45.039001, -0.181739 45.0388, -0.181165 45.038682, -0.178236 45.03828, -0.176862 45.038023, -0.175596 45.037643, -0.173536 45.037249, -0.171562 45.036901, -0.169545 45.036582, -0.16697 45.036067, -0.165855 45.035763, -0.163881 45.03549, -0.162378 45.035263, -0.16122 45.035172, -0.160576 45.035172, -0.159589 45.035081, -0.158323 45.034975, -0.156735 45.034823, -0.155941 45.034838, -0.155662 45.034823, -0.153752 45.035596, -0.152186 45.036233, -0.150963 45.036901, -0.150191 45.03734, -0.149225 45.037598, -0.148796 45.037856, -0.148495 45.038326, -0.14798 45.039463, -0.147551 45.040433, -0.147358 45.040888, -0.14738 45.041313, -0.147337 45.041737, -0.147251 45.042222, -0.146929 45.042723, -0.146586 45.043193, -0.146307 45.043526, -0.14577 45.04383, -0.145277 45.044087, -0.14547 45.044254, -0.146156 45.044375, -0.147015 45.044527, -0.147852 45.044845, -0.148216 45.045058, -0.148345 45.045603, -0.149912 45.046119, -0.14901 45.04712, -0.148581 45.047711, -0.147487 45.047286, -0.147315 45.047226, -0.147444 45.046907, -0.147208 45.04715, -0.147401 45.047301, -0.147937 45.047483, -0.148538 45.04768, -0.148066 45.048484, -0.147787 45.049075, -0.147637 45.04953, -0.147465 45.05047, -0.149225 45.049848, -0.150577 45.049409, -0.151585 45.049196, -0.152422 45.048924, -0.153109 45.048681, -0.153474 45.048347, -0.153774 45.048135, -0.154503 45.048696, -0.15489 45.048817, -0.155297 45.048908, -0.156048 45.049848, -0.156757 45.050546, -0.157143 45.051076, -0.157593 45.051667, -0.157679 45.052016, -0.158023 45.052471, -0.158323 45.052607, -0.15843 45.052789, -0.158623 45.053092, -0.158795 45.053244, -0.158945 45.053411, -0.158967 45.053775, -0.159696 45.05385, -0.159889 45.053926, -0.159846 45.054169, -0.159353 45.055063, -0.158859 45.056018, -0.158473 45.056639, -0.15755 45.057428, -0.156971 45.057867, -0.156456 45.058337, -0.15592 45.05911, -0.155297 45.059883, -0.154954 45.060368, -0.154782 45.060959, -0.155469 45.060474, -0.15577 45.060171, -0.156199 45.060126, -0.157036 45.060232, -0.157615 45.060353, -0.15858 45.060429, -0.15916 45.060474, -0.15916 45.060671, -0.15901 45.061065, -0.158795 45.061793, -0.158366 45.062581, -0.158302 45.063051, -0.158473 45.063248, -0.159138 45.063354, -0.159653 45.063551, -0.159954 45.063551, -0.16049 45.062808, -0.160834 45.062339, -0.161005 45.062096, -0.161348 45.061929, -0.162357 45.062111, -0.163108 45.062323, -0.163988 45.062551, -0.164996 45.062717, -0.16564 45.062854, -0.166477 45.062566, -0.16697 45.062263, -0.167893 45.062035, -0.168666 45.061884, -0.169073 45.061793, -0.169567 45.061656, -0.169631 45.061611, -0.169545 45.061247, -0.169116 45.061035, -0.168344 45.060247, -0.168065 45.05961, -0.167893 45.059065, -0.167893 45.058686, -0.167893 45.058322, -0.167721 45.058004, -0.1674 45.057731, -0.167164 45.057276, -0.16697 45.056761, -0.166649 45.056185, -0.166434 45.055988, -0.166155 45.056018, -0.165898 45.056048, -0.165576 45.055988, -0.165404 45.055927, -0.166691 45.054305, -0.167271 45.053729, -0.167421 45.053471, -0.16785 45.053183, -0.168537 45.052804, -0.169138 45.052547, -0.16976 45.052228, -0.170296 45.051986, -0.170811 45.051667, -0.17124 45.051364, -0.171455 45.051076, -0.171713 45.050712, -0.172228 45.050152, -0.172421 45.049924, -0.173086 45.04956, -0.174545 45.048848, -0.175553 45.048302, -0.176948 45.047468, -0.177742 45.047029, -0.178579 45.046543, -0.179137 45.046043, -0.179416 45.04577, -0.180103 45.04527, -0.180703 45.044679, -0.181261 45.044133, -0.18154 45.043921, -0.181626 45.043739, -0.182141 45.043329, -0.182248 45.043041, -0.182184 45.042859, -0.182935 45.042602, -0.183235 45.042329, -0.183943 45.042071, -0.184394 45.041722, -0.184652 45.041586, -0.184823 45.041586, -0.185209 45.041692, -0.185703 45.041207, -0.186218 45.040661, -0.186433 45.040251, -0.186647 45.040024, -0.186926 45.039797, -0.187098 45.03969, -0.187441 45.039599, -0.18772 45.039675, -0.187827 45.039979, -0.187935 45.039903)',
        4326
    )
);

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'Autour de la Cité de Sainte-Suzanne',
        'Venez découvrir les charmants petits sentiers situés au nord de Sainte-Suzanne. Le long de votre balade, vous pourrez visiter le camp des anglais (ou camp de Beugy), et aurez un beau point de vue sur le bocage Mayennais.',
        ARRAY['/photo/Lacite1.jpg','/photo/Lacite2.jpg','/photo/Lacite3.jpg'],
        'Facile',
        130,
        6.86,
        'Mayenne',
        'Description de la randonnée
Se garer sur le parking de l''abbatiale.

(D) Prendre le petit escalier qui descend sur le port (coté route). Prendre en face la rue du Lary jusqu''au chemin des graves.

(1) Emprunter à droite ce chemin qui, sans changer de direction deviendra plus loin le chemin des carrelets. Suivre ce chemin jusqu''au bout.

(2) Confluence de l''Isle et de la Dronne.

(3) Au bout du chemin, prendre la route sur la droite puis, tourner à gauche pour monter aux Jourdennes.

(4) Prendre à droite puis la première à droite pour rejoindre le panorama des Jourdennes(5), qui domine la ville de Coutras. Quittez le panorama et prendre la rue à droite jusqu''à une patte d''oie.

(6) Prendre alors à gauche par le chemin de Cure Bourse.

(7) Au lieu-dit "Les Ouillers", prendre le chemin à droite. A la sortie du bois, prendre à gauche puis aussitôt à droite.

(8) A la première intersection, prendre à gauche (épingle à cheveux), passer le pont sur le Lary et prendre à droite vers Chabreville.
Monter la côte et continuez sur la route.

(9) Avant le stop, prendre sur la gauche par Petit Rétiveau.

(10) Au bout du chemin, prendre à droite pour revenir sur Guîtres par le Chemin des Moulins (A).

Points de passages
D/A : km 0 - alt. 26 m - Parking de l''Abbatiale de Guîtres - Isle (rivière) - Affluent de la Dordogne
1 : km 0.43 - alt. 8 m - A droite au chemin des graves. - Lary (rivière) - Affluent de l''Isle
2 : km 3.38 - alt. 10 m - Confluence Isle et - Dronne (rivière) - Affluent de l''Isle
3 : km 3.95 - alt. 21 m - Prendre la route sur la droite et tourner à gauche
4 : km 4.61 - alt. 58 m - Prendre à droite puis la première à droite
5 : km 4.97 - alt. 57 m - Panorama des Jourdennes
6 : km 5.44 - alt. 65 m - Prendre à gauche par le chemin de Cure Bourse
7 : km 6.01 - alt. 50 m - Lieu-dit "Les Ouillers" prendre le chemin à droite
8 : km 7.76 - alt. 16 m - A la première intersection, prendre à gauche
9 : km 9.5 - alt. 34 m - Avant le stop, prendre sur la gauche
10 : km 10.28 - alt. 19 m - Au bout du chemin, prendre à droite
D/A : km 12.95 - alt. 26 m - Parking de l''Abbatiale de Guîtres
Informations pratiques
Pas d''équipement particulier.',
        ST_GeomFromText(
            'LINESTRING(-0.350932 48.097627, -0.350283 48.097466, -0.349934 48.097376, -0.349731 48.097322, -0.349554 48.097337, -0.349586 48.097122, -0.349816 48.09696, -0.350036 48.096724, -0.350345 48.096671, -0.350519 48.096513, -0.351351 48.096591, -0.351436 48.096523, -0.351387 48.096366, -0.351442 48.096194, -0.351544 48.096136, -0.351528 48.095595, -0.351979 48.095453, -0.352342 48.095332, -0.352584 48.095187, -0.352783 48.094972, -0.352971 48.094746, -0.353244 48.094485, -0.353582 48.094184, -0.353979 48.094338, -0.354392 48.094417, -0.354462 48.094542, -0.354478 48.094642, -0.354794 48.094691, -0.358491 48.095875, -0.359075 48.095624, -0.359735 48.095327, -0.360529 48.094908, -0.361339 48.094485, -0.361886 48.093972, -0.362257 48.093643, -0.362559 48.093556, -0.362916 48.093646, -0.363163 48.093847, -0.363356 48.09399, -0.363587 48.094152, -0.363839 48.094395, -0.363966 48.094795, -0.36429 48.095062, -0.364949 48.095323, -0.365454 48.095527, -0.365824 48.095803, -0.366006 48.09604, -0.366355 48.096298, -0.366966 48.096735, -0.367417 48.096986, -0.367755 48.097222, -0.36805 48.097276, -0.368549 48.097423, -0.368973 48.097634, -0.369102 48.097956, -0.369139 48.098325, -0.368989 48.098702, -0.368898 48.098988, -0.369203 48.09925, -0.36952 48.099443, -0.369316 48.099898, -0.36915 48.100385, -0.369158 48.100771, -0.369048 48.100887, -0.368899 48.100946, -0.368747 48.101055, -0.36884 48.101105, -0.369182 48.101149, -0.369091 48.101535, -0.369199 48.101569, -0.369579 48.101664, -0.369853 48.101668, -0.369783 48.102116, -0.369713 48.102381, -0.369692 48.102535, -0.369756 48.102628, -0.369879 48.1027, -0.370035 48.102725, -0.370142 48.102786, -0.370191 48.102895, -0.369724 48.103792, -0.368495 48.103187, -0.368275 48.103416, -0.36812 48.103681, -0.367878 48.103803, -0.367765 48.104368, -0.367632 48.104935, -0.366854 48.10506, -0.366511 48.105243, -0.365878 48.105734, -0.365674 48.105856, -0.365148 48.10606, -0.364472 48.106271, -0.364013 48.106513, -0.363201 48.106734, -0.362777 48.106891, -0.362326 48.107199, -0.362004 48.107539, -0.36164 48.107726, -0.361265 48.107959, -0.362122 48.108879, -0.361613 48.109044, -0.361098 48.109101, -0.360497 48.109115, -0.359912 48.109033, -0.359177 48.108872, -0.358292 48.108728, -0.357788 48.108671, -0.357359 48.108596, -0.356651 48.108442, -0.356286 48.108521, -0.355621 48.108177, -0.355326 48.107965, -0.355208 48.107822, -0.353598 48.107532, -0.350954 48.106909, -0.349301 48.106533, -0.347848 48.106117, -0.347719 48.106157, -0.347124 48.106178, -0.3467 48.106128, -0.345825 48.106143, -0.344581 48.106189, -0.344688 48.105705, -0.344811 48.105293, -0.344946 48.1051, -0.345053 48.104914, -0.345219 48.104745, -0.345402 48.104563, -0.345654 48.104057, -0.345729 48.103746, -0.345809 48.103545, -0.346169 48.103649, -0.346678 48.103721, -0.347022 48.103832, -0.347258 48.104, -0.34781 48.103814, -0.348159 48.103602, -0.348342 48.103476, -0.348514 48.103236, -0.348734 48.102928, -0.348858 48.102734, -0.34899 48.102395, -0.348942 48.102281, -0.349323 48.102202, -0.349795 48.10213, -0.350111 48.102023, -0.351155 48.102006, -0.351973 48.101761, -0.352306 48.101672, -0.352331 48.101372, -0.352263 48.101045, -0.35222 48.100776, -0.352112 48.100618, -0.351903 48.100497, -0.351694 48.100421, -0.351404 48.100342, -0.351141 48.100292, -0.35089 48.1001, -0.350767 48.100002, -0.350498 48.099673, -0.350256 48.099468, -0.350396 48.099321, -0.350534 48.099051, -0.350594 48.098652, -0.350707 48.098068, -0.350954 48.097627)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'Boucle antique de Paussac Saint-Juste',
        'Quelques points intéressants dans le village : vous passerez devant la Tour Pigeonnier, la Pierre à Sacrifice ou Peyre d’Ermale ou Dermale. Plus loin, site d’escalade et village troglodytique des XIIe-XIIIe siècles. Ne pas rater le dolmen de Peyrelevade, époque néolithique, inscrit au titre des Monuments Historiques depuis 1960, et les sculptures visibles du portail d''une carrière.',
        ARRAY['/photo/Paussac1.jpg','/photo/Paussac2.jpg','/photo/Paussac3.jpg'],
        'Facile',
        195,
        10.29,
        'Dordogne',
        'Description de la randonnée
Se garer sur le parking de l''abbatiale.

(D) Prendre le petit escalier qui descend sur le port (coté route). Prendre en face la rue du Lary jusqu''au chemin des graves.

(1) Emprunter à droite ce chemin qui, sans changer de direction deviendra plus loin le chemin des carrelets. Suivre ce chemin jusqu''au bout.

(2) Confluence de l''Isle et de la Dronne.

(3) Au bout du chemin, prendre la route sur la droite puis, tourner à gauche pour monter aux Jourdennes.

(4) Prendre à droite puis la première à droite pour rejoindre le panorama des Jourdennes(5), qui domine la ville de Coutras. Quittez le panorama et prendre la rue à droite jusqu''à une patte d''oie.

(6) Prendre alors à gauche par le chemin de Cure Bourse.

(7) Au lieu-dit "Les Ouillers", prendre le chemin à droite. A la sortie du bois, prendre à gauche puis aussitôt à droite.

(8) A la première intersection, prendre à gauche (épingle à cheveux), passer le pont sur le Lary et prendre à droite vers Chabreville.
Monter la côte et continuez sur la route.

(9) Avant le stop, prendre sur la gauche par Petit Rétiveau.

(10) Au bout du chemin, prendre à droite pour revenir sur Guîtres par le Chemin des Moulins (A).

Points de passages
D/A : km 0 - alt. 26 m - Parking de l''Abbatiale de Guîtres - Isle (rivière) - Affluent de la Dordogne
1 : km 0.43 - alt. 8 m - A droite au chemin des graves. - Lary (rivière) - Affluent de l''''''Isle
2 : km 3.38 - alt. 10 m - Confluence Isle et - Dronne (rivière) - Affluent de l''Isle
3 : km 3.95 - alt. 21 m - Prendre la route sur la droite et tourner à gauche
4 : km 4.61 - alt. 58 m - Prendre à droite puis la première à droite
5 : km 4.97 - alt. 57 m - Panorama des Jourdennes
6 : km 5.44 - alt. 65 m - Prendre à gauche par le chemin de Cure Bourse
7 : km 6.01 - alt. 50 m - Lieu-dit "Les Ouillers" prendre le chemin à droite
8 : km 7.76 - alt. 16 m - A la première intersection, prendre à gauche
9 : km 9.5 - alt. 34 m - Avant le stop, prendre sur la gauche
10 : km 10.28 - alt. 19 m - Au bout du chemin, prendre à droite
D/A : km 12.95 - alt. 26 m - Parking de l''Abbatiale de Guîtres
Informations pratiques
Pas d''équipement particulier.',
        ST_GeomFromText(
            'LINESTRING(0.539294 45.348242, 0.539562 45.348061, 0.539396 45.347826, 0.539248 45.347648, 0.538983 45.347319, 0.538835 45.347138, 0.538749 45.347043, 0.538618 45.347026, 0.538486 45.346953, 0.538438 45.346862, 0.538242 45.346751, 0.538049 45.346615, 0.537937 45.346478, 0.537843 45.346368, 0.537631 45.346289, 0.537384 45.34621, 0.537081 45.346121, 0.536746 45.346016, 0.536126 45.345878, 0.535997 45.345841, 0.535764 45.345835, 0.535557 45.345848, 0.535147 45.34579, 0.534836 45.345743, 0.53464 45.345686, 0.534444 45.345612, 0.534265 45.345562, 0.534098 45.345535, 0.533809 45.345513, 0.533495 45.345479, 0.533318 45.345467, 0.533203 45.345464, 0.533007 45.345475, 0.532894 45.345465, 0.532749 45.345445, 0.532583 45.345411, 0.532366 45.345343, 0.532127 45.345281, 0.531961 45.345226, 0.531754 45.345175, 0.531604 45.345094, 0.53136 45.34493, 0.53114 45.344787, 0.530837 45.344596, 0.530692 45.344502, 0.530362 45.344261, 0.530115 45.344086, 0.529909 45.344003, 0.529678 45.343929, 0.529348 45.343859, 0.528486 45.343686, 0.528389 45.343486, 0.528228 45.34326, 0.528159 45.343166, 0.528062 45.34309, 0.527719 45.343105, 0.527451 45.343037, 0.527059 45.342951, 0.526356 45.343252, 0.525889 45.343399, 0.525546 45.343448, 0.525476 45.34349, 0.525063 45.343494, 0.524747 45.343614, 0.5245 45.343633, 0.52413 45.343505, 0.523862 45.343501, 0.523636 45.343531, 0.52354 45.343607, 0.522971 45.343825, 0.522564 45.344014, 0.522161 45.344361, 0.521791 45.344783, 0.521324 45.345341, 0.521075 45.34562, 0.520882 45.34599, 0.520882 45.346713, 0.52071 45.347377, 0.520839 45.347973, 0.521214 45.348448, 0.521418 45.348862, 0.521418 45.349209, 0.521536 45.349443, 0.521858 45.349624, 0.522169 45.34988, 0.521708 45.349812, 0.521204 45.349745, 0.520828 45.349571, 0.520281 45.349179, 0.51982 45.348893, 0.51938 45.348749, 0.519036 45.348764, 0.518425 45.349058, 0.51776 45.349307, 0.517352 45.349533, 0.516762 45.350076, 0.516494 45.350182, 0.515893 45.350235, 0.51502 45.350308, 0.515208 45.349958, 0.515675 45.349535, 0.515846 45.349294, 0.515857 45.349102, 0.516109 45.348789, 0.516173 45.348536, 0.516415 45.348408, 0.516173 45.348529, 0.516109 45.348793, 0.515852 45.349109, 0.515841 45.349294, 0.515669 45.349543, 0.515208 45.349958, 0.514999 45.350304, 0.514693 45.350433, 0.514509 45.350687, 0.514005 45.351358, 0.51364 45.351916, 0.513254 45.352225, 0.512771 45.352429, 0.512052 45.352504, 0.511961 45.351841, 0.511929 45.351622, 0.511993 45.351366, 0.511982 45.350966, 0.51195 45.350679, 0.511811 45.350197, 0.511735 45.349873, 0.511532 45.349647, 0.511317 45.349473, 0.511253 45.349247, 0.511392 45.348862, 0.511912 45.348116, 0.512385 45.347362, 0.512792 45.346744, 0.512964 45.346351, 0.512621 45.345824, 0.512363 45.345371, 0.512106 45.344904, 0.511762 45.344617, 0.511505 45.3443, 0.51232 45.343908, 0.513415 45.34332, 0.514144 45.342611, 0.515045 45.34096, 0.513822 45.340221, 0.513007 45.339723, 0.512449 45.339331, 0.511634 45.339135, 0.511183 45.338984, 0.50996 45.338818, 0.50893 45.338486, 0.50923 45.337461, 0.509552 45.336254, 0.509767 45.335877, 0.510925 45.335273, 0.512406 45.334896, 0.513672 45.33458, 0.514788 45.334112, 0.51541 45.333659, 0.516655 45.333418, 0.517749 45.333358, 0.518994 45.333177, 0.519423 45.333101, 0.520045 45.333237, 0.52056 45.333403, 0.520946 45.333358, 0.521847 45.333011, 0.522341 45.33289, 0.52277 45.332769, 0.523693 45.332769, 0.524358 45.332845, 0.524809 45.332739, 0.525302 45.332453, 0.525753 45.332272, 0.526353 45.332196, 0.526675 45.332121, 0.526847 45.331925, 0.526868 45.331698, 0.528027 45.33114, 0.528971 45.33099, 0.529765 45.330869, 0.530624 45.330582, 0.531546 45.330341, 0.533113 45.331306, 0.534228 45.332242, 0.534958 45.332996, 0.535065 45.33378, 0.535344 45.334489, 0.535559 45.334987, 0.535559 45.33547, 0.535752 45.336043, 0.535859 45.33639, 0.536117 45.33737, 0.536288 45.338019, 0.536203 45.338893, 0.536245 45.339708, 0.536267 45.340296, 0.536954 45.341292, 0.537361 45.342121, 0.537662 45.342574, 0.537946 45.342883, 0.538161 45.343539, 0.538279 45.343916, 0.538268 45.344142, 0.537978 45.344821, 0.537957 45.345145, 0.53801 45.345824, 0.537946 45.346329, 0.537997 45.346506, 0.538142 45.346646, 0.538431 45.346804, 0.53871 45.346977, 0.538893 45.347105, 0.539145 45.34743, 0.539467 45.347837, 0.539655 45.348086, 0.539365 45.34827)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'Boucle des Sept Fontaines à Montmin',
        'Cette boucle parcourt le vallon suspendu de Montmin et vous fera découvrir le monument des Sept Fontaines (1642) un édifice chrétien bien particulier par sa conception.',
       ARRAY['/photo/Fontaines1.jpg','/photo/Fontaines2.jpg','/photo/Fontaines3.jpg'],
        ' Facile',
        165,
        7.09,
        'Haute-Savoie',
        'Description de la randonnée
Pour aller à Montmin depuis Annecy, il vous faudra franchir le Col de la Forclaz (point de vue sur le Lac d''Annecy). Sur la route du col, un autre point vue remarquable sur la Baie de Talloires au hameau de Saint-Germain.

Départ au parking de l’église de Montmin.

(D/A) Le circuit débute 100 m en contrebas de l''église. Suivre le panneau indiquant Plan Montmin par le chemin rural qui va au Sud, passe à la Grange de la Revenne (orthographié Revenaz localement) et conduit directement à la fontaine

(1). Suivre ensuite la route goudronnée jusqu’à Plan Montmin que l''on traverse.

(2) Peu avant la chapelle de Plan Montmin, prendre sur la droite la direction de la Perrière par le chemin rural du Plan Montmin aux Outellières. Traverser deux fois un ruisseau pour arriver à la Perrière.

(3) À la Perrière, remonter la route (D42 )sur une dizaine de mètres et prendre à gauche la direction de la Côte (Col de la Forclaz) par le chemin rural du Moulin à La Perrière. Laisser un chemin à droite puis à gauche et, une fois à la route, virer à droite pour rejoindre le hameau de la Côte.

(4) Traverser le hameau puis suivre la départementale en direction de Montmin sur 300m.
Au niveau du cimetière, prendre à gauche pour rejoindre le point de départ (D/A)

Points de passages
D/A : km 0 - alt. 1 056 m - Parking de l’église de Montmin
1 : km 1.71 - alt. 1 040 m - Les Sept Fontaines.
2 : km 2.69 - alt. 974 m - A droite direction La Perrière
3 : km 4.46 - alt. 979 m - Chemin à gauche à la sortie de La Perrière.
4 : km 5.96 - alt. 1 023 m - Hameau de La Côte
D/A : km 7.08 - alt. 1 057 m - Parking de l’église de Montmin
Informations pratiques',
        ST_GeomFromText(
            'LINESTRING(6.264714 45.803362, 6.264521 45.802494, 6.265029 45.802176, 6.264693 45.801574, 6.264729 45.800935, 6.265072 45.800591, 6.265609 45.800052, 6.265931 45.799603, 6.265995 45.799334, 6.266274 45.799229, 6.266639 45.799454, 6.267561 45.799633, 6.26813 45.799562, 6.268044 45.799143, 6.267508 45.798665, 6.267497 45.798347, 6.267765 45.797991, 6.267915 45.797393, 6.26798 45.796869, 6.268151 45.796585, 6.269063 45.796357, 6.26858 45.795987, 6.268237 45.795628, 6.268344 45.795224, 6.268151 45.794835, 6.267937 45.794386, 6.268559 45.793772, 6.268033 45.793735, 6.26754 45.793574, 6.267518 45.793301, 6.267626 45.793062, 6.267347 45.792718, 6.267111 45.792389, 6.26686 45.792127, 6.26651 45.79185, 6.266038 45.791596, 6.26563 45.790563, 6.265437 45.789965, 6.265244 45.788618, 6.265158 45.788139, 6.265115 45.787735, 6.265265 45.787167, 6.26548 45.786538, 6.265587 45.786164, 6.265802 45.78567, 6.266102 45.785027, 6.265995 45.784608, 6.265823 45.784204, 6.265377 45.783858, 6.265136 45.784219, 6.265094 45.784608, 6.264765 45.785029, 6.264514 45.785446, 6.263978 45.786134, 6.263613 45.786763, 6.263098 45.787436, 6.262755 45.788109, 6.262347 45.788902, 6.262347 45.78971, 6.262626 45.790563, 6.262669 45.791072, 6.262583 45.791521, 6.262841 45.792179, 6.263119 45.792703, 6.263119 45.793137, 6.262819 45.793556, 6.262755 45.793843, 6.262626 45.794244, 6.262755 45.794603, 6.262583 45.795141, 6.262798 45.79571, 6.262883 45.796219, 6.263119 45.796623, 6.263849 45.796862, 6.263656 45.797266, 6.26336 45.7972, 6.263205 45.797703, 6.26278 45.798045, 6.263227 45.798137, 6.262819 45.798642, 6.26209 45.799154, 6.26106 45.79942, 6.260781 45.799794, 6.260695 45.800572, 6.260609 45.801066, 6.259665 45.801305, 6.259429 45.801679, 6.259064 45.801978, 6.258463 45.802561, 6.25812 45.802352, 6.257841 45.801997, 6.256618 45.802819, 6.256425 45.80313, 6.256489 45.803534, 6.25679 45.804046, 6.257262 45.804446, 6.257433 45.804988, 6.258013 45.805422, 6.25827 45.805688, 6.25827 45.806092, 6.258335 45.806395, 6.258092 45.806714, 6.259365 45.807486, 6.259987 45.807946, 6.260266 45.80856, 6.260673 45.809072, 6.261296 45.808949, 6.261317 45.80838, 6.261467 45.807902, 6.261982 45.807262, 6.262476 45.806963, 6.262948 45.806974, 6.264536 45.806574, 6.264557 45.806275, 6.264193 45.806021, 6.263999 45.805677, 6.263484 45.805452, 6.263399 45.805318, 6.263399 45.805213, 6.263999 45.805075, 6.264192 45.804626, 6.264604 45.804246, 6.264922 45.803773, 6.264701 45.803386, 6.264754 45.803393)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'Circuit autour de l''Étang de Bellebouche',
        'L''Étang de Bellebouche est l''un des plus anciens, l''un des plus grands et l''un des plus beaux plans d''eaux du Parc Naturel Régional de La Brenne. Une petite partie est réservée à des loisirs nautiques mais laisse une grande place à un site naturel que vous pourrez admirer tranquillement à l''aide de jumelles dans trois observatoires aux abords de l''étang.',
        ARRAY['/photo/Bellebouche1.jpg','/photo/Bellebouche2.jpg','/photo/Bellebouche3.jpg'],
        ' Facile',
        165,
        9.75,
        'Indre ',
        'Description de la randonnée
Le départ est au bout du parking de la base nautique situé entre un camping et un village de vacances nature, à gauche de l''entrée.

(D/A) Prendre le chemin en terre blanc le plus au Sud et suivre le balisage Rouge et Jaune du GR® de Pays de la Brenne ou le balisage Bleu. Continuer sur ce chemin, entre pairies à gauche et l''étang à droite, pendant environ 1km jusqu''au parcours de santé.

(1) Suivre la sente du parcours de santé (balisage Bleu ou Rouge et Jaune) qui serpente sous les chênes et les pins sur 1km.

(2) Après un virage à gauche, vous rejoignez le chemin quitté précédemment que vous prenez sur la droite.
Puis après 100m, tourner à droite pour rejoindre un premier observatoire en bois d''où vous pourrez admirer la faune locale. Revenir par le même trajet au chemin que vous prenez sur la droite.

(3) Arrivé à une intersection, continuer tout droit le sentier balisé Rouge et Jaune et laisser à droite le balisage Bleu. Longer les Loges du Grand Brun pour arriver sur une petite route. Prendre à droite, découvrir sur la gauche l''Étang du Grand Brun.
À l''intersection suivante, prendre la D21 sur la droite: vous êtes sur une ancienne route "agricole" rectiligne tracée à l''époque Napoléon III. Au bout de 600m, prendre à droite la direction du second observatoire sur un sentier en lisière de forêt. Au niveau d''une grande allée forestière, tourner à droite pour atteindre le bâtiment en bois. Revenir ensuite sur vos pas et prendre l''allée forestière en face qui ramène sur la D21.

(4) Prendre la route par la droite sur environ 400m.

(5) Tourner à droite dans une large allée forestière et parcourir environ 200m.

(6) Continuer à gauche le petit sentier qui s''enfonce dans le bois (balisage Bleu) et serpente à travers de multiples essences d''arbres et franchi deux minuscules collines (des buttons).

(7) Arrivé sur une large allée, l''emprunter à gauche: elle tourne ensuite vers le Nord-Ouest. Au bout de la ligne droite, prendre à droite pour cheminer en lisière de bois et rejoindre l’Étang de Bellebouche au niveau d''un golf miniature.

(8) Laisser en face le chemin balisé Bleu pour prendre à droite la direction du dernier observatoire et suivre les pancartes avec un dessin de jumelles. Une fois atteint le troisième observatoire, reprendre le même chemin en sens inverse.

(9) Environ 1200m après le départ de l''observatoire, prendre une sente sur la droite à travers le taillis en direction de l''étang que l''on aperçoit au loin. Une fois au bord, longer l''étang jusqu''au restaurant puis après les jeux de plein air pour les enfants, rejoindre en direction des toilettes le chemin du PR® au balisage Bleu et poursuivre à droite. Ce chemin permet de revenir au parking en longeant la chaussée de l''étang et ses bondes (D/A).

Points de passages
D/A : km 0 - alt. 109 m - Parking de la base nautique situé près du camping
1 : km 0.8 - alt. 109 m - Parcours de santé
2 : km 1.7 - alt. 112 m - Tourner à droite
3 : km 2.37 - alt. 109 m - Continuer tout droit
4 : km 4.45 - alt. 108 m - Prendre la D21 à droite
5 : km 4.83 - alt. 109 m - Tourner à droite dans la large allée forestière
6 : km 5.04 - alt. 110 m - Prendre le sentier à gauche (balisage bleu)
7 : km 5.44 - alt. 117 m - Retour sur le parcours au balisage bleu
8 : km 7.11 - alt. 110 m - Prendre la direction de l''observatoire
9 : km 7.4 - alt. 112 m - Rejoindre au retour l''étang sur la droite
D/A : km 9.75 - alt. 109 m - Parking de la base nautique situé près du camping
Informations pratiques
Prévoir des chaussures étanches pour certaines zones humides !
L''itinéraire débute au parking du site de Bellebouche.
Restauration et bar à la fin du circuit sur la base de loisir avec toilettes à l''extérieur.
Chasse possible en automne et en hiver sur la partie Ouest du parcours.
Chiens interdits de juin à septembre, autorisés en laisse le reste de l''année.',
        ST_GeomFromText(
            'LINESTRING(1.30585 46.798241, 1.305963 46.798201, 1.305947 46.798124, 1.305893 46.797977, 1.305866 46.797863, 1.305894 46.797776, 1.306027 46.797635, 1.306065 46.797576, 1.306081 46.797477, 1.30607 46.79733, 1.306081 46.797238, 1.30614 46.797154, 1.306258 46.797018, 1.306285 46.796948, 1.306301 46.796765, 1.306371 46.796577, 1.306499 46.796357, 1.306623 46.796232, 1.30673 46.796148, 1.306843 46.796081, 1.306945 46.795971, 1.306993 46.795861, 1.30695 46.795773, 1.306881 46.795721, 1.306747 46.79567, 1.306645 46.795618, 1.30658 46.795549, 1.306537 46.795394, 1.306532 46.795277, 1.306586 46.795185, 1.306757 46.795068, 1.306902 46.794965, 1.307004 46.794869, 1.307143 46.794612, 1.307202 46.794414, 1.307181 46.79412, 1.307095 46.793731, 1.306934 46.793378, 1.306891 46.793224, 1.306918 46.79311, 1.306924 46.793029, 1.306999 46.79293, 1.307429 46.792632, 1.30766 46.792456, 1.307859 46.792268, 1.308121 46.792081, 1.308272 46.792, 1.308197 46.791912, 1.308256 46.791761, 1.308454 46.791559, 1.308717 46.791343, 1.308942 46.791122, 1.309125 46.79092, 1.309173 46.790649, 1.309162 46.790432, 1.309178 46.790204, 1.309264 46.789914, 1.309527 46.789536, 1.309849 46.789176, 1.310299 46.78872, 1.310653 46.788375, 1.311029 46.788048, 1.311335 46.787729, 1.311555 46.787391, 1.311641 46.787236, 1.311689 46.786876, 1.311716 46.786704, 1.311818 46.786516, 1.312354 46.786021, 1.312654 46.785734, 1.31288 46.785565, 1.313266 46.786006, 1.313389 46.786201, 1.313502 46.786123, 1.313776 46.785863, 1.314119 46.785583, 1.313974 46.785411, 1.313786 46.785238, 1.313631 46.78508, 1.313566 46.784897, 1.313695 46.785091, 1.313867 46.78526, 1.314097 46.785466, 1.314183 46.785521, 1.314328 46.785418, 1.314934 46.784981, 1.31502 46.784904, 1.315074 46.784746, 1.315272 46.784595, 1.315691 46.784261, 1.315889 46.784085, 1.316029 46.784015, 1.316286 46.783978, 1.316806 46.783919, 1.317338 46.783853, 1.317643 46.783774, 1.317729 46.783704, 1.318013 46.783282, 1.318244 46.782977, 1.318346 46.78283, 1.318378 46.782756, 1.318394 46.782624, 1.318458 46.782514, 1.318501 46.782455, 1.318319 46.782411, 1.317782 46.782176, 1.317342 46.781981, 1.316607 46.781721, 1.316205 46.781592, 1.315846 46.781449, 1.31561 46.781313, 1.315492 46.781232, 1.315052 46.780791, 1.314569 46.780277, 1.313593 46.7793, 1.306823 46.780031, 1.307037 46.780361, 1.307107 46.78042, 1.307236 46.780475, 1.307611 46.780534, 1.307971 46.780578, 1.30826 46.780578, 1.308427 46.7806, 1.30855 46.78067, 1.3087 46.780832, 1.308818 46.781023, 1.308824 46.781133, 1.308792 46.781324, 1.308695 46.781438, 1.308593 46.781548, 1.308523 46.781614, 1.308475 46.781665, 1.308352 46.781743, 1.308303 46.781816, 1.308282 46.781919, 1.308191 46.782081, 1.308099 46.782228, 1.30804 46.782352, 1.308046 46.782411, 1.308099 46.782595, 1.308116 46.78269, 1.308073 46.782756, 1.308019 46.782823, 1.308046 46.78287, 1.308293 46.782925, 1.308529 46.78297, 1.308201 46.782918, 1.307965 46.782852, 1.307975 46.782767, 1.303881 46.780408, 1.303892 46.780342, 1.299106 46.780871, 1.299182 46.78101, 1.299745 46.782665, 1.299463 46.782698, 1.299126 46.782779, 1.298876 46.782909, 1.298785 46.782983, 1.298748 46.783174, 1.298657 46.783321, 1.298506 46.783541, 1.298244 46.783659, 1.297957 46.783817, 1.297829 46.78414, 1.297865 46.784456, 1.29801 46.784634, 1.297849 46.784886, 1.297831 46.785119, 1.297997 46.785292, 1.297847 46.785477, 1.297265 46.785642, 1.296155 46.785932, 1.295576 46.78652, 1.295093 46.786893, 1.292979 46.789056, 1.291515 46.790426, 1.290436 46.791579, 1.290733 46.791675, 1.291345 46.791866, 1.292144 46.792116, 1.292423 46.792233, 1.292686 46.792329, 1.293126 46.79245, 1.293528 46.792483, 1.293893 46.792535, 1.294285 46.792637, 1.29458 46.792678, 1.295519 46.792913, 1.29628 46.793111, 1.296908 46.793298, 1.297691 46.793545, 1.297938 46.793651, 1.29827 46.793864, 1.298587 46.794029, 1.298946 46.794143, 1.299284 46.794184, 1.29966 46.794162, 1.299761 46.79411, 1.299815 46.793978, 1.299949 46.793798, 1.300266 46.79332, 1.300641 46.792792, 1.300684 46.792692, 1.300738 46.792472, 1.300808 46.792108, 1.300732 46.791734, 1.300743 46.79148, 1.300711 46.791179, 1.300743 46.790985, 1.300765 46.790871, 1.30085 46.790783, 1.301081 46.790739, 1.301392 46.790639, 1.301612 46.790537, 1.302154 46.79018, 1.302288 46.790144, 1.302363 46.790177, 1.302551 46.790357, 1.302814 46.79061, 1.302975 46.790698, 1.303254 46.790724, 1.303452 46.790533, 1.303549 46.790478, 1.303683 46.790331, 1.303908 46.790085, 1.303983 46.79, 1.304042 46.789831, 1.304101 46.789585, 1.304235 46.789347, 1.304284 46.789078, 1.304251 46.788924, 1.304155 46.78877, 1.304133 46.788572, 1.304155 46.788384, 1.304246 46.788237, 1.304337 46.788289, 1.304434 46.788403, 1.304498 46.788469, 1.304622 46.788531, 1.30453 46.78852, 1.304439 46.78845, 1.304273 46.788267, 1.304176 46.788432, 1.304187 46.788707, 1.304332 46.789016, 1.304294 46.789266, 1.304209 46.789435, 1.304085 46.789692, 1.304048 46.78996, 1.303822 46.790206, 1.303613 46.790463, 1.303415 46.790599, 1.303297 46.790742, 1.303098 46.790742, 1.302862 46.790683, 1.302696 46.790548, 1.302556 46.790415, 1.302385 46.790228, 1.302304 46.790184, 1.302229 46.790173, 1.302133 46.790224, 1.301945 46.790357, 1.301553 46.790603, 1.301365 46.790676, 1.30107 46.790761, 1.300926 46.79079, 1.300861 46.790827, 1.300781 46.790922, 1.30077 46.791018, 1.300732 46.791172, 1.300743 46.791282, 1.300818 46.791642, 1.30121 46.79187, 1.301226 46.791987, 1.301247 46.792244, 1.301237 46.792358, 1.301151 46.792435, 1.301097 46.792509, 1.300963 46.792722, 1.300802 46.792927, 1.300732 46.793034, 1.300716 46.793247, 1.300754 46.793482, 1.300936 46.793879, 1.300963 46.793989, 1.301081 46.794147, 1.301306 46.794272, 1.301516 46.794334, 1.301655 46.794441, 1.301746 46.794565, 1.301757 46.794672, 1.301805 46.79479, 1.301998 46.794841, 1.302159 46.794958, 1.302202 46.795109, 1.302261 46.7953, 1.302293 46.795429, 1.302234 46.795487, 1.302052 46.79555, 1.301929 46.795586, 1.301805 46.795653, 1.301896 46.795774, 1.302009 46.79584, 1.302159 46.795976, 1.30239 46.796207, 1.302476 46.796317, 1.302599 46.796299, 1.302717 46.796358, 1.302728 46.796424, 1.302583 46.796446, 1.302675 46.796571, 1.302776 46.796648, 1.302948 46.796747, 1.303109 46.796776, 1.303286 46.796879, 1.303463 46.796953, 1.30408 46.797224, 1.30475 46.7975, 1.30518 46.797808, 1.305437 46.797918, 1.305743 46.798139, 1.305796 46.798231)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'De Besse-et-Saint-Anastaise au Lac Pavin',
        'Au départ de l’hôtel Le Clos à Besse-et-Saint-Anastaise, cette boucle permet de faire le tour du Lac Pavin en utilisant le sentier de découverte et le GR®30.',
        ARRAY['/photo/Besse1.jpg','/photo/Besse2.jpg','/photo/Besse3.jpg'],
        'Moyenne',
        250,
        11.87,
        'Puy-de-Dôme ',
        'Description de la randonnée
(D/A) A la sortie de l’hôtel, aller à droite puis tout de suite à gauche pour traverser la rivière.

(1) Tout de suite après, prendre à droite le Sentier découverte. Suivre ce sentier qui va longer le ruisseau. Passage en sous bois et découverte de la source Goyon (fontaine minérale, eau très ferrugineuse). Au détour du Chemin de découverte, on peut voir quelques cascades et le ruisseau courir entre les rochers, très joli parcours.

(2) Traverser une petite route et continuer sur le chemin. Traverser le hameau Les Sagnes et continuer sur le chemin.

(3) Au bout, tourner à gauche et emprunter le pont sur le ruisseau. Suivre à droite la D149 puis tout de suite à gauche une petite route. Au bout, traverser la D978 et continuer sur la petite route qui conduit au bord du Lac Pavin.

(4) Virer à droite et entreprendre le tour du lac. A une fourche, suivre à droite le chemin du (celui du bas effectue un tour complet). Monter, continuer le tour du lac en ignorant les départs sur la droite. Atteindre le belvédère (beau panorama sur le lac). Continuer quelques mètres sur la route.

(5) Prendre aussitôt un chemin sur la droite. Suivre le GR®30 (balisage Rouge et Balnc). Arrivé à une route, la suivre à droite sur une centaine de mètres.

(6) Quitter la route en tournant à gauche et, immédiatement après, continuer à gauche avec le GR®.

(7) Au croisement en T, tourner à droite, toujours sur le GR®.

(8) Suivre à gauche une petite route. Après 150m environ, la quitter pour un chemin qui part sur la gauche. Retour à l’hôtel Le clos, arrivé au carrefour prendre sur la gauche.

(9) Au rond-point, continuer tout droit Rue du Grand Mèze. A la fourche, aller à gauche dans la place du même nom. Au croisement, continuer en face, légèrement en biais sur la droite, dans le Chemin de Ronde.

(10) Au carrefour, prendre la 1ère à gauche, la Rue du Quartier de la Bessou. Plus loin, obliquer à gauche, Rue de la Résistance. Au croisement, continuer tout droit et rejoindre le ruisseau longé au départ. Ignorer le 1er pont sur ce ruisseau.

(1) Emprunter le 2ème pont, à droite, pour rejoindre le point de départ (D/A).

Points de passages
D/A : km 0 - alt. 1 030 m - Hôtel Le Clos vers la - Couze Pavin (rivière) - Affluent de l''Allier
1 : km 0.09 - alt. 1 026 m - Carrefour de la boucle
2 : km 2.61 - alt. 1 147 m - Petite route
3 : km 3.69 - alt. 1 168 m - Rioubes Bas
4 : km 4.6 - alt. 1 203 m - Lac Pavin
5 : km 6.46 - alt. 1 268 m - Belévdère - Départ sur la droite
6 : km 7.34 - alt. 1 262 m - Croisement
7 : km 8.3 - alt. 1 211 m - Croisement en T
8 : km 9.93 - alt. 1 114 m - Petite route
9 : km 10.82 - alt. 1 048 m - Rond-point
10 : km 11.16 - alt. 1 030 m - Carrefour
D/A : km 11.87 - alt. 1 030 m - Hôtel Le Clos
Informations pratiques
Pas de point d''eau jusqu''au Lac Pavin.
Au lac, restaurant, café.',
        ST_GeomFromText(
            'LINESTRING(2.92606 45.515339, 2.925382 45.515286, 2.925209 45.515015, 2.924014 45.515131, 2.923569 45.514822, 2.923162 45.514698, 2.922604 45.514378, 2.921538 45.513622, 2.920498 45.513243, 2.91972 45.512892, 2.91933 45.512595, 2.918869 45.512453, 2.917873 45.51204, 2.917355 45.511915, 2.916575 45.511594, 2.915427 45.51127, 2.914913 45.511232, 2.914146 45.510845, 2.913657 45.51065, 2.912972 45.510492, 2.912652 45.5105, 2.912275 45.510396, 2.911845 45.510382, 2.911064 45.510228, 2.910513 45.510155, 2.909808 45.509972, 2.909563 45.509843, 2.908942 45.509676, 2.908744 45.5096, 2.908527 45.509626, 2.907649 45.50953, 2.906765 45.509434, 2.906513 45.50922, 2.906068 45.509157, 2.905769 45.509165, 2.905329 45.509083, 2.904881 45.509198, 2.904474 45.509174, 2.904117 45.509057, 2.903965 45.509055, 2.903802 45.509136, 2.903744 45.509245, 2.904158 45.509384, 2.904275 45.509476, 2.904263 45.509569, 2.904142 45.509632, 2.903863 45.509636, 2.903575 45.509585, 2.903104 45.50939, 2.902485 45.509234, 2.90207 45.509199, 2.90168 45.509123, 2.901739 45.508968, 2.90169 45.508836, 2.901253 45.508701, 2.900987 45.508528, 2.900826 45.508136, 2.900749 45.50805, 2.900639 45.508054, 2.900516 45.507911, 2.900403 45.507678, 2.899837 45.507584, 2.899572 45.507618, 2.898923 45.507348, 2.898551 45.507455, 2.898315 45.507214, 2.897972 45.507259, 2.897886 45.507109, 2.897478 45.507169, 2.89677 45.507259, 2.896191 45.507334, 2.89544 45.507139, 2.894238 45.506928, 2.894045 45.507079, 2.893809 45.507124, 2.89353 45.507049, 2.893187 45.506898, 2.892865 45.506763, 2.892135 45.506567, 2.891771 45.506357, 2.891234 45.506011, 2.889732 45.505545, 2.886621 45.504627, 2.886127 45.504612, 2.885591 45.504101, 2.885677 45.50353, 2.885247 45.503545, 2.884926 45.503304, 2.884539 45.502808, 2.884947 45.501364, 2.884904 45.500883, 2.883745 45.500206, 2.883488 45.49989, 2.883767 45.49971, 2.885226 45.49995, 2.885805 45.499634, 2.886509 45.499382, 2.885677 45.498708, 2.885097 45.49816, 2.884475 45.497799, 2.884003 45.497363, 2.883393 45.496852, 2.882844 45.496506, 2.882698 45.49582, 2.882522 45.494282, 2.882737 45.493768, 2.883164 45.493362, 2.884042 45.492662, 2.88431 45.49171, 2.885269 45.491046, 2.886234 45.490971, 2.887071 45.491151, 2.887737 45.491211, 2.888402 45.491166, 2.891234 45.491873, 2.89205 45.492264, 2.892822 45.49261, 2.892994 45.492926, 2.893466 45.493468, 2.894088 45.493663, 2.896234 45.493783, 2.897371 45.493618, 2.89838 45.493392, 2.900156 45.49327, 2.900718 45.493588, 2.901276 45.493693, 2.902001 45.493811, 2.902521 45.49434, 2.902971 45.494521, 2.902725 45.493797, 2.902996 45.493819, 2.903336 45.494325, 2.903851 45.494671, 2.905611 45.494972, 2.906662 45.495137, 2.907263 45.495859, 2.90758 45.496218, 2.907842 45.496626, 2.907907 45.497348, 2.908465 45.49792, 2.909623 45.498281, 2.910215 45.498575, 2.909795 45.499258, 2.913035 45.49977, 2.915889 45.500161, 2.918013 45.499469, 2.919623 45.498973, 2.920749 45.498875, 2.921017 45.499003, 2.921275 45.499243, 2.921822 45.499664, 2.923045 45.50007, 2.92473 45.501071, 2.926832 45.502169, 2.927433 45.502251, 2.927744 45.502657, 2.928088 45.502845, 2.928399 45.503755, 2.928549 45.504522, 2.928517 45.504808, 2.928699 45.505251, 2.929472 45.505996, 2.929654 45.506402, 2.929982 45.50717, 2.930089 45.507806, 2.930712 45.508599, 2.930937 45.509332, 2.931349 45.5098, 2.931875 45.510274, 2.932025 45.510612, 2.93254 45.511026, 2.931896 45.511537, 2.932036 45.511906, 2.932336 45.512703, 2.932519 45.512894, 2.931596 45.513146, 2.931349 45.513349, 2.930974 45.513582, 2.928925 45.513936, 2.928195 45.514108, 2.927648 45.514379, 2.92709 45.514469, 2.925953 45.514845, 2.925202 45.515018, 2.925384 45.515289, 2.92606 45.515341)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'De la Baie d''Yves au Fort de Fouras par le sentier côtier',
        'L''essentiel du parcours s’effectue le long du sentier côtier entre la réserve naturelle de la Baie d''Yves et la commune de Fouras. Vous croiserez de nombreux pontons de pêche au carrelet sur votre route et pourrez visiter le Fort Vauban à l''estuaire de la Charente. Vous aurez sous les yeux un paysage totalement différent selon la marée.',
        ARRAY['/photo/Baie1.jpg','/photo/Baie2.jpg','/photo/Baie3.jpg'],
        'Moyenne',
        335,
        19.36,
        'Charente-Maritime',
        'Description de la randonnée
Départ du parking de la Baie d''Yves sur la RD137 dans le sens La Rochelle-Rochefort. Une fois sur l''aire de repos, se garer une centaine de mètres plus loin sur un parking en terre situé sur la droite.

(D/A) Pour rejoindre le parcours, aller au fond de ce parking en terre et emprunter le chemin de gauche pour rejoindre l''océan.

(1) Une fois sur la plage, prendre au bout de la digue à gauche. Arrivé à la Ferme du Rocher, virer à gauche et rejoindre une petite route.

(2) La quitter immédiatement en virant à droite pour contourner la Ferme du Rocher arriver en bordure de falaise (le chemin initial de droite est fermé). Rester ensuite sur le sentier du littoral jusqu''à Fouras. A proximité du Fief des Roches, après le premier carrelet de Fouras, rester sur le sentier qui borde des champs.

(3) A une cinquantaine de mètres d''une haie d''épineux empêchant de poursuivre tout droit, prendre le chemin à droite en sous-bois. Poursuivre sur le sentier du littoral en bordure des carrelets. Passer devant la maison de retraite puis un camping. Arrivé Boulevard de la Mer, continuer tout droit en longeant la plage Nord.

(4) Au petit port en bout de plage Nord, remonter jusqu''au passage piéton à gauche et rejoindre le rond-point de la D937. Traverser la départementale pour rejoindre le chemin en sous-bois et prendre en direction du casino sur la gauche.

(5) Contourner le casino et après avoir traversé l''Avenue du Bois Vert, prendre à gauche puis emprunter la Place Bugeau pour rejoindre la Grand Plage. Poursuivre vers le Fort Vauban qui vous fait face.

(6) Après une petite visite au fort, poursuivre votre randonnée vers le Sud et longer le parking du fort Place Vauban. Emprunter les escaliers en bout du parking, passer devant la capitainerie et rejoindre la plage Sud.

(7) Traverser la plage, rejoindre son entrée principale et remonter sur la route. Prendre en direction du Nord le Boulevard de la Mer et le suivre jusqu''à son extrémité pour retrouver la plage Nord. Reprendre à droite le chemin de l''aller en sens inverse.

(2) Au niveau de la ferme du Rocher, virer à droite pour d’accéder directement au parking par l''aire de repos (D/A).

Points de passages
D/A : km 0 - alt. 2 m - Aire de repos de la baie d''Yves
1 : km 0.27 - alt. 3 m - Plage, prendre à gauche au bout de la digue
2 : km 0.63 - alt. 5 m - Bifurcation à proximité de la Ferme du Rocher
3 : km 6.19 - alt. 7 m - Chemin en sous-bois
4 : km 8.61 - alt. 3 m - Petit Port à l''extrémité de la plage Nord
5 : km 8.84 - alt. 11 m - Contourner le casino
6 : km 9.88 - alt. 10 m - Fort Vauban , poursuivre au Sud
7 : km 10.3 - alt. 8 m - Traverser la plage
D/A : km 19.36 - alt. 2 m - Aire de repos de la Baie d''yves
Informations pratiques
Pas de point d''eau avant d''arriver en ville de Fouras - Parcours sans difficulté si ce n''est sa longueur -

En cas de pluie, il est possible, pour éviter de marcher dans la boue très présente à cet endroit, de modifier l’itinéraire au niveau du (3). En ce cas, au lieu de prendre le chemin en sous-bois, continuer le long du champ jusqu''à une haie d''épineux. Monter le long du champ à gauche et, à une croisée de chemins, prendre à droite. Poursuivre tout droit et rejoindre ensuite une petit place de terre puis par la droite le chemin du littoral.',
        ST_GeomFromText(
            'LINESTRING(-1.052978 46.033497, -1.053516 46.033132, -1.054067 46.032878, -1.054235 46.032791, -1.054443 46.032732, -1.054953 46.032632, -1.055484 46.032546, -1.056052 46.032621, -1.056202 46.032215, -1.056202 46.031976, -1.05624 46.031734, -1.056299 46.030904, -1.056299 46.030468, -1.056294 46.030174, -1.05639 46.030062, -1.056481 46.029943, -1.056315 46.029857, -1.056052 46.029805, -1.055816 46.029779, -1.05573 46.029622, -1.055961 46.029436, -1.056224 46.02925, -1.056664 46.029276, -1.056873 46.029388, -1.057297 46.029641, -1.057753 46.029567, -1.058466 46.029406, -1.059233 46.02925, -1.059968 46.02909, -1.060178 46.029008, -1.060387 46.028945, -1.060564 46.0289, -1.060703 46.028792, -1.060805 46.02868, -1.060934 46.028539, -1.060988 46.028397, -1.060993 46.028237, -1.060982 46.028058, -1.060945 46.027872, -1.060934 46.027704, -1.060945 46.02757, -1.06095 46.027302, -1.06095 46.026606, -1.060923 46.026051, -1.060875 46.025615, -1.060821 46.025306, -1.060768 46.025093, -1.060574 46.024818, -1.060349 46.024296, -1.060263 46.023939, -1.060105 46.023549, -1.060033 46.023194, -1.06 46.022885, -1.059958 46.022661, -1.059947 46.022527, -1.059944 46.022465, -1.059928 46.022416, -1.059901 46.022353, -1.05989 46.022286, -1.05984 46.022195, -1.059861 46.022035, -1.059791 46.021916, -1.059636 46.021503, -1.059367 46.020583, -1.059233 46.020199, -1.059067 46.01983, -1.058906 46.019461, -1.058826 46.019271, -1.058718 46.018992, -1.05837 46.018705, -1.058177 46.018482, -1.058 46.018295, -1.05779 46.018035, -1.05764 46.017509, -1.057506 46.01704, -1.057318 46.01682, -1.056299 46.015941, -1.055221 46.014943, -1.054486 46.014272, -1.053402 46.013173, -1.053172 46.012934, -1.053016 46.012636, -1.05286 46.012256, -1.052689 46.011664, -1.052646 46.011254, -1.052614 46.01039, -1.052576 46.009723, -1.052576 46.009, -1.052522 46.008095, -1.052528 46.007394, -1.05256 46.006876, -1.052565 46.005747, -1.052603 46.005021, -1.052673 46.004592, -1.052721 46.004417, -1.05315 46.003087, -1.053654 46.001928, -1.054786 45.999979, -1.055114 45.999357, -1.055671 45.998597, -1.055961 45.99822, -1.056197 45.997889, -1.057238 45.996935, -1.057774 45.996458, -1.058209 45.996089, -1.058434 45.99582, -1.05933 45.995019, -1.059877 45.994643, -1.060151 45.994453, -1.060186 45.994347, -1.06054 45.994124, -1.060864 45.994002, -1.061089 45.993953, -1.061503 45.99389, -1.062382 45.993953, -1.062621 45.993923, -1.063265 45.993863, -1.063597 45.993848, -1.064016 45.993818, -1.06437 45.993893, -1.064705 45.994017, -1.064973 45.994084, -1.065252 45.994102, -1.065499 45.994154, -1.065923 45.994311, -1.066422 45.994546, -1.066679 45.99471, -1.066851 45.994803, -1.06758 45.99503, -1.068197 45.99525, -1.068535 45.995325, -1.068846 45.995373, -1.069383 45.995403, -1.069662 45.995477, -1.070053 45.9956, -1.070456 45.995749, -1.070638 45.995846, -1.070949 45.995891, -1.071456 45.995948, -1.071445 45.996008, -1.071419 45.996045, -1.071429 45.996097, -1.071496 45.996096, -1.071588 45.996085, -1.071765 45.996122, -1.071963 45.996148, -1.072097 45.996171, -1.072253 45.996171, -1.072419 45.996118, -1.072537 45.996115, -1.072661 45.996145, -1.072811 45.996118, -1.072966 45.996122, -1.073165 45.99613, -1.073395 45.996122, -1.073798 45.996063, -1.073927 45.996014, -1.074179 45.995981, -1.074549 45.995954, -1.075005 45.995928, -1.075301 45.995921, -1.075558 45.99588, -1.076072 45.995753, -1.076383 45.995653, -1.076512 45.995671, -1.076764 45.995869, -1.076893 45.995917, -1.07707 45.995936, -1.077446 45.995902, -1.077741 45.995872, -1.077955 45.995872, -1.078202 45.995872, -1.078374 45.995891, -1.078588 45.995872, -1.078889 45.99591, -1.079184 45.995973, -1.07935 45.996055, -1.079473 45.996077, -1.079602 45.996096, -1.079752 45.996115, -1.079956 45.996178, -1.080149 45.996294, -1.080337 45.996461, -1.08046 45.996558, -1.080605 45.996629, -1.080782 45.996655, -1.081029 45.996636, -1.081281 45.996595, -1.081544 45.996588, -1.08185 45.996554, -1.082054 45.996431, -1.082198 45.996316, -1.082316 45.996197, -1.082579 45.995921, -1.082708 45.995809, -1.083714 45.995451, -1.084773 45.995135, -1.085186 45.994986, -1.08546 45.994911, -1.086624 45.994751, -1.087429 45.994367, -1.087788 45.993931, -1.087965 45.993819, -1.088266 45.993607, -1.088759 45.993364, -1.089328 45.993103, -1.089837 45.992861, -1.090433 45.992645, -1.091822 45.992209, -1.093077 45.991956, -1.094153 45.991802, -1.095829 45.9919, -1.096763 45.992045, -1.097235 45.992261, -1.09723 45.992641, -1.097466 45.992995, -1.097833 45.993371, -1.098163 45.993644, -1.098544 45.993677, -1.098748 45.993677, -1.098748 45.99348, -1.098962 45.993498, -1.099145 45.993174, -1.098984 45.992913, -1.098648 45.992305, -1.098412 45.991679, -1.098209 45.990948, -1.098445 45.990926, -1.098455 45.990784, -1.098681 45.990702, -1.09835 45.990171, -1.098151 45.989933, -1.098065 45.989593, -1.098217 45.989083, -1.098115 45.988866, -1.098056 45.988636, -1.097967 45.988408, -1.097891 45.988179, -1.097768 45.987722, -1.097565 45.987275, -1.097489 45.986902, -1.097607 45.986746, -1.097554 45.986522, -1.097275 45.986522, -1.097007 45.986194, -1.096739 45.98579, -1.097028 45.985648, -1.097318 45.985984, -1.097382 45.986299, -1.097747 45.986157, -1.097532 45.985911, -1.097307 45.985984, -1.097039 45.985626, -1.0972 45.985529, -1.096966 45.985225, -1.096642 45.984457, -1.096385 45.984217, -1.09603 45.984465, -1.095676 45.984442, -1.095623 45.984293, -1.095494 45.983995, -1.09544 45.983801, -1.095193 45.983861, -1.094882 45.983965, -1.094605 45.98407, -1.094316 45.984178, -1.094176 45.984245, -1.094056 45.984375, -1.093756 45.984472, -1.093412 45.984413, -1.093091 45.984308, -1.092704 45.984241, -1.092501 45.984263, -1.092586 45.98439, -1.092619 45.984524, -1.092731 45.985093, -1.092968 45.986234, -1.093182 45.9873, -1.093407 45.988366, -1.093531 45.988952, -1.093713 45.989838, -1.093885 45.990632, -1.094153 45.991795, -1.093096 45.991951, -1.09182 45.992208, -1.09131 45.992335, -1.0909 45.992451, -1.090057 45.992742, -1.089575 45.992954, -1.088539 45.993417, -1.087788 45.993853, -1.087638 45.994039, -1.087472 45.994289, -1.087257 45.994423, -1.08678 45.994658, -1.086511 45.99474, -1.086345 45.994766, -1.085315 45.994922, -1.084765 45.99513, -1.083725 45.995451, -1.082789 45.995731, -1.082606 45.995817, -1.082402 45.996048, -1.08229 45.996137, -1.082091 45.996346, -1.081973 45.996435, -1.081871 45.996484, -1.081737 45.996521, -1.081614 45.996532, -1.08141 45.996536, -1.081168 45.996592, -1.080857 45.996633, -1.080562 45.996581, -1.080278 45.996357, -1.080117 45.99623, -1.079833 45.9961, -1.079575 45.996051, -1.079409 45.99604, -1.079291 45.995977, -1.079071 45.995917, -1.078733 45.995858, -1.078476 45.995839, -1.078293 45.99585, -1.078062 45.995858, -1.077843 45.995846, -1.07759 45.995865, -1.077349 45.995887, -1.077183 45.995899, -1.077 45.995899, -1.07688 45.995844, -1.076668 45.995772, -1.076534 45.995638, -1.076453 45.995627, -1.076387 45.995615, -1.076296 45.99566, -1.076153 45.99571, -1.076001 45.995753, -1.07585 45.99579, -1.075687 45.995824, -1.075486 45.995883, -1.075338 45.995909, -1.075174 45.995917, -1.075054 45.995919, -1.074928 45.995923, -1.074686 45.995941, -1.07444 45.995952, -1.074257 45.995969, -1.073997 45.995991, -1.073839 45.996032, -1.073635 45.996073, -1.07349 45.996092, -1.073297 45.996107, -1.073088 45.996107, -1.072889 45.996103, -1.072723 45.996107, -1.072605 45.996114, -1.072487 45.996103, -1.072364 45.996114, -1.072288 45.996126, -1.072213 45.996129, -1.072176 45.996155, -1.072047 45.996144, -1.071902 45.996111, -1.071832 45.996111, -1.071655 45.996081, -1.071527 45.996055, -1.071473 45.996036, -1.071505 45.995977, -1.071449 45.995914, -1.070828 45.995869, -1.070556 45.995742, -1.070258 45.995639, -1.069964 45.995526, -1.069669 45.995404, -1.069347 45.995361, -1.069007 45.995373, -1.068686 45.995321, -1.068369 45.995261, -1.068063 45.995158, -1.067764 45.995049, -1.06747 45.994953, -1.067153 45.994866, -1.066866 45.994743, -1.066621 45.994588, -1.066331 45.994463, -1.06606 45.994334, -1.06577 45.994207, -1.065487 45.994089, -1.065157 45.994044, -1.064837 45.994016, -1.064614 45.993961, -1.064359 45.993885, -1.063981 45.993823, -1.063584 45.993856, -1.063257 45.993871, -1.062935 45.993879, -1.062654 45.993916, -1.06233 45.993893, -1.061994 45.99389, -1.061663 45.993854, -1.061324 45.993864, -1.060996 45.99391, -1.060682 45.994035, -1.060424 45.994169, -1.060199 45.994352, -1.059979 45.994512, -1.059748 45.994665, -1.059512 45.99484, -1.059276 45.995, -1.059098 45.995198, -1.058896 45.995388, -1.058689 45.995577, -1.05844 45.995739, -1.058262 45.995939, -1.058086 45.99613, -1.057892 45.996312, -1.057667 45.99649, -1.057474 45.996648, -1.057275 45.99683, -1.057136 45.996931, -1.05705 45.997043, -1.056841 45.997207, -1.056664 45.997385, -1.056524 45.997486, -1.056449 45.997583, -1.056235 45.997751, -1.056068 45.997952, -1.056031 45.998079, -1.055902 45.99819, -1.055768 45.998414, -1.055596 45.998578, -1.055425 45.998809, -1.055264 45.999018, -1.05513 45.999212, -1.05499 45.999446, -1.054903 45.999652, -1.054727 45.999845, -1.054635 46.000069, -1.0545 46.000277, -1.054384 46.000492, -1.054246 46.000698, -1.054109 46.000905, -1.053975 46.001118, -1.053878 46.001337, -1.053752 46.001553, -1.053613 46.001768, -1.05348 46.001987, -1.053364 46.00221, -1.053291 46.002441, -1.053207 46.002665, -1.053125 46.002894, -1.05305 46.003113, -1.052978 46.003343, -1.052882 46.003565, -1.052839 46.003792, -1.052737 46.004016, -1.052684 46.004248, -1.052636 46.004482, -1.052602 46.00472, -1.052552 46.004953, -1.052534 46.005179, -1.05254 46.005413, -1.052515 46.005642, -1.052512 46.005878, -1.052492 46.006116, -1.052466 46.006352, -1.05248 46.006585, -1.052484 46.006813, -1.052489 46.007049, -1.052464 46.007285, -1.05248 46.007516, -1.052482 46.007741, -1.05247 46.007978, -1.052466 46.008212, -1.052447 46.008443, -1.052499 46.008676, -1.052507 46.00891, -1.052535 46.00914, -1.052522 46.009406, -1.052549 46.010006, -1.052565 46.010826, -1.052621 46.011989, -1.052772 46.012719, -1.053094 46.013166, -1.053866 46.013664, -1.05451 46.01432, -1.055755 46.015422, -1.056591 46.016326, -1.057299 46.016763, -1.057385 46.017324, -1.057514 46.017801, -1.0579 46.018427, -1.058651 46.01906, -1.058796 46.019496, -1.059102 46.020021, -1.059279 46.020446, -1.059493 46.021191, -1.059692 46.021854, -1.059783 46.022088, -1.059799 46.022286, -1.05967 46.022431, -1.059761 46.022491, -1.059896 46.022666, -1.059965 46.022934, -1.060008 46.02334, -1.060142 46.023738, -1.060266 46.024111, -1.060384 46.024454, -1.06047 46.024707, -1.060614 46.024942, -1.060738 46.025161, -1.060867 46.025776, -1.060883 46.026167, -1.060909 46.027173, -1.06092 46.027967, -1.060914 46.028429, -1.060705 46.02873, -1.060582 46.028831, -1.060501 46.02889, -1.059718 46.029114, -1.059122 46.029248, -1.058264 46.029427, -1.057438 46.029602, -1.057331 46.02962, -1.057175 46.029527, -1.056987 46.029434, -1.056778 46.0293, -1.056682 46.029233, -1.056413 46.029237, -1.056242 46.029214, -1.05599 46.029367, -1.055845 46.029483, -1.055695 46.029576, -1.055732 46.029758, -1.055695 46.030079, -1.055598 46.030384, -1.055362 46.030712, -1.054997 46.031129, -1.054729 46.031423, -1.054445 46.03168, -1.05394 46.032172, -1.053565 46.032585, -1.053372 46.032797, -1.053227 46.032931, -1.052884 46.033289, -1.052977 46.033464)',
            4326
        )
    );

INSERT INTO
    hikes (
        title,
        description,
        picture,
        difficulty,
        time,
        distance,
        localisation,
        details,
        gps_coordinate
    )
VALUES (
        'Ferme de Blin - Vallée de la Druyes',
        'Depuis l''ancien château médiéval, partir à la découverte d''un village construit en partie entre un ancien marais en partie asséché et la falaise. La vallée de la Druyes vous accueille dans un écrin de verdure qui tranche avec les pierres calcaires qui soutiennent l''édifice en ruine.
Druyes-les-Belles-Fontaines est classé dans les villages "Cités de caractères de Bourgogne - Franche-Comté".',
        ARRAY['/photo/Blin1.jpg','/photo/Blin2.jpg','/photo/Blin3.jpg'],
        'Moyenne',
        200,
       10.46,
        'Yonne',
        'Description de la randonnée
Le départ se fait depuis le parking du château (la Ville).

(D/A) S''engager dans la rue qui mène au château en passant sous la porte de la Ville. Passer à droite du château, descendre le chemin qui aboutit sur une petite voie. Continuer à descendre pour arriver sur la Place Jean Bertin. Virer à gauche, puis à droite pour passer sur le pont qui franchit la Druyes. Longer la rue jusqu''à l''église.

(1) Prendre tout de suite à droite avant la mairie le chemin piéton (Chemin des Sources).

(2) Après être passé devant une guinguette située à main gauche, emprunter le chemin montant dans une partie végétalisée. Prenez le temps de jeter un œil sur le lac. À mi-chemin de la côte, bifurquer à gauche dans le premier chemin.

(3) Arrivé sur une ancienne voie ferrée, tourner à gauche, passer sur le viaduc et profiter du point de vue de part et d''autre. Au bout de cette portion, couper la route D104. Cette nouvelle voie goudronnée se termine rapidement en chemin qui contourne par la gauche le terrain de foot et arrive sur la D148.

(4) Passer tout droit pour descendre dans le chemin.

(5) À l''endroit où s''arrêtent les haies de bordure, prendre en épingle sur la gauche. Monter le raidillon et atteindre une voie large et stabilisée. L''emprunter par la droite, arriver à la ferme de Blin.

(6) Tourner à gauche entre les vestiges de l''ancien pont, laisser la source, sa fontaine et son bassin à main gauche et poursuivre par la droite. Arrivé au croisement de 4 chemins à hauteur d''une maison, tourner à gauche. Traverser la rivière sur le pont et aboutir sur la route D73. L''emprunter à droite sur 150m pour la quitter en prenant le chemin de gauche. Le suivre en laissant les chemins latéraux jusqu''au prochain croisement avec une voie goudronnée.

(7) À ce carrefour, faire une baïonnette gauche/droite pour suivre la direction de Fontenailles. Laisser la Rue des Roussiottes à gauche, poursuivre par la Rue des Grandes Chenevières. À la patte d''oie, tourner deux fois de suite à gauche jusqu''à la mare située sur la gauche.

(8) Prendre en direction du Nord-Ouest, la Rue des Railly. Elle se termine en chemin. Entrer en sous-bois et suivre en descendant dans la Vallée Morin.

(9) Virer à gauche, laisser un premier chemin sur la droite et remonter par le sentier large en limite d''une partie boisée. Quitter ce bois et prolonger jusqu''à un double croisement de 6 routes et chemins

(10) Rester vigilant pour emprunter le troisième sur la droite pendant presque un kilomètre.

(11) Passer tout droit le carrefour en direction du réservoir semi-enterré. En arrivant sur la D104, virer à gauche, puis 50m après, monter le chemin de terre sur la droite qui aboutit sur le parking (D/A).

Points de passages
D/A : km 0 - alt. 204 m - Château Fort de Druyes-les-Belles-Fontaines
1 : km 0.73 - alt. 170 m - Église Saint-Romain (Druyes-les-Belles-Fontaines)
2 : km 0.88 - alt. 175 m - Monter le chemin situé sur la gauche du lac
3 : km 1.62 - alt. 194 m - Tourner à gauche en direction du - Viaduc de Druyes-les-Belles Fontaines
4 : km 3.09 - alt. 198 m - Passer tout droit
5 : km 3.5 - alt. 172 m - Virage en épingle sur la gauche
6 : km 4.35 - alt. 168 m - Ferme de Blin, source et fontaine. Vers la - Druyes (rivière) - Affluent de l''Yonne
7 : km 6.58 - alt. 229 m - Décrire un gauche/droite
8 : km 7.21 - alt. 229 m - Mare (ancien abreuvoir)
9 : km 8.18 - alt. 205 m - Fond de la Vallée Morin
10 : km 8.91 - alt. 224 m - Double croisement de 6 routes et chemins
11 : km 9.89 - alt. 215 m - Tracer tout droit
D/A : km 10.46 - alt. 204 m - Château Fort de Druyes-les-Belles-Fontaines
Informations pratiques
Ce parcours peut se faire aussi en VTT. Les sources et fontaines sont nombreuses mais l''eau n''est pas potable même si elle est très claire. Une densité importante de palmipèdes habitent le marais et la rendent impropre à la consommation humaine.
Cette randonnée est proposée par l''Office de Tourisme de Puisaye-Forterre.
Le balisage est assuré par l''association À chacun son chemin en Puisaye-Forterre suivant la charte graphique de la Communauté de Communes de Puisaye-Forterre dans le sens de la description et porte le N°51.
La présence du balisage impose toutefois de partir au minimum avec ce descriptif et la carte IGN jointe.

En cas de soucis, merci de remplir ce questionnaire (1 à 2 minutes seulement).
Attention lors des traversées de routes.

Soyez toujours prudent et prévoyant lors d''une randonnée. Visorando et l''auteur de cette fiche ne pourront pas être tenus responsables en cas d''accident survenu sur ce circuit.

Télécharger fiche et carte PDF
Pendant la rando ou à proximité
De nombreux points de vue jalonnent ce circuit.
À visiter : la poterne, le château, le lavoir situé juste avant le premier pont, l''église.
À voir également : les galeries, les expositions estivales, le tilleul classé (au pied de l''église).
Ce village classé comme "Site touristique majeur" a vu naître le Capitaine Coignet et l''ingénieur Jean Bertin (1917-1975), inventeur de l''aérotrain, du naviplane et de l''hydroglisseur.
Au (3), au carrefour, en face l''arrivée, une pancarte vous indique le site de Panama. Vous pourrez y aller en suivant les indications (20mn en aller-retour). Cela vaut le détour !

Druyes-les-Belles-Fontaines a obtenu en 2017 le label Cité de Caractère de Bourgogne - Franche-Comté.',
        ST_GeomFromText(
            'LINESTRING(3.425135 47.550587, 3.424814 47.550268, 3.424588 47.550068, 3.424416 47.549851, 3.423086 47.549069, 3.422785 47.549055, 3.422485 47.549269, 3.422206 47.549471, 3.422035 47.549471, 3.421713 47.549464, 3.42108 47.549602, 3.420737 47.549406, 3.42049 47.549153, 3.420704 47.548747, 3.420855 47.548631, 3.420811 47.548497, 3.421154 47.548186, 3.420628 47.547954, 3.420446 47.547729, 3.420275 47.547425, 3.419996 47.547338, 3.41991 47.547418, 3.419835 47.547512, 3.419609 47.54762, 3.419245 47.547751, 3.418869 47.547896, 3.418386 47.548156, 3.418504 47.548678, 3.418525 47.548808, 3.417657 47.549822, 3.417228 47.549243, 3.416809 47.548627, 3.416337 47.548026, 3.415876 47.54762, 3.415135 47.546781, 3.414127 47.54568, 3.414212 47.545506, 3.415211 47.544941, 3.416198 47.544535, 3.419288 47.543406, 3.419395 47.543246, 3.420961 47.542305, 3.422388 47.54174, 3.423053 47.541291, 3.424019 47.540408, 3.424223 47.540132, 3.424502 47.539973, 3.425081 47.539553, 3.425122 47.539194, 3.425596 47.539161, 3.426497 47.539176, 3.427163 47.538481, 3.428214 47.538089, 3.428729 47.537999, 3.428906 47.537945, 3.429325 47.537724, 3.430044 47.537434, 3.430355 47.537354, 3.430816 47.537224, 3.431288 47.537036, 3.431765 47.536891, 3.432554 47.536536, 3.433531 47.536311, 3.43379 47.536306, 3.433745 47.536411, 3.433729 47.536469, 3.433774 47.536522, 3.433892 47.536569, 3.434675 47.536936, 3.434788 47.536978, 3.436647 47.537018, 3.440949 47.537177, 3.442333 47.537293, 3.443041 47.537351, 3.444114 47.537351, 3.444436 47.537467, 3.444608 47.537626, 3.445359 47.53764, 3.445895 47.537553, 3.446668 47.537423, 3.447419 47.537278, 3.44817 47.536974, 3.448792 47.536684, 3.449339 47.536279, 3.450187 47.535525, 3.450583 47.535077, 3.451839 47.534048, 3.452697 47.535033, 3.454392 47.536409, 3.454789 47.536337, 3.45539 47.536308, 3.455647 47.536366, 3.45672 47.538162, 3.45701 47.538669, 3.457535 47.539683, 3.457965 47.540263, 3.459628 47.541769, 3.460636 47.54258, 3.461505 47.543435, 3.461924 47.543942, 3.462482 47.544724, 3.462439 47.545115, 3.462975 47.545969, 3.463308 47.546955, 3.463544 47.548722, 3.463436 47.548924, 3.463007 47.549084, 3.462321 47.54904, 3.461698 47.54933, 3.461388 47.549677, 3.460894 47.549807, 3.458984 47.550271, 3.458233 47.550285, 3.457611 47.550561, 3.456731 47.551169, 3.45598 47.551835, 3.455336 47.552718, 3.455068 47.553052, 3.454789 47.553182, 3.454006 47.553544, 3.453791 47.553761, 3.45347 47.554442, 3.453287 47.554717, 3.453051 47.555108, 3.452557 47.555079, 3.451914 47.554876, 3.45142 47.554862, 3.450573 47.554804, 3.45009 47.554862, 3.449618 47.554746, 3.449317 47.554659, 3.448513 47.55434, 3.447708 47.553819, 3.447236 47.553559, 3.446935 47.553385, 3.446699 47.553327, 3.446206 47.553197, 3.445648 47.553211, 3.44539 47.553153, 3.444468 47.552979, 3.444318 47.552907, 3.443974 47.552921, 3.443674 47.552907, 3.442537 47.552704, 3.442 47.552574, 3.441571 47.552603, 3.441024 47.552545, 3.440477 47.552371, 3.439587 47.552009, 3.43891 47.551879, 3.438266 47.551864, 3.437816 47.551951, 3.437473 47.552024, 3.437237 47.552038, 3.436764 47.551951, 3.436271 47.551995, 3.435424 47.552081, 3.433996 47.552284, 3.433567 47.552313, 3.433095 47.552154, 3.432645 47.552154, 3.431786 47.552154, 3.430703 47.552067, 3.430284 47.552183, 3.429748 47.552342, 3.42948 47.552371, 3.428965 47.552269, 3.428622 47.552168, 3.428321 47.552009, 3.427978 47.551705, 3.427763 47.55156, 3.427387 47.551444, 3.4258 47.551039, 3.425413 47.550706, 3.425113 47.550619)',
            4326
        )
    );
