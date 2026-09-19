// Datos compartidos por el listado y la plantilla de detalle.
const diccionario = [
    // ==========================================
    // PRIMERA EVALUACIÓN (Tus palabras reales)
    // ==========================================
    {
        id: 'phishing',
        termino_es: 'Phishing',
        termino_eu: 'Phishinga',
        definicion_es: 'Técnica de engaño que utiliza correos o mensajes fraudulentos para hacerse pasar por una entidad de confianza y robar información confidencial.',
        definicion_eu: 'Konfiantzazko erakunde baten itxura eginez informazio konfidentziala lapurtzeko mezu edo posta elektroniko iruzurtiak erabiltzen dituen iruzur-teknika.',
        ejemplo_es: 'Recibes un correo que imita a tu banco y te pide introducir tus claves en un enlace urgente.',
        ejemplo_eu: 'Zure bankuaren itxura duen mezu bat jasotzen duzu eta zure gakoak premiazko esteka batean sartzeko eskatzen dizu.',
        evaluacion: 1
    },
    {
        id: 'ddos',
        termino_es: 'Ataque DDoS',
        termino_eu: 'Biren erasoa',
        definicion_es: 'Ataque de Denegación de Servicio Distribuido. Consiste en saturar un servidor, servicio o red con un tráfico masivo de peticiones falsas para agotar sus recursos y hacer que la web o el servicio deje de funcionar para los usuarios legítimos.',
        definicion_eu: 'Zerbitzu-ukapen Banatuaren Erasoa (DDoS). Zerbitzari, zerbitzu edo sare bat eskaera faltsuen trafiko masibo batez gainezkatzean datza, bere baliabideak agortzeko eta legezko erabiltzaileentzat erabilgarri ez egoteko.',
        ejemplo_es: 'Miles de ordenadores infectados (botnet) envían peticiones a la vez a la página web de un banco hasta que los servidores se colapsan y los clientes reales no pueden entrar.',
        ejemplo_eu: 'Milaka ordenagailu kutsatuk (botnet) eskaerak bidaltzen dizkiote aldi berean banku baten webguneari, zerbitzariek kolapsatu eta benetako bezeroek ezin duten arte sartu.',
        evaluacion: 1
    },
    {
        id: 'troyano',
        termino_es: 'Troyano',
        termino_eu: 'Troiarra',
        definicion_es: 'Tipo de malware que se presenta al usuario como un programa aparentemente legítimo e inofensivo, pero que, al ejecutarlo, brinda acceso remoto o daña el sistema.',
        definicion_eu: 'Erabiltzaileari itxuraz zilegia eta kaltegabea den programa gisa aurkezten zaion malware mota, baina exekutatzean, erasotzaileari urruneko sarbidea ematen diona edo sistema kaltetzen duena.',
        ejemplo_es: 'Bajas un juego gratuito que funciona bien, pero en segundo plano está abriendo una puerta trasera en tu ordenador.',
        ejemplo_eu: 'Ondo funtzionatzen duen doako joko bat deskargatzen duzu, baina atzealdean zure ordenagailuan atzeko ate bat irekitzen ari da.',
        evaluacion: 1
    },
    {
        id: 'backdoors',
        termino_es: 'Backdoors (Puertas traseras)',
        termino_eu: 'Backdoorsak',
        definicion_es: 'Método oculto que permite eludir los procedimientos de seguridad habituales para acceder a un sistema, a menudo instalado de forma encubierta por un atacante.',
        definicion_eu: 'Sistema batera sartzeko ohiko segurtasun-prozedurak saihestea ahalbidetzen duen ezkutuko metodoa, askotan erasotzaile batek ezkutuan instalatua.',
        ejemplo_es: 'Un cibercriminal aprovecha un fallo para instalar un acceso oculto y poder entrar al servidor de la empresa cuando quiera.',
        ejemplo_eu: 'Ziberkriminal batek akats bat aprobetxatzen du ezkutuko sarbide bat instalatzeko eta nahi duenean enpresaren zerbitzarian sartzeko.',
        evaluacion: 1
    },
    {
        id: 'spyware',
        termino_es: 'Spyware',
        termino_eu: 'Spywarea',
        definicion_es: 'Software malicioso que infecta un dispositivo para espiar y recopilar información sobre el usuario (como contraseñas o hábitos de navegación) sin su consentimiento.',
        definicion_eu: 'Erabiltzailearen baimenik gabe informazioa (hala nola pasahitzak edo nabigazio-ohiturak) zelatatu eta biltzeko gailu bat kutsatzen duen software gaiztoa.',
        ejemplo_es: 'Un programa oculto registra en secreto todo lo que tecleas para robar tus contraseñas del correo y el banco (Keylogger).',
        ejemplo_eu: 'Ezkutuko programa batek ezkutuan erregistratzen du tekleatzen duzun guztia, zure posta eta bankuko pasahitzak lapurtzeko.',
        evaluacion: 1
    },
    {
        id: 'stealers',
        termino_es: 'Stealers',
        termino_eu: 'Stealerrak',
        definicion_es: 'Un tipo específico de malware diseñado exclusivamente para robar información valiosa y sensible del sistema infectado de forma rápida y silenciosa.',
        definicion_eu: 'Kutsatutako sistematik informazio baliotsua eta sentikorra azkar eta isilik lapurtzeko soilik diseinatutako malware mota espezifikoa.',
        ejemplo_es: 'Un archivo que, al abrirse, roba inmediatamente las cookies de sesión de tu navegador, tus contraseñas guardadas y los datos de tu billetera de criptomonedas.',
        ejemplo_eu: 'Irekitzean, zure nabigatzaileko saio-cookieak, gordetako pasahitzak eta kriptomoneta-zorroaren datuak berehala lapurtzen dituen fitxategia.',
        evaluacion: 1
    },

    // ==========================================
    // SEGUNDA EVALUACIÓN (Mantenidas de prueba)
    // ==========================================
    {
        id: 'ransomware',
        termino_es: 'Ransomware',
        termino_eu: 'Ransomwarea',
        definicion_es: 'Malware que bloquea o cifra los datos de la víctima y exige un rescate para devolver el acceso.',
        definicion_eu: 'Biktimaren datuak blokeatu edo zifratu eta sarbidea itzultzeko erreskatea eskatzen duen malwarea.',
        ejemplo_es: 'Una empresa pierde el acceso a sus documentos y recibe una nota que exige criptomonedas.',
        ejemplo_eu: 'Enpresa batek dokumentuetarako sarbidea galtzen du eta kriptodirua eskatzen duen ohar bat jasotzen du.',
        evaluacion: 2
    },
    {
        id: 'firewall',
        termino_es: 'Firewall (cortafuegos)',
        termino_eu: 'Firewall-a (suebakia)',
        definicion_es: 'Sistema que monitoriza y controla el tráfico de red basándose en reglas de seguridad.',
        definicion_eu: 'Segurtasun-arauetan oinarrituta sareko trafikoa monitorizatu eta kontrolatzen duen sistema.',
        ejemplo_es: 'El firewall bloquea una conexión entrante que no pertenece a ningún servicio autorizado.',
        ejemplo_eu: 'Firewall-ak baimendutako zerbitzu bati ez dagokion sarrerako konexio bat blokeatzen du.',
        evaluacion: 2
    },
    {
        id: 'vpn',
        termino_es: 'VPN (red privada virtual)',
        termino_eu: 'VPN (sare pribatu birtuala)',
        definicion_es: 'Tecnología que crea una conexión cifrada a través de Internet para proteger la privacidad y los datos.',
        definicion_eu: 'Internet bidez konexio zifratu bat sortzen duen teknologia, pribatutasuna eta datuak babesteko.',
        ejemplo_es: 'Usas una VPN para conectarte de forma más segura a la red de tu centro desde una cafetería.',
        ejemplo_eu: 'VPN bat erabiltzen duzu kafetegi batetik zure ikastetxeko sarera modu seguruagoan konektatzeko.',
        evaluacion: 2
    }
];