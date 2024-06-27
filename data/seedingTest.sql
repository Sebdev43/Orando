BEGIN;

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
    ARRAY['/photo/nomphot1.jpg','/photo/nomphot2.jpg','/photo/nomphot3.jpg'],
    'Facile',
    235,
    12.95,
    'Gironde',
    'Se garer sur le parking de l''abbatiale.

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

COMMIT;