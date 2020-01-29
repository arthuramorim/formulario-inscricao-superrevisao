<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
      //use Notifiable;

    protected $table = 'curso';

    protected $primaryKey = 'curso_id';

    public $timestamps = false;

    protected $fillable = [
        'nome', 'ativo', 
    ];

}
