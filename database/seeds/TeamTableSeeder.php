<?php

use Illuminate\Database\Seeder;
use App\Team;

class TeamTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            Team::create([
                'name' => $faker->word,
                'ath1' => $faker->name,
                'ath2' => $faker->name,
                'box' => $faker->word,
                'category_id' => $faker->numberBetween($min = 1, $max = 4)
            ]);
        }
    }
}
