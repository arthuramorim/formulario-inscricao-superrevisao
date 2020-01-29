angular.module("app", ['ngMaterial', 'ngMask'])
angular.module("app").directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />Enviando...</div>',
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
        if (val)
          $(element).show();
        else
          $(element).hide();
      });
    }
  }
})
  .controller("appCtrl", function ($scope, $element) {




    /* Listar Cursos */
    URLAPICURSO = "/api/public/api/v1/auth/curso/listar";
    $.post(
      URLAPICURSO,
      function (response, status) {
        $scope.cursos = response;
        //Adiciona a opção outro curso na lista
        $scope.cursos.push({ "nome": "Outro Curso" });
        console.log(response);
        $scope.$apply();
        //$ionicLoading.hide();

      }).fail(function (response) {
        //$ionicLoading.hide();
        console.log(response.statusText);
        $scope.$apply();
      });


    $scope.searchTerm;
    $scope.clearSearchTerm = function () {
      $scope.searchTerm = '';
    };
    // The md-select directive eats keydown events for some quick select
    // logic. Since we have a search input here, we don't need that logic.
    $element.find('input').on('keydown', function (ev) {
      ev.stopPropagation();
    });


    $scope.enviaDados = function (nome_candidato, email_candidato, celular_candidato, residencial_candidato, onde_estuda, ano_cursando, onde_pretende_estudar, curso_pretendido, outro_curso) {
      $scope.loading = true;
      $scope.btnDown = true;

      if (curso_pretendido == "Outro Curso") {

        curso_pretendido = outro_curso;

      }

      dados = [{
        "nome_candidato": nome_candidato,
        "email_candidato": email_candidato,
        "celular_candidato": celular_candidato,
        "residencial_candidato": residencial_candidato,
        "onde_estuda": onde_estuda,
        "ano_cursando": ano_cursando,
        "onde_pretende_estudar": onde_pretende_estudar,
        "curso_pretendido": curso_pretendido
      }];

      URLAPIINSCRICAO = "/api/public/api/v1/auth/inscricao/gravar";
      $.post(
        URLAPIINSCRICAO,
        {
          dados
        },
        function (response, status) {
          console.log(response);
          $scope.nome_candidato = "";
          $scope.email_candidato = "";
          $scope.celular_candidato = "";
          $scope.residencial_candidato = "";
          $scope.onde_estuda = "";
          $scope.ano_cursando = "";
          $scope.onde_pretende_estudar = "";
          $scope.curso_pretendido = "";
          $scope.outro_curso = "";
          $scope.sucesso = 1;
          $scope.loading = false;
          $scope.$apply();
        }).fail(function (response) {
          console.log(response.statusText);
          $scope.loading = false;
          $scope.$apply();
        });


    }

  });


