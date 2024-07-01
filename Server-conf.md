# Installation du server pour le déploiment du site Orando

Le projet orando sera deployé sur un machine ayant 4 cores et 8g de ram et 300go de stockage qui est connecter à travers vlan pour plus de sécurité. Au niveau os le server est un ubuntu server 22.04. Le mon de domaine a été pris sur cloudflare <<o-rando.com>> car permet d'avoir un proxy avancé qui masque l'ip publique du server.

## Configuration de l'environnement sécurisé pour ssh

1. Installation de opsenssh

    ```bash
    sudo apt update
    sudo apt install ssh
    ```

2. Ajout de la clé publique ssh

    ```bash
    nano ~/.ssh/authorized_keys
    ```

    Coller ici votre clé publique ssh,sauvergardez et quittez

    On donne les accés à la clé

    ```bash
    chmod 600 ~/.ssh/authorized_keys
    ```

3. Maintenant sécurisons le tout

    Modifion la façon d'accéder en ssh

    ```bash
        sudo nano /etc/ssh/sshd_config

        #Trouvez la ligne #Port 22, décommentez-la (enlevez le #) et changez le numéro de port en un port de votre choix, par exemple :
        Port 5000

        #Nous également désactiver la connection par mot de passe et seulement laisser par clé-ssh

        PasswordAuthentication no
        ChallengeResponseAuthentication no
        UsePAM no

        #On redemarre le sshd

        sudo systemctl restart sshd
    ```

## Installation des dépendances

1. Installation de PostgreSQL

   ```bash

       #Mettre à jour la liste des paquets disponibles :

       sudo apt update

       #Installer PostgreSQL :

       sudo apt install postgresql postgresql-contrib

       #Démarrer et activer le service PostgreSQL :

       sudo systemctl start postgresql
       sudo systemctl enable postgresql


   ```

2. Installation de Postgis

    ```bash
        #Ajouter le dépôt pour PostGIS :

        sudo add-apt-repository ppa:ubuntugis/ppa
        sudo apt update

        #Installer Postgis

        sudo apt install postgis

    ```

3. Installation de sqitch :

    ```bash
        #Ajouter le dépôt pour Sqitch :

        echo 'deb http://apt.pgxn.org/ubuntu pgxn main' | sudo tee /etc/apt/sources.list.d/pgxn.list

        sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 7FCC7D46ACCC4CF8

        sudo apt update

        #nstaller Sqitch :

        sudo apt install sqitch

    ```

4. Installation de NVM :

    ```bash
        #Télécharger et installer NVM :

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

        #Puis, rechargez votre shell :

        source ~/.bashrc

        #Installer Node.js avec NVM :

        nvm install node

    ```

5. Installation de Git :

    ```bash
        #Mettre à jour la liste des paquets disponibles :

        sudo apt update

        #Installer Git :

        sudo apt install git

    ```

## Installation de nginx  

1. Etape 1 installation :

    ```bash
        sudo apt update
        sudo apt install nginx
    ```

2. Etape 2 configuration :

    ```bash
        sudo nano /etc/nginx/sites-available/mon_site
    ```

    Ajout de la configuration :

    ```plaintext
        server {
    listen 80;
    server_name o-rando.com www.o-rando.com;
    return 301 https://$host$request_uri;
    }

    server {
    listen 443 ssl;
    server_name o-rando.com www.o-rando.com;

    ssl_certificate /etc/ssl/certs/cloudflare.pem;
    ssl_certificate_key /etc/ssl/private/cloudflare.key;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    ```

    Pour voir si nginx focntionne correctement :

    ```bash
        sudo systemctl status nginx
    ```
