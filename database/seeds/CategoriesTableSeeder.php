<?php

use Illuminate\Database\Seeder;
use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
            Category::create([
                'sexo' => 'Hombres',
                'nivel' => 'RxD'
            ]);
            Category::create([
                'sexo' => 'Mujeres',
                'nivel' => 'RxD'
            ]);
            Category::create([
                'sexo' => 'Hombres',
                'nivel' => 'Scaled'
            ]);
            Category::create([
                'sexo' => 'Mujeres',
                'nivel' => 'Scaled'
            ]);

        }
    }

