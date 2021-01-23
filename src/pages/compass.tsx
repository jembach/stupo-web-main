import React from 'react';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import IconBriefcase from '../components/icons/IconBriefcase';
import IconChat from '../components/icons/IconChat';
import IconChevronDown from '../components/icons/IconChevronDown';
import IconChevronUp from '../components/icons/IconChevronUp';
import IconDesktopComputer from '../components/icons/IconDesktopComputer';
import IconGlobeAlt from '../components/icons/IconGlobeAlt';
import IconIdendification from '../components/icons/IconIdentification';
import IconMail from '../components/icons/IconMail';
import IconMobile from '../components/icons/IconMobile';
import IconSearch from '../components/icons/IconSearch';
import IconShieldSearch from '../components/icons/IconShieldCheck';

import { Page } from '../types';

function smoothScrollTo(e, href) {
  e.preventDefault();
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
}

function Feature({
  title,
  href,
  description,
  className,
  icon: Icon,
}: {
  title: string;
  href: string;
  description: string;
  className: string;
  icon: any;
}): JSX.Element {
  return (
    <a
      href={href}
      onClick={(e) => smoothScrollTo(e, href)}
      title={title}
      className={`w-full md:w-1/2 lg:w-1/3 p-8 cursor-pointer hover:bg-stupo-compass-100 ${className}`}
    >
      <div className="flex items-center mb-6">
        <Icon height={20} width={20} className="h-6 w-6 text-stupo-main-500" />
        <div className="ml-4 text-xl">{title}</div>
      </div>
      <p className="leading-loose text-gray-500 text-md">{description}</p>
    </a>
  );
}

function List({ children }: { children: React.ReactChild[] }): JSX.Element {
  return <ul className="my-8 ml-4">{children}</ul>;
}

function ListItem({
  children,
  className = 'bg-stupo-compass-800 text-stupo-compass-300',
}: {
  children: React.ReactChild;
  className?: string;
}): JSX.Element {
  return (
    <li className="mb-6">
      <div className="flex">
        <span
          className={`flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full ${className}`}
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-4 text-base leading-6 font-medium text-white">{children}</span>
      </div>
    </li>
  );
}

function ListHeader({ children }: { children: React.ReactChild }): JSX.Element {
  return <h2 className="mb-4 text-3xl leading-8 font-extrabold text-white">{children}</h2>;
}

function ListDescription({ children }: { children: React.ReactChild }): JSX.Element {
  return <p className="mb-8 text-base leading-6 text-white">{children}</p>;
}

function ContentSectionTitle({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactChild | React.ReactChildren;
}): JSX.Element {
  return (
    <div className="md:w-1/3 w-full mb-16">
      <div className="text-9xl font-extralight mb-16">{number}</div>
      <h1 className="text-white mb-4">{title}</h1>
      {children}
    </div>
  );
}

const Compass: Page<any> = () => (
  <div>
    <Header theme="stupo-compass" img="/images/headers/compass.svg" alt="">
      <HeaderTitle>
        <span>Den richtigen weg gehen mit dem digitalen</span>
        <span className="text-stupo-main-600"> #Kompass</span>
      </HeaderTitle>
    </Header>
    <section className="container mx-auto py-16" id="content">
      <div className="mb-16 text-center">
        <h2 className="text-base text-stupo-main-600 font-semibold tracking-wide uppercase">
          Inhalt
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900  sm:text-4xl">
          Mit dem Sicherheitskompass zu mehr Sicherheit
        </p>
      </div>
      <div className="flex flex-wrap my-12 ">
        <Feature
          title="Betriebssysteme"
          href="#operating-system"
          description="Betriebssysteme sind essenziell für den Umgang mit technischen Geräten. Du solltest nie
            vergessen, dass sie dein Gerät und alle deine Daten kennen."
          className="border-b md:border-r"
          icon={IconDesktopComputer}
        />
        <Feature
          title="Suchmaschinen"
          href="#search-engine"
          description="Mit Suchanfragen und aktivierten Suchvorschlägen gibst du Informationen über dich preis,
          vielleicht hast du auch schonmal von dem Begriff Profilbildung gehört?"
          className="border-b lg:border-r"
          icon={IconSearch}
        />
        <Feature
          title="Apps"
          href="#apps"
          description="Die Apps kennen alle Daten, auf die ihnen Zugriff gewährt wird. Ist dir auch schon
          einmal aufgefallen, dass manche Apps Zugriff zu Komponenten fordern, die sie für ihre
          Funktionlität nicht benötigen?"
          className="border-b lg:border-r-0 md:border-r"
          icon={IconMobile}
        />
        <Feature
          title="E-Mail"
          href="#mail"
          description="E-Mails sind elektronische Postkarten, die ohne Gegenmaßnahmen von jedermann gelesen
          werden können."
          className="border-b lg:border-r"
          icon={IconMail}
        />
        <Feature
          title="Webauftritt"
          href="#website"
          description="Mit deinem Webauftritt übernimmst du Verantwortung für IT-Sicherheit und Datenschutz für
          dich und deine Nutzer."
          className="border-b md:border-r"
          icon={IconGlobeAlt}
        />
        <Feature
          title="Soziale Netzwerke, Navigationsdienste"
          href="#social-media"
          description="Soziale Netzwerke kennen dich, deine Freunde und Kontakte. Navigationsdienste kennen
          deinen Standort und Reiseziele. Sie wollen deine Daten."
          className="border-b"
          icon={IconChat}
        />
        <Feature
          title="Internet-Gateway/Firewall"
          href="#firewall"
          description="Das Gateway ist das Tor zum Internet und die letzte Verteidigungslinie für die Systeme
          des Nutzers."
          className="border-b lg:border-b-0 md:border-r"
          icon={IconShieldSearch}
        />
        <Feature
          title="Passwort"
          href="#password"
          description="Passwörter sind eine wichtige Maßnahme zur Sicherung der digitalen Identität."
          className="border-b lg:border-b-0 lg:border-r"
          icon={IconIdendification}
        />
        <Feature
          title="Büroanwendungen"
          href="#office"
          description="Die Büroanwendungen kennen alle Daten, die du verarbeitest."
          className="lg:border-r-0 md:border-r"
          icon={IconBriefcase}
        />
      </div>
    </section>
    <section className="text-white break-words bg-stupo-compass-600" id="operating-system">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={1} title="Betriebssysteme">
            Betriebssysteme sind essenziell für den Umgang mit technischen Geräten. Du solltest nie
            vergessen, dass sie dein Gerät und alle deine Daten kennen.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <ListDescription>
              Versuche immer datensparsame Betriebssysteme zu nutzen und konfiguriere sie so, dass:
            </ListDescription>
            <List>
              <ListItem>
                kein Mikrofon/Kamera aktiv ist (Anschalten nur im Bedarfsfall für eine Anwen­dung,
                Ausschalten nicht vergessen!)
              </ListItem>
              <ListItem>
                keine Telemetriedaten erhoben und versendet werden und keine Clouddienste verwendet
                werden
              </ListItem>
              <ListItem>keine externe Sprach- und Sprecher­erkennung erfolgt</ListItem>
              <ListItem>Verwende datensparsame Anti-Virus-Programme</ListItem>
              <ListItem>
                Sicher deine Daten auf nur kurzzeitig angeschlossenen Systemen, am Besten auf DVD
                (Schutz vor Ransomware)
              </ListItem>
            </List>
            <ListHeader>Spezielle Tipps:</ListHeader>
            <ListDescription>
              Falls du Windows 10 benutzen musst, besteht erheblicher Konfigurationsbedarf!
            </ListDescription>
            <List>
              <ListItem>benutzerdefinierte Installation</ListItem>
              <ListItem>
                bereitgestellte Datenschutzoptionen (u.a. zu WerbeID, Schreibverhalten, Nutzer-/App
                Protokollierung)
              </ListItem>
              <ListItem>lokale Konten (kein Microsoft-Konto)</ListItem>
              <ListItem>Apps Dritter (z.B. Browser, E-Mail)</ListItem>
              <ListItem>
                niedrigstes Telemetrieniveau (basic, trotzdem keine vollständige Sperrung)
              </ListItem>
              <ListItem>
                Beachten die Deaktivierungshinweise zu Cortana, Spracherkennung, Verbindungs- und
                Fehlerberichterrstatttung und Clouddiensten als Datenspeicher
              </ListItem>
              <ListItem>
                Konfigurationsüberprüfung nach Update, da diese oft zurückgesetzt werden!
              </ListItem>
              <ListItem>
                Kennst du Linux? **PC** (z.B. DebianEdu) **Mobile** (z.B. LineageOS, Ubuntu Touch)
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#search-engine')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Suchmaschinen
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-blog-complement-600" id="search-engine">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={2} title="Suchmaschinen">
            Mit Suchanfragen und aktivierten Suchvorschlägen gibst du Informationen über dich preis,
            vielleicht hast du auch schonmal von dem Begriff Profilbildung gehört?
          </ContentSectionTitle>
          <div className="w-full md:flex-1 md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <ListDescription>Kennst du diese Suchmaschinen?</ListDescription>
            <List>
              <ListItem className="bg-stupo-blog-complement-800 text-stupo-blog-complement-300">
                lite.qwant.com
              </ListItem>
              <ListItem className="bg-stupo-blog-complement-800 text-stupo-blog-complement-300">
                MetaGer.de
              </ListItem>
              <ListItem className="bg-stupo-blog-complement-800 text-stupo-blog-complement-300">
                YaCy.net
              </ListItem>
            </List>
            <ListHeader>Extra für Kinder:</ListHeader>
            <List>
              <ListItem className="bg-stupo-blog-complement-800 text-stupo-blog-complement-300">
                Kennst du die Kindersuchmaschine blinde-kuh.de oder qwantjunior.com?
              </ListItem>
              <ListItem className="bg-stupo-blog-complement-800 text-stupo-blog-complement-300">
                Diese sind Analytics-frei und für den besonderen Schutz von Kindern geeignet.
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#apps')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Apps
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-main-600" id="apps">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={3} title="Apps">
            Die Apps kennen alle Daten, auf die ihnen Zugriff gewährt wird. Ist dir auch schon
            einmal aufgefallen, dass manche Apps Zugriff zu Komponenten fordern, die sie für ihre
            Funktionlität nicht benötigen?
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <List>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Überprüfe App-Zugriffe und Verbindungen vor dem Einsatz
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Konfiguriere die Apps datensparsam
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Vorzug für lokale Apps (Need-to-know)
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Blockiere z.B. Zugriffe durch die App Einstellungen auf dem Telefon (z.B. Mikrofon,
                Kamera, Speicher)
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Verwende z.B. &quot;BLOKADA&quot; zur Sperrung von Trackern
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Blockiere Zugriffe auf Positionsdaten (WLAN,
                [IP-Adresse](https://de.ryte.com/wiki/IP-Adresse &quot;Eine IP-Adresse (Kurzform
                für: Internet Protocol Address) ist eine Netzwerkadresse, die für jedes Gerät in
                einem Netzwerk nur einmal vergeben werden darf.&quot;), GPS)
              </ListItem>
              <ListItem className="bg-stupo-main-800 text-stupo-main-300">
                Kennest du offene App-Downloads wie &quot;F-Droid&quot;?
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#mail')}
        >
          <IconChevronDown height={24} className="mx-4" />
          E-Mail
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-blog-600" id="mail">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={4} title="E-Mail">
            E-Mails sind elektronische Postkarten, die ohne Gegenmaßnahmen von jedermann gelesen
            werden können.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <ListDescription>Kennst du diese Suchmaschinen?</ListDescription>
            <List>
              <ListItem className="bg-stupo-blog-800 text-stupo-blog-300">
                Interesse an sicheren E-Mail Anbietern? Infos bekommst du in den Links
              </ListItem>
              <ListItem className="bg-stupo-blog-800 text-stupo-blog-300">
                Konfiguriere eine verschlüsselte Verbindung zum E-Mail Abruf und Versand
              </ListItem>
              <ListItem className="bg-stupo-blog-800 text-stupo-blog-300">
                Lass dir immer den langen E-Mail Briefkopf (Header) anzeigen und überprüfe die
                E-Mail Adressen
              </ListItem>
              <ListItem className="bg-stupo-blog-800 text-stupo-blog-300">
                Verwende datensparsame Virenscanner!
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#website')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Webauftritt
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-teacher-complement-600" id="website">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={5} title="Webauftritt">
            Mit deinem Webauftritt übernimmst du Verantwortung für IT-Sicherheit und Datenschutz für
            dich und deine Nutzer.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <ListDescription>Kennst du diese Suchmaschinen?</ListDescription>
            <List>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Nutze lokale Schriftarten, Übersetzungs- und Vorlesedienste
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Gebe Löschfristen für gespeicherte Daten an und halte sie ein
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Prüfe auf voreingestellte, ungewollte Analytics-Funktionen der Software
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Verwende Opt-In statt Opt-Out
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Verwende IP-Adressanonymisierung auf Metaebene
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Vermeide Webfonts, Analytics
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Teste deinen Webauftritt z.B. unter privacyscore.org, webbkoll.dataskydd.net,
                ssllabs.com/ssltest
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Login Bereiche nur mit https!
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Nutze Videos nur vom genutzten Server bzw. lokal gespeichert
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Nutze lokale Captcha-Skripte
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Nutze lokale Suchfunktionen
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Kennst du Open Data Karten- und Navigationsdienste z.B. &quot;Openstreetmap&quot;?
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Prüfe bei Webbaukästen auf integrierte Verbindungsaufbauten an Dritte und
                deaktiviere diese
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Informiere dich zu datensparsamen Terminplanern
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Binde Vorlesedienste, Clouddienste und Übersetzungen lokal ein
              </ListItem>
              <ListItem className="bg-stupo-teacher-complement-800 text-stupo-teacher-complement-300">
                Vermeide eine Kombination von Drittanbietern bei Verwendung von anonymisierten
                Diensten (z.B. anonymisierte Analytics und Webfonts)
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#social-media')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Soziale Netzwerke, Navigationsdienste
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-tools-600" id="social-media">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={6} title="Soziale Netzwerke, Navigationsdienste">
            Soziale Netzwerke kennen dich, deine Freunde und Kontakte. Navigationsdienste kennen
            deinen Standort und Reiseziele. Sie wollen deine Daten.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            {/* <ListDescription>Kennst du diese Suchmaschinen?</ListDescription> */}
            <List>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Kennst du dezentrale, Open Source basierte soziale Netzwerke? (z.B. aus dem
                Fediverse)
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Erkenne und blockiere Zugriffs- und Trackingtechniken (z.B. über Webfonts und APIs),
                nutze die Hilfsmittel aus den Kategorien Internetbrowser und Suchmaschinen (z.B.
                &quot;Privacy Badger&quot; und webbkoll.dataskydd.net zur Erkennung und BLOKADA zur
                Unterbindung)
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Kennst du datensparsame Messenger (z.B. &quot;Jabber&quot;/&quot;XMPP&quot;)?
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Kennst du datensparsame IRC Klienten (z.B. &quot;Xchat&quot;) bzw. E-Mail Server
                Netzwerke (Chat over E-Mail)?
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Aktiviere Ende-zu-Ende-Verschlüsselung (OMEMO)
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Kennst du alternative Navigations­dienste?
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Vermeide datenreiche Messenger (z.B. WhatsApp)
              </ListItem>
              <ListItem className="bg-stupo-tools-800 text-stupo-tools-300">
                Abmelden? (z.B. Whatsapp, Facebook)
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#firewall')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Internet-Gateway/Firewall
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-tools-complement-600" id="firewall">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={7} title="Internet-Gateway/Firewall">
            Das Gateway ist das Tor zum Internet und die letzte Verteidigungslinie für die Systeme
            des Nutzers.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            {/* <ListDescription>Kennst du diese Suchmaschinen?</ListDescription> */}
            <List>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Unterdrücke Telemetrie
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Konfiguriere und verwende Fire­walls zur Filterung im Netzwerk
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Prüfe und konfiguriere App-Zugriffe (z.B. bei exodus-privacy.eu.org)
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Blockiere unerwünschte DNS, Teste SSL-Sicherheit für eigene Server (z.B.
                Webauftritt) mit SSL-Labs
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Nutze Messengerdienste mit eigenen und lokalen Servern. Achte auf die Absicherung!
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                Teste Verbindungen mit Wireshark
              </ListItem>
              <ListItem className="bg-stupo-tools-complement-800 text-stupo-tools-complement-300">
                über DNS kannst du unerwünschte Dienste ausblenden, deshalb konfiguriere und
                betreibe eigene DNS Server oder den des Providers, keine Drittanbieter, verwende
                verschlüsselte DNS Anfragen (DNS over HTTPS)
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#password')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Passwort
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-pupil-600" id="password">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={8} title="Passwort">
            Passwörter sind eine wichtige Maßnahme zur Sicherung der digitalen Identität.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            {/* <ListDescription>Kennst du diese Suchmaschinen?</ListDescription> */}
            <List>
              <ListItem className="bg-stupo-pupil-800 text-stupo-pupil-300">
                Verwende lange Passwörter (mind. 10 Zeichen) mit Sonderzeichen und Zahlen ohne
                bekannte Wörter
              </ListItem>
              <ListItem className="bg-stupo-pupil-800 text-stupo-pupil-300">
                Verwende jedes Passwort nur für einen Dienst/Account
              </ListItem>
              <ListItem className="bg-stupo-pupil-800 text-stupo-pupil-300">
                Bilde und merke dir einen geheimen Satz und erzeuge daraus das Passwort anhand z. B.
                der Anfangsbuchstaben und Zahlen, Beispiel: „**I**m **U**rlaub **2**019 **h**atte
                **i**ch **e**inen **b**lauen **B**adeanzug **m**it **1**7 **S**treifen **u**nd **8**
                **P**unkten!” **IU2hiebBm1Su8P**!
              </ListItem>
              <ListItem className="bg-stupo-pupil-800 text-stupo-pupil-300">
                Alternativ kannst du lokale Passwortgeneratoren und lokale Open Source
                Passwortmanager nutzen
              </ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#office')}
        >
          <IconChevronDown height={24} className="mx-4" />
          Büroanwendungen
          <IconChevronDown height={24} className="mx-4" />
        </button>
      </div>
    </section>
    <section className="text-white break-words bg-stupo-quiz-600" id="office">
      <div className="container mx-auto py-16 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col md:flex-row">
          <ContentSectionTitle number={9} title="Büroanwendungen">
            Die Büroanwendungen kennen alle Daten, die du verarbeitest.
          </ContentSectionTitle>
          <div className="md:flex-1 w-full md:ml-32">
            <ListHeader>Tipps:</ListHeader>
            <List>
              <ListItem className="bg-stupo-quiz-800 text-stupo-quiz-300">
                Verwende lokale Rechtschreib- und Übersetzungsunterstützung.
              </ListItem>
              <ListItem className="bg-stupo-quiz-800 text-stupo-quiz-300">
                Achte bei Cloud-basierten Anwendungen mit Abo-Modell (u.a. Office 365) und Microsoft
                Office auf die Datenschutzanalyse
              </ListItem>
            </List>
            <ListHeader>Open Source Alternativen:</ListHeader>
            <ListDescription>Kennst du lokal installierte Open Source Anwendungen?</ListDescription>
            <List>
              <ListItem className="bg-stupo-quiz-800 text-stupo-quiz-300">LibreOffice</ListItem>
              <ListItem className="bg-stupo-quiz-800 text-stupo-quiz-300">GIMP</ListItem>
            </List>
          </div>
        </div>
        <button
          type="button"
          className="text-center mt-8 flex justify-center items-center font-bold text-lg uppercase"
          onClick={(e) => smoothScrollTo(e, '#content')}
        >
          <IconChevronUp height={24} className="mx-4" />
          An den Anfang
          <IconChevronUp height={24} className="mx-4" />
        </button>
      </div>
    </section>
  </div>
);

Compass.title = 'IT-Kompass | Stupo';
Compass.keywords = 'IT-Kompass, Schüler, Medienbildung';
Compass.description =
  'Der IT-Kompass ist ein an der Otto-von-Guericke Universität entwickelter Leitfaden wie du sicher und ohne auszuspioniert zu werden das Internet benutzen kannst.';

export default Compass;
