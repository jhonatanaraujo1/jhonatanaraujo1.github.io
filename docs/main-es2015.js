(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jhona\Desktop\Workspace\info-team-software\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FooterComponent);



/***/ }),

/***/ "NKeB":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/home.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<main>\r\n  <div\r\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center\"\r\n    style=\"min-height: 75vh;\"\r\n  >\r\n    <div\r\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\r\n      style='background-image:url(\"../../../assets/img/tablewithus.jpg\")'\r\n    >\r\n      <span\r\n        id=\"blackOverlay\"\r\n        class=\"w-full h-full absolute opacity-75 bg-black\"\r\n      ></span>\r\n    </div>\r\n    <div class=\"container relative mx-auto\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full lg:w-6/13 px-4 ml-auto mr-auto text-center\">\r\n          <div class=\"pr-12\">\r\n            <h1 class=\"text-white font-semibold text-5xl\">\r\n              Cresça com a Info Team Software\r\n            </h1>\r\n            <p class=\"mt-4 text-lg text-gray-300\">\r\n\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden\"\r\n      style=\"height: 70px;\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-gray-300 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n  <section class=\"pb-20 bg-gray-300 -mt-24\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap\">\r\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\r\n              >\r\n                <i class=\"fas fa-cogs\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Team as a Service</h6>\r\n              <p class=\"mt-2 mb-4 text-gray-600\">\r\n                A Info Team Software atua como serviço (TaaS) é uma equipe dedicada composta por vários especialistas contratados para ajudar a impulsionar o design, o desenvolvimento e outros esforços de transformação digital de produtos.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400\"\r\n              >\r\n                <i class=\"fas fa-retweet\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Direct Reponse Marketing</h6>\r\n              <p class=\"mt-2 mb-4 text-gray-600\">\r\n                Atuamos na criação estratégia de marketing de resposta direta (Direct Response Marketing), onde o objetivo é incentivar uma resposta imediata dos consumidores para gerar rapidamente novos leads. A resposta pode ser qualquer ação, como visitar um site, fazer uma compra ou até mesmo compartilhar um post nas redes sociais.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\r\n          >\r\n            <div class=\"px-4 py-5 flex-auto\">\r\n              <div\r\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400\"\r\n              >\r\n                <i class=\"fas fa-fingerprint\"></i>\r\n              </div>\r\n              <h6 class=\"text-xl font-semibold\">Growth company</h6>\r\n              <p class=\"mt-2 mb-4 text-gray-600\">\r\n                Com base em nosso Know How em vendas e elaboração de soluções digitais,\r\n                atuaremos no posicionamento de sua empresa para entender e aplicar as melhores ferramentas de gestão\r\n                com o foco em geração de resultados.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap items-center mt-32\">\r\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100\"\r\n          >\r\n            <i class=\"fas fa-user-friends text-xl\"></i>\r\n          </div>\r\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\r\n            Trabalhar conosco é um prazer\r\n          </h3>\r\n          <p\r\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700\"\r\n          >\r\n            A Info Team Software está posicionada em meio às grandes tendências do mercado atual, e se utiliza das melhores\r\n            práticas de gestão e desenvolvimento de soluções para criação e posicionamento de produtos que se conectem\r\n            com as necessidades dos clientes\r\n          </p>\r\n\r\n        </div>\r\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600\"\r\n          >\r\n            <img\r\n              alt=\"...\"\r\n              src=\"../../../assets/img/workwithus.jpg\"\r\n              class=\"w-full align-middle rounded-t-lg\"\r\n            />\r\n            <blockquote class=\"relative p-8 mb-4\">\r\n              <svg\r\n                preserveAspectRatio=\"none\"\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                viewBox=\"0 0 583 95\"\r\n                class=\"absolute left-0 w-full block\"\r\n                style=\"height: 95px; top: -94px;\"\r\n              >\r\n                <polygon\r\n                  points=\"-30,95 583,95 583,65\"\r\n                  class=\"text-pink-600 fill-current\"\r\n                ></polygon>\r\n              </svg>\r\n              <h4 class=\"text-xl font-bold text-white\">\r\n                Top Notch Services\r\n              </h4>\r\n              <p class=\"text-md font-light mt-2 text-white\">\r\n                The Arctic Ocean freezes every winter and much of the\r\n                sea-ice then thaws every summer, and that process will\r\n                continue whatever happens.\r\n              </p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"relative py-20\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20\"\r\n      style=\"height: 80px;\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-white fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"items-center flex flex-wrap\">\r\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\r\n          <img\r\n            alt=\"...\"\r\n            class=\"max-w-full rounded-lg shadow-lg\"\r\n            src=\"../../../assets/img/startwithus.jpg\"\r\n          />\r\n        </div>\r\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\r\n          <div class=\"md:pr-12\">\r\n            <div\r\n              class=\"text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300\"\r\n            >\r\n              <i class=\"fas fa-rocket text-xl\"></i>\r\n            </div>\r\n            <h3 class=\"text-3xl font-semibold\">A growing company</h3>\r\n            <p class=\"mt-4 text-lg leading-relaxed text-gray-600\">\r\n              O growth marketing é uma metodologia que se propõe a atuar no crescimento de negócios\r\n              disruptivos que desejam crescer exponencialmente\r\n            </p>\r\n            <ul class=\"list-none mt-6\">\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3\"\r\n                    ><i class=\"fas fa-fingerprint\"></i\r\n                    ></span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-gray-600\">\r\n                      Cuidamos da identidade do seu produto\r\n                    </h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3\"\r\n                    ><i class=\"fab fa-html5\"></i\r\n                    ></span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-gray-600\">Desenvolmemos produtos de forma ágil e segura</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"py-2\">\r\n                <div class=\"flex items-center\">\r\n                  <div>\r\n                    <span\r\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3\"\r\n                    ><i class=\"far fa-paper-plane\"></i\r\n                    ></span>\r\n                  </div>\r\n                  <div>\r\n                    <h4 class=\"text-gray-600\">Posicionamento, lançamento e otimização dos produtos, com o foco em resultados</h4>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"pt-20 pb-48\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold\">Aqui estão alguns dos nossos <strong>Heróis</strong></h2>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap justify-center\">\r\n\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"./assets/img/team-2-800x800.jpeg\"\r\n              class=\"shadow-lg rounded-full max-w-full mx-auto\"\r\n              style=\"max-width: 120px; max-height: 120px; \"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">João Pedro</h5>\r\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\r\n                Marketing Specialist\r\n              </p>\r\n              <div class=\"mt-6\">\r\n\r\n                <button\r\n                  class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-linkedin\"></i></button\r\n                >\r\n\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i></button\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"./assets/img/team-3-800x800.jpeg\"\r\n              class=\"shadow-lg rounded-full max-w-full mx-auto\"\r\n              style=\"max-width: 120px; max-height: 120px; \"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Marcelo Tavares</h5>\r\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\r\n                Software Engineer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n\r\n                <button\r\n                  class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-linkedin\"></i></button\r\n                >\r\n\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i></button\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\r\n          <div class=\"px-6\">\r\n            <img\r\n              alt=\"...\"\r\n              src=\"./assets/img/team-4-470x470.jpeg\"\r\n              class=\"shadow-lg rounded-full max-w-full mx-auto\"\r\n              style=\"max-width: 120px; max-height: 120px; \"\r\n            />\r\n            <div class=\"pt-6 text-center\">\r\n              <h5 class=\"text-xl font-bold\">Jhonatan Sousa</h5>\r\n              <p class=\"mt-1 text-sm text-gray-500 uppercase font-semibold\">\r\n                Software Engineer\r\n              </p>\r\n              <div class=\"mt-6\">\r\n\r\n                <button\r\n                  class=\"bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-linkedin\"></i></button\r\n                >\r\n\r\n                <button\r\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                >\r\n                  <i class=\"fab fa-google\"></i></button\r\n                >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n  <section class=\"pb-20 relative block bg-gray-900\">\r\n    <div\r\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20\"\r\n      style=\"height: 80px;\"\r\n    >\r\n      <svg\r\n        class=\"absolute bottom-0 overflow-hidden\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        preserveAspectRatio=\"none\"\r\n        version=\"1.1\"\r\n        viewBox=\"0 0 2560 100\"\r\n        x=\"0\"\r\n        y=\"0\"\r\n      >\r\n        <polygon\r\n          class=\"text-gray-900 fill-current\"\r\n          points=\"2560 0 2560 100 0 100\"\r\n        ></polygon>\r\n      </svg>\r\n    </div>\r\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\r\n      <div class=\"flex flex-wrap text-center justify-center\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <h2 class=\"text-4xl font-semibold text-white\">Construa o seu melhor com os melhores!</h2>\r\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-gray-500\">\r\n            Faça mais do que apenas integrar funções: conquiste um crescimento previsível,\r\n            converta leads cada vez mais qualificados, leve oportunidades até as vendas e\r\n            aumente a eficácia dos times no funil de vendas!\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"flex flex-wrap mt-12 justify-center\">\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-medal text-xl\"></i>\r\n          </div>\r\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Excelentes serviços\r\n          </h6>\r\n          <p class=\"mt-2 mb-4 text-gray-500\">\r\n            Nos desenvolvemos sua ideia com Patente, originalidade, inovação,\r\n            transformação que são em geral tudo que uma empresa sucesso deseja.\r\n\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-poll text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\r\n            Cresça sua empresa\r\n          </h5>\r\n          <p class=\"mt-2 mb-4 text-gray-500\">\r\n            Uma mentalidade de crescimento está no centro da cultura Info Team software,\r\n            elevamos a sua marca através de soluções de marketing inovadoras e estratégias personalizadas.\r\n          </p>\r\n        </div>\r\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\r\n          <div\r\n            class=\"text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\r\n          >\r\n            <i class=\"fas fa-lightbulb text-xl\"></i>\r\n          </div>\r\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Brainstorm time</h5>\r\n          <p class=\"mt-2 mb-4 text-gray-500\">\r\n            Nosso momento de criatividade, conseguimos extrair soluções de forma colaborativa e estimulando “pensarem fora da caixa”.\r\n            Além disso, a dinâmica do brainstorming favorece a construção de uma cultura empresarial focada em inovação\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"relative block py-24 lg:pt-0 bg-gray-900\">\r\n    <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\r\n        <div class=\"w-full lg:w-6/12 px-4\">\r\n          <div\r\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300\"\r\n          >\r\n            <div class=\"flex-auto p-5 lg:p-10\">\r\n              <h4 class=\"text-2xl font-semibold\">Deseja trabalhar conosco?</h4>\r\n              <p class=\"leading-relaxed mt-1 mb-4 text-gray-600\">\r\n                Envie uma mensagem responderemos em 24Horas.\r\n              </p>\r\n              <div class=\"relative w-full mb-3 mt-8\">\r\n                <label\r\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\r\n                  for=\"full-name\"\r\n                >Nome completo</label\r\n                ><input\r\n                type=\"text\"\r\n                class=\"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                placeholder=\"Nome Completo\"\r\n                style=\"transition: all 0.15s ease 0s;\"\r\n              />\r\n              </div>\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\r\n                  for=\"email\"\r\n                >Email</label\r\n                ><input\r\n                type=\"email\"\r\n                class=\"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                placeholder=\"Email\"\r\n                style=\"transition: all 0.15s ease 0s;\"\r\n              />\r\n              </div>\r\n              <div class=\"relative w-full mb-3\">\r\n                <label\r\n                  class=\"block uppercase text-gray-700 text-xs font-bold mb-2\"\r\n                  for=\"message\"\r\n                >Mensagem</label\r\n                ><textarea\r\n                rows=\"4\"\r\n                cols=\"80\"\r\n                class=\"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\r\n                placeholder=\"Escreva uma Mensagem...\"\r\n              ></textarea>\r\n              </div>\r\n              <div class=\"text-center mt-6\">\r\n                <button\r\n                  class=\"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1\"\r\n                  type=\"button\"\r\n                  style=\"transition: all 0.15s ease 0s;\"\r\n                >\r\n                  Enviar Mensagem\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 \"\r\n>\r\n  <div\r\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\r\n  >\r\n    <div\r\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\r\n    >\r\n      <a\r\n        class=\"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white\"\r\n        href=\"/\"\r\n      >Info Team Software</a\r\n      >\r\n      <button\r\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\r\n        type=\"button\"\r\n        (click)=\"toggleNavbar()\"\r\n      >\r\n        <i class=\"text-white fas fa-bars\"></i>\r\n      </button>\r\n    </div>\r\n    <div\r\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none\"\r\n      [ngClass]=\"{'hidden': !showMenu, 'block': showMenu}\"\r\n    >\r\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\r\n        <li class=\"flex items-center\">\r\n\r\n        </li>\r\n      </ul>\r\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\r\n        <li class=\"flex items-center\">\r\n\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'info-team-software';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AppComponent);



/***/ }),

/***/ "TB96":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "NKeB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], HomeComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"relative bg-gray-300 pt-8 pb-6\">\r\n  <div\r\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20\"\r\n    style=\"height: 80px;\"\r\n  >\r\n    <svg\r\n      class=\"absolute bottom-0 overflow-hidden\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      preserveAspectRatio=\"none\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 2560 100\"\r\n      x=\"0\"\r\n      y=\"0\"\r\n    >\r\n      <polygon\r\n        class=\"text-gray-300 fill-current\"\r\n        points=\"2560 0 2560 100 0 100\"\r\n      ></polygon>\r\n    </svg>\r\n  </div>\r\n  <div class=\"container mx-auto px-4\">\r\n    <div class=\"flex flex-wrap\">\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <h4 class=\"text-3xl font-semibold\">Vamos manter contato!</h4>\r\n        <h5 class=\"text-lg mt-0 mb-2 text-gray-700\">\r\n          Encontre-nos em qualquer uma dessas plataformas, respondemos em 1-2 dias úteis.\r\n        </h5>\r\n        <div class=\"mt-6\">\r\n          <button\r\n            class=\"bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"flex fab fa-twitter\"></i></button\r\n          ><button\r\n            class=\"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"flex fab fa-facebook-square\"></i></button\r\n          ><button\r\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"flex fab fa-dribbble\"></i></button\r\n          ><button\r\n            class=\"bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"\r\n            type=\"button\"\r\n          >\r\n            <i class=\"flex fab fa-github\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-full lg:w-6/12 px-4\">\r\n        <div class=\"flex flex-wrap items-top mb-6\">\r\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\r\n            <span\r\n              class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\"\r\n              >Useful Links</span\r\n            >\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/presentation\"\r\n                  >About Us</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://blog.creative-tim.com\"\r\n                  >Blog</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.github.com/creativetimofficial\"\r\n                  >Github</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://www.creative-tim.com/bootstrap-themes/free\"\r\n                  >Free Products</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"w-full lg:w-4/12 px-4\">\r\n            <span\r\n              class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\"\r\n              >Other Resources</span\r\n            >\r\n            <ul class=\"list-unstyled\">\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md\"\r\n                  >MIT License</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/terms\"\r\n                  >Terms &amp; Conditions</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/privacy\"\r\n                  >Privacy Policy</a\r\n                >\r\n              </li>\r\n              <li>\r\n                <a\r\n                  class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\"\r\n                  href=\"https://creative-tim.com/contact-us\"\r\n                  >Contact Us</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr class=\"my-6 border-gray-400\" />\r\n    <div\r\n      class=\"flex flex-wrap items-center md:justify-between justify-center\"\r\n    >\r\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\r\n        <div class=\"text-sm text-gray-600 font-semibold py-1\">\r\n          Copyright © {{date}} Info Team Software.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_landing_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/landing/home.component */ "TB96");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_landing_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let NavbarComponent = class NavbarComponent {
    constructor() {
        this.showMenu = true;
    }
    toggleNavbar() {
        this.showMenu = !this.showMenu;
    }
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NavbarComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_landing_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/home.component */ "TB96");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _pages_landing_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map