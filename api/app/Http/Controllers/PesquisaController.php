<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class PesquisaController extends Controller
{
   
   public function gravar(Request $request){

   	$dados = $request->input('dados');
	//$dados = json_decode($dados);

	$cursos = $dados[0]['formCursos'];
	//print_r($dados[1]);
		
	$pesquisa_id = DB::table('pesquisa')->insertGetId($dados[1]);
	

	foreach ($cursos as $key => $value) {

		DB::table('curpes')->insert(['curso_id' => $cursos[$key], 'pesquisa_id' => $pesquisa_id]);
	}

   }
	
}
