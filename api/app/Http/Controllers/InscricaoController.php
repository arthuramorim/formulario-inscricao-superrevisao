<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class InscricaoController extends Controller
{
    public function gravar(Request $request){

   	$dados = $request->input('dados');

	DB::table('inscricoes')->insert($dados);


   }
	
}
