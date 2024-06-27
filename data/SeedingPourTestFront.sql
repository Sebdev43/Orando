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
        'L''Askar puis l''Argandoita en passant par le chêne millénaire',
        'Une belle randonnée qui nous permet de découvrir le magnifique village d''Urdax puis de nous élever à deux reprises pour admirer les sommets alentours d''où on aperçoit même l''océan.
Enfin la rencontre du chêne millénaire ne peut pas laisser insensible.',
        ARRAY['/photo/laskar1.jpg','/photo/laskar2.jpg','/photo/laskar3.jpg'],
        'Moyenne',
        '3 hours 30 minutes',
        8.64,
        'Navarre',
        'Description de la randonnée

(D/A) De la place, se diriger vers le Nord-Ouest, l''itinéraire est fléché en Vert-et-Blanc.
Au tabac, tourner à gauche et suivre le même balisage.
Admirer les belles maisons le long de la petite route qui se transforme en piste après la dernière habitation.
Passer près d''une petite grange et cheminer, en montant, à l''ombre de la forêt, atteindre une pancarte.

(1) Prendre à droite le chemin "Loiara" toujours balisé Vert-et-Blanc.
Continuer à cheminer, alternativement à l''ombre et au soleil, sans s''occuper des petits diverticules pour parvenir au débouché d''un bois.

(2) Découvrir Plein-Sud, le sommet de l''Alkuruntz.
Plus loin, longer par la droite une jolie petite maison et après 100m de piste bifurquer à droite, le chemin est toujours balisé.
Rencontrer de beaux spécimens de chênes et le chemin s''élève sérieusement.
Puis atteindre un plateau herbeux.

(3) Ignorer, juste après un muret en pierres, un chemin qui part à gauche et continuer le chemin balisé avec l''Azkar en point de mire. Arriver au col.

(4) Admirer la nouvelle vue que vous avez sur l''océan au loin.
De là, prendre Nord-Est, le chemin évident qui mène au sommet de l'Azkar.

(5) D'en haut, s''amuser avec une carte à découvrir le nom des différents sommets alentour.
Redescendre au col (l''aller/retour, petite pause comprise vous aura pris 1/4h).

(4) À la pancarte du col, prendre la direction "Urdazubi" pour redescendre sur l''autre versant.
Le chemin est toujours balisé en Vert-et-Blanc. Passer devant un abreuvoir (eau non-potable) qui sert souvent de rendez-vous aux Pottoks du coin.
1/4h après le col, à un croisement, ignorer un chemin qui monte à gauche et continuer à descendre à droite. 1/4h après, rejoindre une route et l''emprunter par la droite pour monter vers les antennes, bien en vue, de l''Argandoita. Dans la montée, juste avant un passage canadien, remarquer le chemin qui part à gauche (Nord) et qui sera suivi plus tard.

(6) Monter au sommet de l''Ardangoita par le sentier de droite et découvrir en bas la non-photogénique zone commerciale de Dantxarinea.

(7) Redescendre et retrouver le carrefour (aller/retour 1/4h).

(6) Prendre, à droite, le chemin indiqué "Axularen Txokoa" toujours balisé Vert-et-Blanc.
100m plus loin, délaisser le sentier à gauche et continuer à descendre parmi les fougères.
Encore plus loin atteindre un nouveau panneau.

(8) Suivre à gauche l''indication "Axularen Txokoa". La descente est parfois raide et délicate s''il a plu.
Arriver à un magnifique chêne millénaire dont le tronc atteint 6m de diamètre.
Prendre à droite toujours la direction "Axularen Txokoa". Traverser, plus loin, un passage canadien en ignorant un sentier qui part à droite.
Plus bas, à une patte d''oie continuer tout droit (à gauche le balisage est barré).
Passer le long de la ferme Axular et descendre jusqu''à la route N-121-B.

(9) L''emprunter à gauche. 150m plus loin, après avoir traversé la Nivelle, tourner à droite, (le balisage restant toujours le même) et cheminer jusqu''au village sur une ravissante petite route bordée de fontaines d''eau potable, sculptures, lavoir, belles fermes, etc...
Arriver sur la place du village en retraversant la Nive(D/A).
Points de passages

    D/A : km 0 - alt. 99 m - Place du village
    1 : km 1.02 - alt. 169 m - Pancarte Vert et Blanc à droite
    2 : km 1.53 - alt. 206 m - Vue Alkuruntz
    3 : km 2.47 - alt. 340 m - Plateau herbeux
    4 : km 2.98 - alt. 382 m - Col
    5 : km 3.2 - alt. 392 m - Sommet de l''Azkar
    6 : km 4.8 - alt. 292 m - Passage canadien
    7 : km 5.21 - alt. 340 m - Sommet de l''Ardangoita
    8 : km 5.98 - alt. 243 m - Pancarte à gauche
    9 : km 7.24 - alt. 97 m - Jonction Route N-121-B. - Nivelle (fleuve)
    D/A : km 8.64 - alt. 99 m - Place du village

Informations pratiques

Au départ on trouve une fontaine et des WC.
Le long de la randonnée quelques ruisselets et un abreuvoir permettent de se rafraîchir (tête, nuque, membres) mais l''eau n''est pas potable.
Il faut attendre le dernier 1/4h pour trouver de l''eau potable à profusion.
',
        ST_GeomFromText(
            'LINESTRING(-1.504055 43.266512, -1.504449 43.266828, -1.504741 43.266914, -1.505022 43.267008, -1.505337 43.267069, -1.505458 43.266858, -1.505551 43.266636, -1.505706 43.26644, -1.505848 43.266227, -1.505898 43.266004, -1.505853 43.265781, -1.505885 43.265553, -1.505896 43.265322, -1.505968 43.265098, -1.506056 43.264874, -1.506083 43.264647, -1.506164 43.264426, -1.506131 43.264198, -1.506014 43.263983, -1.506093 43.263763, -1.506174 43.263537, -1.50622 43.263304, -1.506339 43.26309, -1.506487 43.262891, -1.506522 43.262666, -1.506673 43.262463, -1.506767 43.262244, -1.506949 43.262057, -1.507072 43.26185, -1.507159 43.261632, -1.507254 43.26141, -1.507392 43.261199, -1.50751 43.260982, -1.507533 43.260756, -1.50762 43.260536, -1.507761 43.26033, -1.507936 43.260136, -1.508104 43.259937, -1.508308 43.259756, -1.508532 43.25959, -1.50867 43.25938, -1.508944 43.259249, -1.50918 43.259099, -1.509774 43.258986, -1.510002 43.258823, -1.510331 43.258433, -1.510631 43.258368, -1.510843 43.258192, -1.511603 43.257493, -1.511746 43.257287, -1.512053 43.256634, -1.512095 43.256403, -1.512014 43.256184, -1.512274 43.256057, -1.512591 43.256062, -1.512888 43.256125, -1.513198 43.256131, -1.513489 43.256056, -1.513787 43.255989, -1.514064 43.255881, -1.51436 43.255806, -1.514654 43.255718, -1.514707 43.255493, -1.51475 43.255266, -1.51491 43.255066, -1.514905 43.254833, -1.515032 43.254622, -1.515267 43.254472, -1.515506 43.254327, -1.515744 43.254183, -1.51584 43.253967, -1.516045 43.253791, -1.516344 43.253724, -1.516234 43.253941, -1.516247 43.254168, -1.51622 43.254394, -1.516166 43.254617, -1.516234 43.254837, -1.516322 43.255054, -1.516163 43.255249, -1.516145 43.255474, -1.516084 43.2557, -1.516019 43.255927, -1.516078 43.256151, -1.516158 43.256371, -1.51607 43.256589, -1.515979 43.256807, -1.515789 43.256985, -1.515635 43.257183, -1.515465 43.257376, -1.515389 43.257606, -1.515353 43.257831, -1.515161 43.258009, -1.514881 43.258116, -1.514588 43.2582, -1.514331 43.258325, -1.514266 43.258548, -1.514414 43.258748, -1.514478 43.258968, -1.514459 43.259198, -1.514381 43.259424, -1.514359 43.259654, -1.514252 43.259873, -1.514378 43.260084, -1.514492 43.2603, -1.514459 43.260528, -1.51457 43.260747, -1.514644 43.260975, -1.514689 43.261198, -1.514854 43.261391, -1.51338 43.262448, -1.513152 43.262601, -1.512913 43.262746, -1.513217 43.262679, -1.513329 43.262468, -1.513579 43.262323, -1.513842 43.262193, -1.514014 43.261999, -1.514244 43.261847, -1.51451 43.261727, -1.514766 43.261586, -1.514992 43.261429, -1.515128 43.261641, -1.515313 43.261823, -1.515625 43.261803, -1.515899 43.261909, -1.516205 43.261862, -1.516418 43.261696, -1.516642 43.261538, -1.516879 43.261392, -1.517148 43.261267, -1.517443 43.261186, -1.517744 43.261121, -1.518049 43.261157, -1.518361 43.261195, -1.518678 43.261206, -1.518995 43.261187, -1.519227 43.261027, -1.51952 43.261113, -1.519751 43.261266, -1.519893 43.261469, -1.519852 43.261693, -1.520013 43.261886, -1.520164 43.26209, -1.520199 43.262315, -1.52007 43.26253, -1.519923 43.262732, -1.520047 43.262944, -1.520355 43.262916, -1.520594 43.26277, -1.520902 43.262757, -1.520768 43.262966, -1.520534 43.263129, -1.520348 43.263313, -1.52024 43.263524, -1.519983 43.263651, -1.519738 43.263795, -1.519528 43.263961, -1.519412 43.264174, -1.519384 43.264403, -1.519202 43.264587, -1.519074 43.264798, -1.518965 43.26501, -1.518862 43.265234, -1.518819 43.265461, -1.518916 43.265678, -1.519161 43.265821, -1.519124 43.266052, -1.519172 43.266279, -1.519163 43.266508, -1.51892 43.266648, -1.518719 43.266818, -1.518617 43.267037, -1.51841 43.26721, -1.518206 43.267384, -1.518007 43.267564, -1.517853 43.267765, -1.517788 43.267987, -1.517696 43.268202, -1.517531 43.2684, -1.51733 43.268579, -1.517163 43.268773, -1.51697 43.268958, -1.516743 43.269119, -1.516541 43.269293, -1.516409 43.2695, -1.516276 43.269708, -1.516022 43.269845, -1.515746 43.269951, -1.515441 43.269888, -1.515322 43.269673, -1.515311 43.269445, -1.515342 43.269673, -1.515447 43.269887, -1.515755 43.269929, -1.516008 43.269794, -1.516207 43.269619, -1.516385 43.269432, -1.516594 43.269266, -1.516752 43.269066, -1.516957 43.268895, -1.517167 43.268716, -1.517364 43.268535, -1.517536 43.268348, -1.517732 43.268171, -1.517807 43.26795, -1.517869 43.267725, -1.517954 43.267947, -1.518089 43.268159, -1.518195 43.268378, -1.518191 43.268613, -1.518119 43.268832, -1.518065 43.269058, -1.518088 43.269292, -1.518085 43.269518, -1.51813 43.269743, -1.518133 43.26997, -1.518101 43.270201, -1.518103 43.270434, -1.518022 43.270659, -1.517866 43.270862, -1.517748 43.271071, -1.517538 43.271471, -1.51764 43.271689, -1.517599 43.271913, -1.517432 43.272103, -1.517278 43.272302, -1.517149 43.27251, -1.516854 43.272835, -1.516558 43.27291, -1.516268 43.272986, -1.516017 43.273123, -1.515703 43.273134, -1.515395 43.273074, -1.515073 43.273074, -1.514772 43.273154, -1.514483 43.273233, -1.514177 43.273299, -1.513869 43.273311, -1.513552 43.273274, -1.513306 43.273136, -1.513018 43.273039, -1.51271 43.272991, -1.512401 43.273006, -1.512088 43.273006, -1.511776 43.273018, -1.511464 43.273072, -1.511147 43.273083, -1.510849 43.273145, -1.510537 43.273132, -1.510223 43.27309, -1.509903 43.273082, -1.509584 43.273072, -1.509266 43.273049, -1.50895 43.273028, -1.508641 43.272978, -1.508335 43.273009, -1.508034 43.27307, -1.507923 43.272854, -1.50788 43.272631, -1.507871 43.272405, -1.507578 43.272332, -1.507338 43.272186, -1.507174 43.271984, -1.506973 43.271805, -1.506838 43.2716, -1.506522 43.271576, -1.506206 43.271574, -1.505895 43.27156, -1.505591 43.271507, -1.505375 43.271673, -1.505309 43.271902, -1.505185 43.272112, -1.505072 43.272331, -1.504965 43.272555, -1.504887 43.272777, -1.504812 43.273, -1.504707 43.273218, -1.504583 43.273431, -1.504578 43.273667, -1.504264 43.273714, -1.503952 43.273688, -1.503723 43.273534, -1.503104 43.273479, -1.502794 43.273413, -1.501876 43.273256, -1.501543 43.272863, -1.501608 43.27266, -1.50149 43.272475, -1.501061 43.272225, -1.500889 43.271787, -1.501114 43.2713, -1.501329 43.270894, -1.501179 43.270129, -1.5012 43.269316, -1.501479 43.268816, -1.501822 43.268472, -1.502144 43.268082, -1.502548 43.267751, -1.502702 43.267519, -1.502663 43.267288, -1.502852 43.266879, -1.50311 43.266691, -1.503484 43.266405, -1.504062 43.266461)',
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
        'La crête des Alpilles',
        'Belle balade entre la crête sauvage et escarpée des Alpilles et la plaine de Romanin.',
        ARRAY['/photo/laCrete1.jpg','/photo/laCrete2.jpg','/photo/laCrete3.jpg'],
        'Moyenne',
        '5 hours 55 minutes',
        15.48,
        'Bouches-du-Rhône',
        'Description de la randonnée

Départ depuis le parking des Antiques de Glanum à Saint-Rémy-de-Provence.
Attention, Parking payant de 10h à 18h : 4€ (Mai 2018).

(D/A) Depuis le parking, traverser la D5, puis descendre à gauche en direction de Saint-Rémy-de-Provence sur 100 mètres.
Après le pont, prendre à droite direction Égalières, et passer devant le Cloître Saint-Paul de Mausole. Suivre le balisage du GR®6 (Rouge et Blanc) par le Chemin des Carrières jusqu''à un oratoire.

(1) Un panneau Saint-Clerg invite à partir à droite en montée. Passer devant le Site Antique de Glanum et suivre le vallon par le sentier de découverte jusqu''à une petite route sur les hauteurs.

(2) Prendre à gauche et continuer cette route qui se dirige vers la tour de Télécommunications. Au niveau d''une citerne, laisser la piste qui part à droite, puis celle de gauche.

(3) À quelques mètres du signal de la Caume, laisser le GR®6 qui part à gauche vers la Gaudre de Valrugue.
Continuer sur ce chemin de terre balisé GR®, passer devant la tour. Avant la borne géodésique, prendre à droite le sentier pour arriver devant un panneau (zone protégée).
Suivre les crêtes vers la gauche en empruntant le GR®6. Après quelques passages rocheux escarpés, descendre vers le versant Sud des Alpilles.
Le GR®6 passe entre les rochers, dans un sous-bois, jusqu''au Col de Vallongue (passage rocheux étroit).

(4) Descendre à gauche des roches et des éboulis jusqu''à un sous-bois, pour arriver sur un chemin et retrouver le GR®653D.

(5) Tourner à gauche, longer l''aérodrome, franchir une barrière, laisser à gauche la piste de la cave de Romanin.

Plus de balisage
(6) Lorsque le chemin fait un virage à 90° à droite, laisser partir le balisage à droite. Passer la barrière par la droite, ne pas prendre le chemin qui part à gauche, mais trouver un sentier qui le longe par la droite. Il retrouve le chemin et continue tout droit. Laisser le prochain chemin à droite et poursuivre jusqu''à un croisement (138).

(7) Laisser le chemin de droite et de gauche et prendre le sentier en face qui démarre derrière un petit panneau métallique.
Couper un premier chemin et poursuivre jusqu''à retrouver un autre chemin. Le couper à nouveau et continuer en face sur un petit sentier qui va remonter et sortir du bois et déboucher sur un grand espace dégagé.

(8) Couper à nouveau le chemin et continuer tout droit sur le sentier à découvert ; 50m plus loin, laisser le sentier de droite et prendre le sentier qui part à gauche à 90° vers les Alpilles.
100m plus loin, il vire à droite et rejoint une fourche. Continuer sur le sentier de gauche qui monte. Après une partie plus sauvage, au niveau d''un champ, laisser le chemin de droite et poursuivre à gauche sur un chemin qui devient plus large.
Ce chemin longe le pied des Alpilles pendant environ 800m et rejoint un croisement (départ du sentier de la Gaudre de Valrugue ; GR®6).

(9) Poursuivre tout droit sur le même chemin pendant un peu plus d''un kilomètre jusqu''à rejoindre le site de Glanum. Prendre à droite sur le chemin balisé Jaune pour retrouver l''oratoire passé à l''aller.

(1) Prendre à gauche et faire le même chemin qu''à l''aller pour revenir au parking (D/A)
Points de passages

    D/A : km 0 - alt. 106 m - Parking - Site de Glanum
    1 : km 0.44 - alt. 109 m - Oratoire. Bifurcation à droite
    2 : km 2.55 - alt. 275 m - Intersection avec petite route. À gauche
    3 : km 3.36 - alt. 288 m - Fourche. Quitter le GR6
    4 : km 8.36 - alt. 261 m - Col de Vallongue.
    5 : km 8.88 - alt. 136 m - Jonction avec le GR653D. À gauche
    6 : km 9.55 - alt. 140 m - Dans le virage quitter la balisage
    7 : km 10.76 - alt. 138 m - Continuer tout droit
    8 : km 11.46 - alt. 145 m - Continuer tout droit
    9 : km 13.22 - alt. 147 m - Continuer tout droit
    D/A : km 15.48 - alt. 106 m - Parking - Site de Glanum

Informations pratiques

Quelques passages rocheux délicats par temps de pluie.

Variante :
(6) Il est possible de poursuivre à droite sur le GR®653D qui retrouve le circuit au point(1).
Cette portion est bien balisée mais moins sauvage.
',
        ST_GeomFromText(
            'LINESTRING(4.830858 43.775944, 4.831473 43.776033, 4.831581 43.776767, 4.831609 43.777172, 4.831815 43.776987, 4.832041 43.776818, 4.833208 43.776653, 4.833192 43.776401, 4.83383 43.776316, 4.834308 43.776281, 4.833857 43.775768, 4.83353 43.77538, 4.833782 43.775259, 4.833916 43.775157, 4.833868 43.774918, 4.833846 43.774561, 4.83405 43.77436, 4.834431 43.774352, 4.834435 43.774291, 4.834369 43.774249, 4.834206 43.774222, 4.834171 43.773936, 4.834043 43.773774, 4.833809 43.773558, 4.834043 43.773194, 4.834396 43.772892, 4.834584 43.772601, 4.834707 43.772417, 4.834888 43.772044, 4.835375 43.771544, 4.835979 43.771068, 4.836404 43.77062, 4.836883 43.770366, 4.837333 43.77027, 4.837784 43.770101, 4.838127 43.769863, 4.838533 43.769365, 4.838607 43.769092, 4.838922 43.768594, 4.839136 43.768336, 4.83942 43.768009, 4.839672 43.767535, 4.840002 43.76709, 4.840074 43.766948, 4.840117 43.766675, 4.840084 43.766482, 4.839804 43.765631, 4.839792 43.765383, 4.839727 43.765112, 4.83956 43.764629, 4.839533 43.763792, 4.839608 43.763527, 4.839817 43.76322, 4.840131 43.762969, 4.840175 43.762755, 4.840289 43.762642, 4.840517 43.762587, 4.840938 43.762673, 4.841126 43.762553, 4.841171 43.762427, 4.841088 43.762126, 4.840976 43.762085, 4.840638 43.762097, 4.840431 43.762049, 4.839967 43.761753, 4.83982 43.761651, 4.839507 43.761625, 4.839372 43.761601, 4.839259 43.76153, 4.839235 43.76133, 4.839358 43.761028, 4.839545 43.760742, 4.839828 43.760425, 4.84016 43.760224, 4.840994 43.759825, 4.841485 43.759748, 4.842285 43.759972, 4.842525 43.759929, 4.842743 43.759769, 4.843268 43.758981, 4.843522 43.758837, 4.843824 43.758829, 4.844315 43.758863, 4.844522 43.758893, 4.845643 43.75929, 4.846388 43.759469, 4.846868 43.759388, 4.84752 43.759114, 4.848113 43.758921, 4.848813 43.758853, 4.849296 43.758872, 4.850283 43.759025, 4.851034 43.759453, 4.85149 43.759711, 4.851809 43.759816, 4.851861 43.759892, 4.851839 43.759992, 4.851651 43.76017, 4.850959 43.760611, 4.850991 43.76071, 4.851603 43.760755, 4.851951 43.760737, 4.852203 43.760689, 4.852509 43.760569, 4.852678 43.76042, 4.852688 43.760263, 4.852688 43.760084, 4.852751 43.75998, 4.853684 43.759484, 4.853759 43.759399, 4.853684 43.759211, 4.853467 43.759016, 4.853314 43.758914, 4.853638 43.75892, 4.85417 43.759066, 4.854637 43.759236, 4.854931 43.759363, 4.855946 43.759641, 4.85686 43.759825, 4.857721 43.75998, 4.858984 43.760228, 4.860316 43.76052, 4.861495 43.760783, 4.862144 43.760937, 4.86238 43.761049, 4.862443 43.761238, 4.862431 43.761435, 4.862258 43.761693, 4.862123 43.76197, 4.86224 43.762006, 4.862325 43.761926, 4.862518 43.761907, 4.862752 43.761816, 4.863099 43.761475, 4.863123 43.76128, 4.863258 43.76112, 4.863369 43.761052, 4.863823 43.76089, 4.863946 43.76079, 4.863984 43.760689, 4.864246 43.760499, 4.864606 43.760379, 4.865019 43.760391, 4.865243 43.760334, 4.865445 43.760331, 4.865702 43.760235, 4.865808 43.760131, 4.866081 43.76003, 4.866154 43.759922, 4.866571 43.759728, 4.866747 43.759668, 4.866924 43.759662, 4.867127 43.759674, 4.867468 43.759621, 4.867776 43.759645, 4.86801 43.759646, 4.868222 43.759709, 4.868511 43.759722, 4.868677 43.759745, 4.868779 43.759783, 4.869117 43.759775, 4.869268 43.759802, 4.869455 43.759806, 4.869749 43.759857, 4.870183 43.759865, 4.870391 43.760021, 4.870502 43.760023, 4.870592 43.760087, 4.870799 43.760109, 4.870889 43.760184, 4.871213 43.760243, 4.871343 43.760303, 4.871496 43.760322, 4.871606 43.760263, 4.872099 43.760217, 4.872517 43.760241, 4.872796 43.760236, 4.872908 43.76021, 4.873031 43.760231, 4.873299 43.76021, 4.873396 43.760227, 4.873438 43.760282, 4.874161 43.760296, 4.874332 43.760232, 4.874633 43.7602, 4.874746 43.760145, 4.875062 43.760183, 4.875197 43.760125, 4.875321 43.76012, 4.87545 43.760077, 4.875708 43.760065, 4.876288 43.759855, 4.876632 43.7598, 4.87683 43.759662, 4.877085 43.759585, 4.87725 43.759616, 4.877351 43.759624, 4.877507 43.759581, 4.877738 43.759577, 4.877963 43.75957, 4.878071 43.759625, 4.878451 43.759776, 4.878607 43.759771, 4.87924 43.7595, 4.879653 43.759405, 4.880013 43.759417, 4.880898 43.759538, 4.881334 43.759537, 4.881642 43.759636, 4.881753 43.759726, 4.88202 43.759754, 4.882194 43.759842, 4.88244 43.759699, 4.88239 43.759654, 4.882471 43.759611, 4.882484 43.759447, 4.882445 43.759337, 4.882567 43.75923, 4.882646 43.759054, 4.882633 43.758748, 4.882786 43.758593, 4.882895 43.758574, 4.882994 43.758602, 4.883158 43.758689, 4.883273 43.758684, 4.883664 43.758612, 4.88385 43.75866, 4.884134 43.758669, 4.884534 43.758657, 4.884831 43.758717, 4.88517 43.758769, 4.885256 43.758735, 4.885545 43.758717, 4.885684 43.758789, 4.886231 43.758795, 4.886413 43.758747, 4.886573 43.758748, 4.886872 43.758702, 4.887535 43.758909, 4.887833 43.758969, 4.888215 43.758949, 4.888376 43.759029, 4.888559 43.759046, 4.888741 43.758997, 4.888956 43.758984, 4.889149 43.759041, 4.889364 43.759131, 4.889482 43.759167, 4.889837 43.759161, 4.890267 43.759141, 4.890772 43.759179, 4.890931 43.759123, 4.891111 43.759113, 4.891353 43.759085, 4.891525 43.758975, 4.891932 43.758825, 4.892284 43.758849, 4.892422 43.758825, 4.892743 43.758887, 4.89286 43.758918, 4.892982 43.758898, 4.893103 43.758915, 4.893271 43.758982, 4.893733 43.759014, 4.89404 43.759201, 4.894287 43.759275, 4.894396 43.759192, 4.894563 43.759168, 4.894727 43.759097, 4.894971 43.759211, 4.895115 43.759287, 4.895269 43.759302, 4.895422 43.759325, 4.895585 43.759325, 4.89572 43.759395, 4.89609 43.75942, 4.896353 43.759538, 4.896723 43.759631, 4.896803 43.759686, 4.89691 43.760248, 4.896851 43.760449, 4.89691 43.760634, 4.896935 43.76083, 4.89698 43.761017, 4.897061 43.761051, 4.897077 43.761245, 4.897136 43.761338, 4.897045 43.761586, 4.897061 43.761773, 4.897211 43.762013, 4.897219 43.76232, 4.897302 43.762463, 4.897396 43.762537, 4.897733 43.762675, 4.897804 43.762755, 4.897801 43.762924, 4.897704 43.763201, 4.897656 43.763297, 4.897562 43.763345, 4.897472 43.76354, 4.897481 43.763788, 4.897528 43.763877, 4.897688 43.763998, 4.897432 43.764009, 4.896446 43.764277, 4.895766 43.764195, 4.895507 43.764139, 4.895399 43.76408, 4.894867 43.764164, 4.894581 43.764281, 4.894256 43.76434, 4.893846 43.764234, 4.893652 43.764213, 4.892191 43.764388, 4.891842 43.764467, 4.891236 43.76453, 4.890532 43.764457, 4.889923 43.764468, 4.88969 43.764485, 4.889229 43.764376, 4.888124 43.76426, 4.887019 43.764229, 4.885259 43.764159, 4.88366 43.764171, 4.881965 43.76419, 4.88115 43.763904, 4.880613 43.764202, 4.879197 43.764066, 4.87777 43.763919, 4.877009 43.764516, 4.875313 43.764826, 4.873844 43.765082, 4.872964 43.765376, 4.872406 43.765376, 4.871161 43.765732, 4.870346 43.765608, 4.868908 43.766259, 4.867664 43.767251, 4.866913 43.767437, 4.866698 43.766414, 4.866183 43.766151, 4.86614 43.76674, 4.865475 43.766848, 4.864896 43.767142, 4.864209 43.767204, 4.863544 43.767204, 4.862879 43.767406, 4.862514 43.767809, 4.862407 43.768212, 4.860518 43.768103, 4.860218 43.768336, 4.85981 43.768289, 4.859274 43.768909, 4.858888 43.769048, 4.858566 43.769529, 4.858115 43.769467, 4.857557 43.769234, 4.856506 43.769296, 4.855755 43.769405, 4.855454 43.769622, 4.855047 43.76956, 4.854467 43.769591, 4.853845 43.769808, 4.852322 43.770009, 4.851742 43.769994, 4.850476 43.770335, 4.848588 43.77066, 4.847665 43.770954, 4.845992 43.771388, 4.844286 43.771717, 4.84361 43.771946, 4.843181 43.771931, 4.841507 43.772147, 4.840734 43.772395, 4.840219 43.77238, 4.83964 43.772535, 4.837677 43.772723, 4.83625 43.772744, 4.835349 43.772969, 4.83419 43.773073, 4.833804 43.773515, 4.834158 43.773941, 4.834179 43.77422, 4.834469 43.774274, 4.834404 43.774359, 4.83404 43.774351, 4.833814 43.774592, 4.833868 43.774894, 4.833804 43.775235, 4.833546 43.77539, 4.833868 43.775769, 4.834286 43.776257, 4.833203 43.776386, 4.833208 43.776653, 4.832621 43.776733, 4.832032 43.776811, 4.831593 43.777176, 4.831583 43.776769, 4.83154 43.776396, 4.83147 43.776019, 4.830864 43.775944)',
            4326
        )
    );