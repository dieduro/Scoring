<?php

use Illuminate\Database\Seeder;
use App\Event;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
 
        $faker = \Faker\Factory::create();
 
        
        for ($i = 0; $i < 5; $i++) {
            if ($i%2 == 0) {
                $midePor = 'time';
            }else {
                $midePor = 'reps';
            }

            Event::create([
                'category_id' => 1,
                'name' => $faker->word,
                'wod' => $faker->text($maxNbChars = 100),
                'eventNumber' => $i+1,
                'tiebreak' => $faker->boolean,
                'qtiebreaks' =>  $faker->numberBetween($min = 1, $max = 3),
                'midePor' => $midePor
            ]);
        }
        for ($i = 0; $i < 5; $i++) {
            if ($i%2 == 0) {
                $midePor = 'time';
            }else {
                $midePor = 'reps';
            }

            Event::create([
                'category_id' => 2,
                'name' => $faker->word,
                'wod' => $faker->text($maxNbChars = 100),
                'eventNumber' => $i+1,
                'tiebreak' => $faker->boolean,
                'qtiebreaks' =>  $faker->numberBetween($min = 1, $max = 3),
                'midePor' => $midePor
            ]);
        }
        for ($i = 0; $i < 5; $i++) {
            if ($i%2 == 0) {
                $midePor = 'time';
            }else {
                $midePor = 'reps';
            }

            Event::create([
                'category_id' => 3,
                'name' => $faker->word,
                'wod' => $faker->text($maxNbChars = 100),
                'eventNumber' => $i+1,
                'tiebreak' => $faker->boolean,
                'qtiebreaks' =>  $faker->numberBetween($min = 1, $max = 3),
                'midePor' => $midePor
            ]);
        }
        for ($i = 0; $i < 5; $i++) {
            if ($i%2 == 0) {
                $midePor = 'time';
            }else {
                $midePor = 'reps';
            }

            Event::create([
                'category_id' => 4,
                'name' => $faker->word,
                'wod' => $faker->text($maxNbChars = 100),
                'eventNumber' => $i+1,
                'tiebreak' => $faker->boolean,
                'qtiebreaks' =>  $faker->numberBetween($min = 1, $max = 3),
                'midePor' => $midePor
            ]);
        }
    }
}