# _Michael f. Otterstedt_

## http://
* [Latest Version of this CV](https://github.com/otterstedt/me/blob/master/CV/michael.f.otterstedt.md "CV Nightly Build") - https://github.com/otterstedt/me/blob/master/CV/michael.f.otterstedt.md
* [GitHub](https://github.com/otterstedt/ "Otterstedt GitHub") - https://github.com/otterstedt/
* [Linked In](https://www.linkedin.com/in/motterstedt/ "Michael f. Otterstedt on Linked In") - https://www.linkedin.com/in/motterstedt/

## Table of Contents
- [Objective](#objective)
- [Skills](#skills)
- [Software Engineering Work Experience](#software-engineering-work-experience)
- [Hobby Project](#hobby-project)
- [Other Work Experience](#other-work-experience)
- [Education](#education)
- [Languages](#languages)
- [Work Permits](#work-permits)


## Degree
Chalmers University of Technology, Göteborg, Sweden

_Bachelor of Science in Computer Engineering_

## Certifications

### Ericsson
_Integration Engineer - Experienced_

## Objective

* Modern Tools & Frameworks
* Developer/Integrator
* CI/CD/Test
* Environment with DevOps mindset
* Automation
* Encouraging & Passionate Environment
* Knowledge sharing between colleagues/departments
* Remote Friendly

## Skills

* Full Stack
* Highly Skilled Troubleshooting Mindset
* Quick Learner
* Beyond the Buzzwords

```
Java, Spring, Javascript, Nodejs, MQTT, Python, Scala, PHP, Bash, Linux, OSX, Windows,
AWS, JMeter, Scrum, Nginx, Ansible, Docker, Automation, Jenkins, System Administration,
SQL, NoSQL, Web, HTML, CSS, REST, Swagger, Systems Integration, IoT, GIS, Grafana,
systemd, Home Automation, Raspberry Pi, Technical Training, IntelliJ, Eclipse, Git, Svn
```
---

## Software Engineering Work Experience

### _Current_

#### CN Railways, Montreal, Canada

##### Integration Engineer

### In house monitoring platforms

* Deployment of rails/train monitoring systems to multi site clustered environments
* Troubleshooting
* Implementation of automated deployments
  * From complex full day manual error prone deployments -> 15 mins coffee break 

### Moogsoft

* Installation/Configuration of on premise components
* Working with operations team to customize the cloud platform for their needs
* Troubleshooting

### Ansible
* Projects
* Roles
* Playbooks

### Ansible Tower
* Setup Ansible projects as single point of entry for automated jobs
* Dynamic inventories using plugins/scripts 

### ServiceNow
* Development of automated flows creating incidents etc. from incoming events/alerts.
* Dynamic Ansible inventories


### _2019_

#### Ericsson, Montreal, Canada

#####  Integration Engineer

### IoT Accelerator Platform - DDM (Device & Data Management)

* API Development for Environment Monitoring, Connected Traffic
* Integration components for external systems/clients
* Automated deployments with Ansible
* IoT Gateway Development
* Thingworx Integration
* Unit/Integration Testing
* Organized Knowledge Sharing Sessions
* Training for internal and external customers
* Development of theoretical and practical training material
* Classroom Training Delivery
* Automated training environment
* Grafana Data Source Plugin
* Ansible Module Development

```
Ansible, Nodejs, Java, Javascript, Linux, AWS, Azure Event Hub, Kafka, Jenkins, Docker, 
NoSQL, REST, coap, lwm2m, Thingworx
```

### Multi Service Delivery Platform (Ericsson MSDP)

* Product customization for a US mobile operator
* Product customization to use as an e-commerce backend
* Troubleshooting, Troubleshooting & Troubleshooting.
* Training for internal and external customers.
* Development of theoretical and practical training materials
* Classroom Training Delivery
* Automated training environment setup

```
Ansible, Java, Javascript, Spring, Linux, AWS, JBoss, Oracle, HTML, CSS, XML, Jenkins, F5, Selenium
```

### _2015_

#### Evry, Göteborg, Sweden

#####  Java Consultant.

###  SAP Hybris

  * Implementing an e-commerce product database for an international hygiene brand.
  * Customer adaptation with the SAP Hybris platform
  * Collaboration with the front end team

```
Hybris, Java, Spring, Tomcat, SOAP, XML, Jenkins
```

### _2011_

#### Ericsson, Göteborg, Sweden

#####  Integration Engineer
  Business Unit Global Services

### Multi Service Delivery Platform (Ericsson MSDP)
* Product customizations and customer adaptations.
* Delivery of custom solutions for Telecom Operators
* Java, Spring, JBoss, Linux, Solaris

```
Java, Spring, JBoss, Linux, Solaris, Apache, XSL, XML
```

  _Drutt was acquired by Ericsson in 2007_

### _2007_

#### Drutt, Göteborg, Sweden

#####  Drutt Professional Services Consultant.
  Implemented, integrated and delivered solutions based on MSDP.

### Mobile Service Delivery Platform (Drutt MSDP)
* Product customizations and customer adaptations.
* Delivery of custom solutions for Telecom Operators

```
Java, Spring, JBoss, Linux, Solaris, Apache, XSL, XML, PHP
```

### _2006_

#### Prodocon, Göteborg, Sweden

##### Support/Technical Department

### Domain name management company

* Developed Intranet
* Phone/E-mail Support

```
Linux, Apache, MySQL, PHP
```

### _2005_

## Hobby Project

### _2018_

#### OTTERNET

Connecting three trans Atlantic sites with a control/monitoring center in the AWS Cloud.
* Home
* Chalet
* Car

Integration of local systems with an AWS based cloud. Consists of a mix of home made scripts/hacks and applications together with various open source software. Monitor and control the sites from web based GUIs.

Automatic Deployment locally and to the remote sites with Jenkins and Ansible

```
Nodejs, Java, HTML, CSS, Nginx, MongoDB, InfluxDB, Grafana, Python, SSH,
Home Assistant, MQTT, Bash Scripting, Ansible, Jenkins, Docker, Linux,
SELinux, AWS, Raspberry Pi, GIS, motion, Tensorflow, Open Street Map,
Leaflet, SenseHat, Caching, IoT Edge, Integration, Swagger
```
#### Sites

##### Cloud

Multiple AWS instances to integrate all local sites.
Hosts databases and web based GUIs to access data, monitor and control.
Local sites integrate towards the cloud central and provide access through remote tunnels.
Home assistant is used as a central to integrate with various 3pp cloud services and the local sites with MQTT.

###### Kartrak Web Application
Web application to render all the historical routes on a map made by the car, including front window images and sensor data like speed, direction, temperature etc.

Possibility to recreate a driven route with a car moving around on the map based on real data.
```
HTML, Javascript, CSS
```
##### Otternet API Application
REST API to retrieve all collected data
```
Nodejs, Swagger, MongoDB
```
##### Open Street Map
Local map tiles server used in Kartrak to plot routes.
```
Tileserver GL, Leaflet
```
##### Grafana
Graphical dashboards to monitor current and historical data collected from the different locations.
```
Grafana, InfluxDB, Bash
```
##### Jenkins
Automatic deployments across the different sites
```
Jenkins, Ansible
```
#### Home Site

Cameras, Switches and Sensors

Outdoor camera. Switches to control power and lights. Automate lights and media depending on presence and various actions.

Automatic coffee making to get fresh coffee when it's time to get up.

Home assistant is used as a local central to monitor and control/automate local actions.


#### Chalet Site

Cameras, Switches and Sensors

Indoor and outdoor cameras. Switches to control lights and cameras.
Home assistant is used a local central to access the data and control the local switches.

#### Car Site

Camera, GPS and Sensors

Raspberry Pi collects road view images and all the driving location data including sensors like gyroscope, temperature etc.

Saves all data locally and uploads to the cloud based central server when connection is available.


### _2016_

## Other Work Experience

### _2018_

#### Personal Business, Europe

##### Touring Services
* Tour Manager
* Driver
* Logistics

```
Planning & Management of Tour Logistics
```

### _2006_

---

## Education

### _2004_

* Chalmers University of Technology, Göteborg, Sweden

  _Additional Master of Science courses_

### _2003_

### _2002_

* Chalmers University of Technology, Göteborg, Sweden

   _Bachelor of Science in Computer Engineering_

   _Software Engineering Program_

### _1999_

* Chalmers University of Technology, Göteborg, Sweden

  _Technical Preparatory Year_

### _1998_

* Military Service, Karlskrona, Sweden

### _1997_

#### Finnvedens Gymnasium (College)
*  _Samhällsprogrammet Ekonomi_
* _Society Studies Program - Economics_

### _1994_

---

## Languages

* Swedish - Native
* English - Fluent
* French - Improving
* German - Basic

## Work Permits

* Canada - Citizen
* European Union - Swedish Citizen
* USA - Employer Specific
