<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    
    return view('welcome');

});
/*
Route::post('api/v1/auth/entrar', 'AuthenticateController@authJwt');
Route::post('api/v1/auth/curso/listar', 'CursoController@listar');
Route::post('api/v1/auth/municipio/listar', 'MunicipioController@listar');
Route::post('api/v1/auth/pesquisa/gravar', 'PesquisaController@gravar');*/


Route::post('api/v1/auth/inscricao/gravar', 'InscricaoController@gravar');
Route::post('api/v1/auth/curso/listar', 'CursoController@listar');
