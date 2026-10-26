// Datos compartidos por el listado y la plantilla de detalle (Actualizado con información de estudio).
const diccionario = [
    // ==========================================
    // PRIMERA EVALUACIÓN
    // ==========================================
    {
        id: 'phishing',
        termino_es: 'Phishing',
        termino_eu: 'Phishinga',
        definicion_es: 'Técnica de engaño que utiliza correos o mensajes fraudulentos para hacerse pasar por una entidad de confianza y robar información confidencial.',
        definicion_eu: 'Konfiantzazko erakunde baten itxura eginez informazio konfidentziala lapurtzeko mezu edo posta elektroniko iruzurtiak erabiltzen dituen iruzur-teknika.',
        ejemplo_es: 'Recibes un correo que imita a tu banco y te pide introducir tus claves en un enlace urgente.',
        ejemplo_eu: 'Zure bankuaren itxura duen mezu bat jasotzen duzu eta zure gakoak premiazko esteka batean sartzeko eskatzen dizu.',
        concepto_clave_es: 'Se basa en la Ingeniería Social (manipular psicológicamente a las personas), no en hackear sistemas técnicos. El objetivo es que la víctima cometa el error. Variantes: Spear Phishing, Smishing, Vishing.',
        concepto_clave_eu: 'Ingeniaritza Sozialean (pertsonak psikologikoki manipulatzean) oinarritzen da, ez sistema teknikoak hackeatzean. Helburua biktimak akatsa egitea da. Aldaerak: Spear Phishing, Smishing, Vishing.',
        ejemplo_extra_es: 'Recibes un SMS diciendo que un paquete de Correos está retenido en aduanas y debes pagar 1,50€ en un enlace falso para liberarlo.',
        ejemplo_extra_eu: 'Postako pakete bat aduanan atxikita dagoela eta hura askatzeko esteka faltsu batean 1,50€ ordaindu behar duzula esaten duen SMS bat jasotzen duzu.',
        proteccion_es: 'Habilitar la Autenticación de Doble Factor (2FA) y revisar siempre la URL real en la barra de direcciones.',
        proteccion_eu: 'Faktore Bikoitzeko Autentifikazioa (2FA) gaitzea eta helbide-barran beti benetako URLa berrikustea.',
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
        concepto_clave_es: 'Atenta directamente contra el pilar de la Disponibilidad. Utiliza redes de ordenadores "zombis" infectados, conocidas como Botnets.',
        concepto_clave_eu: 'Eskuragarritasunaren zutabearen aurka egiten du zuzenean. Infektatutako ordenagailu "zonbien" sareak erabiltzen ditu, Botnet gisa ezagutzen direnak.',
        ejemplo_extra_es: 'Un ataque programado contra la plataforma virtual de una universidad el día de los exámenes finales, impidiendo que los alumnos accedan.',
        ejemplo_extra_eu: 'Azken azterketen egunean unibertsitate bateko plataforma birtualaren aurka programatutako erasoa, ikasleei sartzea eragotziz.',
        proteccion_es: 'Uso de balanceadores de carga, redes de distribución de contenido (CDN) y filtrado de tráfico anómalo por IP.',
        proteccion_eu: 'Karga-balantzatzaileak, edukia banatzeko sareak (CDN) eta IP bidezko trafiko anomaloaren iragazketa erabiltzea.',
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
        concepto_clave_es: 'No se replican a sí mismos (a diferencia de los virus o gusanos). Requieren que el usuario interactúe engañado por su apariencia.',
        concepto_clave_eu: 'Ez dira beren kabuz erreplikatzen (birusak edo zizareak ez bezala). Erabiltzaileak haien itxuragatik engainatuta elkarreragitea eskatzen dute.',
        ejemplo_extra_es: 'Descargas un programa de diseño gratis que instala silenciosamente un minero de criptomonedas que ralentiza tu PC.',
        ejemplo_extra_eu: 'Zure ordenagailua moteltzen duen kriptomoneta-meatzari bat isilik instalatzen duen diseinu-programa bat doan deskargatzen duzu.',
        proteccion_es: 'Descargar software únicamente de repositorios oficiales y mantener un antivirus (EDR) actualizado.',
        proteccion_eu: 'Softwarea biltegi ofizialetatik soilik deskargatzea eta antibirus bat (EDR) eguneratuta mantentzea.',
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
        concepto_clave_es: 'Pueden ser maliciosas (creadas por un hacker para asegurar su regreso) o legítimas pero vulnerables (dejadas por desarrolladores para mantenimiento).',
        concepto_clave_eu: 'Gaiztoak (hacker batek itzultzea ziurtatzeko sortuak) edo zilegiak baina zaurgarriak (garatzaileek mantentze-lanetarako utzitakoak) izan daitezke.',
        ejemplo_extra_es: 'Un router que viene de fábrica con una cuenta de administrador oculta codificada en el firmware.',
        ejemplo_extra_eu: 'Firmwarean kodetutako ezkutuko administratzaile-kontu batekin fabrikatik datorren bideratzaile (router) bat.',
        proteccion_es: 'Auditorías de código fuente, monitoreo de integridad de archivos y segmentación de red.',
        proteccion_eu: 'Iturburu-kodearen auditoretzak, fitxategien osotasunaren monitorizazioa eta sarearen segmentazioa.',
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
        concepto_clave_es: 'Su prioridad absoluta es el sigilo y la persistencia. No busca destruir, sino permanecer en el sistema recopilando datos.',
        concepto_clave_eu: 'Bere erabateko lehentasuna isilpekotasuna eta iraunkortasuna da. Ez du suntsitzea bilatzen, sisteman datuak biltzen jarraitzea baizik.',
        ejemplo_extra_es: '"Stalkerware" instalado en el móvil por una expareja para rastrear ubicación y leer mensajes de forma invisible.',
        ejemplo_extra_eu: 'Bikotekide ohi batek mugikorrean instalatutako "Stalkerwarea", kokapena arakatzeko eta mezuak modu ikusezinean irakurtzeko.',
        proteccion_es: 'Revisar exhaustivamente los permisos de las aplicaciones móviles e instalar parches de seguridad del sistema operativo.',
        proteccion_eu: 'Mugikorreko aplikazioen baimenak sakon berrikustea eta sistema eragilearen segurtasun-adabakiak instalatzea.',
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
        concepto_clave_es: 'Se diferencian del spyware tradicional en su velocidad ("golpear y huir"). Roban archivos críticos de golpe y pueden borrarse a sí mismos para no dejar rastro.',
        concepto_clave_eu: 'Spyware tradizionaletik beren abiaduran bereizten dira ("jo eta ihes egin"). Fitxategi kritikoak kolpez lapurtzen dituzte eta beren burua ezaba dezakete arrastorik ez uzteko.',
        ejemplo_extra_es: 'Un enlace de YouTube que ejecuta un script y en 3 segundos envía todas tus contraseñas de Chrome a un servidor remoto.',
        ejemplo_extra_eu: 'Script bat exekutatzen duen YouTubeko esteka, 3 segundotan zure Chrome-ko pasahitz guztiak urruneko zerbitzari batera bidaltzen dituena.',
        proteccion_es: 'No guardar contraseñas críticas en el navegador y utilizar claves de seguridad físicas (FIDO2).',
        proteccion_eu: 'Pasahitz kritikoak nabigatzailean ez gordetzea eta segurtasun-gako fisikoak (FIDO2) erabiltzea.',
        evaluacion: 1
    },

    // ==========================================
    // SEGUNDA EVALUACIÓN
    // ==========================================
    {
        id: 'koobface',
        termino_es: 'Koobface',
        termino_eu: 'Koobface',
        definicion_es: 'Gusano informático y botnet que se propagaba principalmente a través de redes sociales. Intentaba robar credenciales, mostrar publicidad maliciosa y convertir los dispositivos infectados en parte de una red controlada por atacantes.',
        definicion_eu: 'Sare sozialetan batez ere zabaltzen zen zizare informatikoa eta botnet-a. Kredentzialak lapurtzen, publizitate gaiztoa erakusten eta kutsatutako gailuak erasotzaileek kontrolatutako sare baten parte bihurtzen saiatzen zen.',
        ejemplo_es: 'Un usuario recibe un mensaje de un contacto conocido con un enlace a un vídeo. Al abrirlo, descarga malware y su cuenta empieza a enviar el mismo mensaje a sus contactos.',
        ejemplo_eu: 'Erabiltzaile batek bideo baterako esteka duen mezu bat jasotzen du ezagun batengandik. Irekita, malwarea deskargatzen du eta bere kontua mezu bera kontaktuei bidaltzen hasten da.',
        concepto_clave_es: 'Koobface combinaba ingeniería social y malware: aprovechaba la confianza entre contactos para conseguir nuevas infecciones y ampliar su botnet.',
        concepto_clave_eu: 'Koobfacek ingeniaritza soziala eta malwarea konbinatzen zituen: kontaktuen arteko konfiantza baliatzen zuen infekzio berriak lortzeko eta bere botnet-a handitzeko.',
        ejemplo_extra_es: 'Una publicación aparentemente enviada por un amigo pide instalar una actualización de un reproductor para ver un vídeo, pero el instalador contiene el malware.',
        ejemplo_extra_eu: 'Lagun batek bidalitako argitalpen baten itxurako batek bideoa ikusteko erreproduzitzaile baten eguneraketa instalatzea eskatzen du, baina instalatzaileak malwarea dauka.',
        proteccion_es: 'No abrir enlaces inesperados, verificar el mensaje por otro canal, mantener el sistema actualizado y utilizar protección antimalware.',
        proteccion_eu: 'Ez ireki ustekabeko estekarik, egiaztatu mezua beste kanal baten bidez, mantendu sistema eguneratuta eta erabili malwarearen aurkako babesa.',
        evaluacion: 2
    },
    {
        id: 'botnet',
        termino_es: 'Botnet',
        termino_eu: 'Botnet-a',
        definicion_es: 'Red de dispositivos infectados con malware que pueden recibir órdenes de un atacante sin que sus propietarios lo sepan. Puede utilizarse para lanzar ataques DDoS, enviar spam, robar datos o distribuir más malware.',
        definicion_eu: 'Jabeek jakin gabe erasotzaile baten aginduak jaso ditzaketen malwarez kutsatutako gailuen sarea. DDoS erasoak egiteko, spama bidaltzeko, datuak lapurtzeko edo malware gehiago banatzeko erabil daiteke.',
        ejemplo_es: 'Miles de ordenadores y cámaras vulnerables reciben la orden de enviar peticiones simultáneas contra una página web, saturándola.',
        ejemplo_eu: 'Milaka ordenagailu eta kamera zaurgarrik webgune baten aurka aldi berean eskaerak bidaltzeko agindua jasotzen dute, eta webgunea saturatu egiten dute.',
        concepto_clave_es: 'Cada dispositivo comprometido se denomina bot o zombi. El servidor de mando y control (C2) coordina sus acciones y permite al atacante actuar a gran escala.',
        concepto_clave_eu: 'Kutsatutako gailu bakoitzari bot edo zonbi deitzen zaio. Aginte eta kontrol zerbitzariak (C2) haien ekintzak koordinatzen ditu eta erasotzaileari eskala handian jardutea ahalbidetzen dio.',
        ejemplo_extra_es: 'Un router doméstico con la contraseña predeterminada es infectado y empieza a participar en campañas de spam mientras sigue funcionando con normalidad.',
        ejemplo_extra_eu: 'Lehenetsitako pasahitza duen etxeko bideratzaile bat kutsatu egiten da eta spam-kanpainetan parte hartzen hasten da, normaltasunez funtzionatzen jarraitzen duen bitartean.',
        proteccion_es: 'Cambiar las credenciales predeterminadas, actualizar el firmware, desactivar servicios innecesarios y vigilar el tráfico de red anómalo.',
        proteccion_eu: 'Aldatu lehenetsitako kredentzialak, eguneratu firmwarea, desaktibatu beharrezkoak ez diren zerbitzuak eta zaindu sareko trafiko anomaloa.',
        evaluacion: 2
    },
    {
        id: 'indar-gordineko-erasoa',
        termino_es: 'Ataque de fuerza bruta',
        termino_eu: 'Indar gordineko erasoa',
        definicion_es: 'Técnica que prueba de forma sistemática muchas contraseñas, claves o combinaciones hasta encontrar la correcta y obtener acceso a una cuenta o sistema.',
        definicion_eu: 'Pasahitz, gako edo konbinazio asko sistematikoki probatzen dituen teknika, zuzena aurkitu eta kontu edo sistema batera sartzeko.',
        ejemplo_es: 'Un atacante prueba miles de combinaciones contra una cuenta que todavía utiliza una contraseña corta y común, hasta conseguir iniciar sesión.',
        ejemplo_eu: 'Erasotzaile batek milaka konbinazio probatzen ditu pasahitz labur eta arrunta erabiltzen duen kontu baten aurka, saioa hastea lortu arte.',
        concepto_clave_es: 'Los ataques de diccionario utilizan listas de palabras y contraseñas filtradas; los ataques de fuerza bruta pura prueban todas las combinaciones posibles. La velocidad aumenta cuando se automatizan o se distribuyen entre muchos equipos.',
        concepto_clave_eu: 'Hiztegi-erasoek hitz eta filtratutako pasahitzen zerrendak erabiltzen dituzte; indar gordineko eraso hutsek konbinazio posible guztiak probatzen dituzte. Abiadura handitu egiten da erasoak automatizatu edo hainbat ekipoen artean banatzen direnean.',
        ejemplo_extra_es: 'Un servicio bloquea temporalmente una cuenta después de varios intentos fallidos y exige una autenticación multifactor para continuar.',
        ejemplo_extra_eu: 'Zerbitzu batek kontu bat aldi baterako blokeatzen du huts egindako hainbat saiakeraren ondoren, eta faktore anitzeko autentifikazioa eskatzen du jarraitzeko.',
        proteccion_es: 'Usar contraseñas largas y únicas, activar MFA, limitar los intentos de inicio de sesión y aplicar bloqueos o esperas progresivas.',
        proteccion_eu: 'Erabili pasahitz luze eta bakarrak, aktibatu MFA, mugatu saioa hasteko saiakerak eta ezarri blokeoak edo itxaronaldi progresiboak.',
        evaluacion: 2
    }
];

const erasoak = [
    {
        id: 'stuxnet',
        izen_es: 'Stuxnet',
        izen_eu: 'Stuxnet',
        noiz_es: '2010 // Natanz, Irán',
        noiz_eu: '2010 // Natanz, Iran',
        gertatutakoa_es: 'Stuxnet fue un gusano informático diseñado para sabotear instalaciones industriales. En la central nuclear de Natanz alteró la velocidad de centrifugadoras de enriquecimiento de uranio, provocó averías y dejó aproximadamente 1.000 máquinas dañadas.',
        gertatutakoa_eu: 'Stuxnet instalazio industrialak sabotatzeko diseinatutako zizare informatikoa izan zen. Natanzeko zentral nuklearrean uranioa aberasteko zentrifugagailuen abiadura aldatu, matxurak eragin eta gutxi gorabehera 1.000 makina kaltetu zituen.',
        ezaugarriak_es: 'Ataque dirigido contra sistemas de control industrial (ICS/SCADA); utilizó varias vulnerabilidades de día cero; se propagaba mediante dispositivos USB y redes Windows; manipulaba el proceso físico mientras ocultaba sus cambios al operador.',
        ezaugarriak_eu: 'Kontrol industrialeko sistemen (ICS/SCADA) aurkako eraso zuzendua; zero-day zaurgarritasun batzuk erabili zituen; USB gailuen eta Windows sareen bidez zabaltzen zen; prozesu fisikoa manipulatzen zuen, operadoreari aldaketak ezkutatuz.',
        eragina_es: 'Demostró que un malware puede superar el entorno digital y causar daños físicos en infraestructuras críticas.',
        eragina_eu: 'Malware batek ingurune digitala gainditu eta azpiegitura kritikoetan kalte fisikoak eragin ditzakeela erakutsi zuen.'
    },
    {
        id: 'wannacry',
        izen_es: 'WannaCry',
        izen_eu: 'WannaCry',
        noiz_es: '2017 // Ataque mundial',
        noiz_eu: '2017 // Mundu mailako erasoa',
        gertatutakoa_es: 'WannaCry fue un ataque de ransomware que comenzó a propagarse rápidamente en mayo de 2017. Cifraba los archivos de los equipos infectados y exigía un pago en Bitcoin. Afectó a más de 200.000 ordenadores en alrededor de 150 países, incluidos sistemas del servicio sanitario británico NHS.',
        gertatutakoa_eu: 'WannaCry ransomware-erasoa izan zen, 2017ko maiatzean azkar hedatzen hasi zena. Kutsatutako ekipoetako fitxategiak zifratu eta Bitcoin bidezko ordainketa eskatzen zuen. 200.000 ordenagailu baino gehiagori eragin zien 150 herrialde ingurutan, Erresuma Batuko NHS osasun-zerbitzuko sistemei barne.',
        ezaugarriak_es: 'Combinaba ransomware y gusano de red; aprovechaba la vulnerabilidad EternalBlue de sistemas Windows sin actualizar; podía propagarse automáticamente y bloquear la disponibilidad de servicios esenciales.',
        ezaugarriak_eu: 'Ransomwarea eta sareko zizare bat konbinatzen zituen; eguneratu gabeko Windows sistemen EternalBlue zaurgarritasuna baliatzen zuen; automatikoki heda zitekeen eta funtsezko zerbitzuen erabilgarritasuna blokeatu.',
        eragina_es: 'Provocó interrupciones en hospitales, empresas y organizaciones públicas, y evidenció el riesgo de no instalar parches de seguridad.',
        eragina_eu: 'Ospitale, enpresa eta erakunde publikoetan etenak eragin zituen, eta segurtasun-adabakiak ez instalatzearen arriskua agerian utzi zuen.'
    }
];