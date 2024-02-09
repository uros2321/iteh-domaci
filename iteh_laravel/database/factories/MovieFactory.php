<?php

namespace Database\Factories;

use App\Models\Director;
use App\Models\Genre;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'naziv' => $this->faker->unique()->word(),
            'godina_izdanja'=> $this->faker->year(),
            'opis' => $this->faker->unique()->sentence(),
            'user_id' => User::factory(),
            'zanr_id'=> Genre::factory(),
            'reditelj_id'=> Director::factory()
        ];
    }
}
