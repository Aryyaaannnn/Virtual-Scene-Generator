document.getElementById('generate').addEventListener('click', () => {
    const weather = document.getElementById('weather').value;
    const season = document.getElementById('season').value;
    const scene = document.getElementById('scene').value;

    const loading = document.getElementById('loading');
    const sceneImage = document.getElementById('sceneImage');
    const sceneCaption = document.getElementById('sceneCaption');
    const sceneDescription = document.getElementById('sceneDescription');
    const sceneDetails = document.getElementById('sceneDetails');

    const manualImages = {
        "sunny summer field": {
            image: "sunny-summer-field.jpg",
            caption: "Sunny Summer Field",
            description: "A bright sunny day with golden fields under the warm summer sun."
        },
        "sunny summer mountain": {
            image: "sunny-summer-mountain.jpg",
            caption: "Sunny Summer Mountain",
            description: "A clear sky over a tall mountain range with the sun shining brightly."
        },
        "sunny summer market": {
            image: "sunny-summer-market.jpg",
            caption: "Sunny Summer Market",
            description: "A lively market under the summer sun, bustling with activity."
        },
        "sunny summer beach": {
            image: "sunny-summer-beach.jpg",
            caption: "Sunny Summer Beach",
            description: "A golden beach with the sun shining brightly over the waves."
        },
        "sunny summer forest": {
            image: "sunny-summer-forest.jpg",
            caption: "Sunny Summer Forest",
            description: "A peaceful forest on a sunny day, with sunlight filtering through the trees."
        },
        "sunny summer desert": {
            image: "sunny-summer-desert.jpg",
            caption: "Sunny Summer Desert",
            description: "A hot desert with endless sand dunes under a clear blue sky."
        },
        "sunny winter field": {
            image: "sunny-winter-field.jpg",
            caption: "Sunny Winter Field",
            description: "A bright winter day with snow covering the field, with the sun shining brightly."
        },
        "sunny winter mountain": {
            image: "sunny-winter-mountain.jpg",
            caption: "Sunny Winter Mountain",
            description: "Snow-capped mountains under a clear winter sky with the sun shining."
        },
        "sunny winter market": {
            image: "sunny-winter-market.jpg",
            caption: "Sunny Winter Market",
            description: "A market in winter with people enjoying the sunny weather despite the cold."
        },
        "sunny winter beach": {
            image: "sunny-winter-beach.jpg",
            caption: "Sunny Winter Beach",
            description: "A winter beach with the sun shining on the ocean while the air is cold."
        },
        "sunny winter forest": {
            image: "sunny-winter-forest.jpg",
            caption: "Sunny Winter Forest",
            description: "A serene winter forest where the snow-covered trees sparkle in the sunlight."
        },
        "sunny winter desert": {
            image: "sunny-winter-desert.jpg",
            caption: "Sunny Winter Desert",
            description: "A desert with clear skies, a chill in the air, and the sun warming the sand."
        },
        "sunny autumn field": {
            image: "sunny-autumn-field.jpg",
            caption: "Sunny Autumn Field",
            description: "A golden field in autumn with leaves scattered on the ground under a sunny sky."
        },
        "sunny autumn mountain": {
            image: "sunny-autumn-mountain.jpg",
            caption: "Sunny Autumn Mountain",
            description: "A mountain covered in autumn colors, basking in the warm sunlight."
        },
        "sunny autumn market": {
            image: "sunny-autumn-market.jpg",
            caption: "Sunny Autumn Market",
            description: "A market filled with autumn produce, under a clear and bright sunny sky."
        },
        "sunny autumn beach": {
            image: "sunny-autumn-beach.jpg",
            caption: "Sunny Autumn Beach",
            description: "An autumn beach where the waves crash against the shore in the golden sunlight."
        },
        "sunny autumn forest": {
            image: "sunny-autumn-forest.jpg",
            caption: "Sunny Autumn Forest",
            description: "A vibrant forest with autumn leaves glowing in the sunlight."
        },
        "sunny autumn desert": {
            image: "sunny-autumn-desert.jpg",
            caption: "Sunny Autumn Desert",
            description: "A desert with a cool autumn breeze and the sun low in the sky."
        },
        "sunny spring field": {
            image: "sunny-spring-field.jpg",
            caption: "Sunny Spring Field",
            description: "A blooming field in spring with fresh flowers and vibrant colors."
        },
        "sunny spring mountain": {
            image: "sunny-spring-mountain.jpg",
            caption: "Sunny Spring Mountain",
            description: "A spring mountain, with the air fresh and flowers blooming across the landscape."
        },
        "sunny spring market": {
            image: "sunny-spring-market.jpg",
            caption: "Sunny Spring Market",
            description: "A lively spring market with vibrant fruits, flowers, and cheerful people."
        },
        "sunny spring beach": {
            image: "sunny-spring-beach.jpg",
            caption: "Sunny Spring Beach",
            description: "A beach in spring with warm temperatures, a gentle breeze, and clear skies."
        },
        "sunny spring forest": {
            image: "sunny-spring-forest.jpg",
            caption: "Sunny Spring Forest",
            description: "A forest filled with new growth and sunlight streaming through the trees."
        },
        "sunny spring desert": {
            image: "sunny-spring-desert.jpg",
            caption: "Sunny Spring Desert",
            description: "A desert with a refreshing breeze, blooming flowers, and the sun shining gently."
        },
        "rainy summer field": {
            image: "rainy-summer-field.jpg",
            caption: "Rainy Summer Field",
            description: "A rainy summer day with lush green fields and overcast skies."
        },
        "rainy summer mountain": {
            image: "rainy-summer-mountain.jpg",
            caption: "Rainy Summer Mountain",
            description: "A misty mountain covered by rain with soft clouds drifting by."
        },
        "rainy summer market": {
            image: "rainy-summer-market.jpg",
            caption: "Rainy Summer Market",
            description: "A market bustling with activity despite the rainy summer weather."
        },
        "rainy summer beach": {
            image: "rainy-summer-beach.jpg",
            caption: "Rainy Summer Beach",
            description: "A beach under the rain, with waves crashing and the sky overcast."
        },
        "rainy summer forest": {
            image: "rainy-summer-forest.jpg",
            caption: "Rainy Summer Forest",
            description: "A forest in the rain with drops falling from the trees, adding to the atmosphere."
        },
        "rainy summer desert": {
            image: "rainy-summer-desert.jpg",
            caption: "Rainy Summer Desert",
            description: "A rare summer rainstorm in the desert, bringing life to the barren landscape."
        },
        "rainy winter field": {
            image: "rainy-winter-field.jpg",
            caption: "Rainy Winter Field",
            description: "A field covered in snow with rain falling from the grey winter sky."
        },
        "rainy winter mountain": {
            image: "rainy-winter-mountain.jpg",
            caption: "Rainy Winter Mountain",
            description: "A mountain scene with rain and snow mixing in the cold winter air."
        },
        "rainy winter market": {
            image: "rainy-winter-market.jpg",
            caption: "Rainy Winter Market",
            description: "A market filled with people braving the winter rain while shopping."
        },
        "rainy winter beach": {
            image: "rainy-winter-beach.jpg",
            caption: "Rainy Winter Beach",
            description: "A beach with rain falling over the cold winter waters."
        },
        "rainy winter forest": {
            image: "rainy-winter-forest.jpg",
            caption: "Rainy Winter Forest",
            description: "A forest blanketed with snow, with rain falling on the frozen landscape."
        },
        "rainy winter desert": {
            image: "rainy-winter-desert.jpg",
            caption: "Rainy Winter Desert",
            description: "A rare winter rainstorm in the desert, turning the ground muddy and wet."
        },
        "rainy autumn field": {
        image: "rainy-autumn-field.jpg",
        caption: "Rainy Autumn Field",
        description: "A peaceful autumn field under a gentle rain, with colorful leaves scattered on the ground."
    },
    "rainy autumn mountain": {
        image: "rainy-autumn-mountain.jpg",
        caption: "Rainy Autumn Mountain",
        description: "A mountain range in autumn, covered in rain clouds, with vibrant fall colors blending with the rain."
    },
    "rainy autumn market": {
        image: "rainy-autumn-market.jpg",
        caption: "Rainy Autumn Market",
        description: "A bustling autumn market with people shielding themselves from the light rain while shopping for seasonal goods."
    },
    "rainy autumn beach": {
        image: "rainy-autumn-beach.jpg",
        caption: "Rainy Autumn Beach",
        description: "A beach on a rainy autumn day, with waves crashing under a cloudy sky and fallen leaves scattered along the shore."
    },
    "rainy autumn forest": {
        image: "rainy-autumn-forest.jpg",
        caption: "Rainy Autumn Forest",
        description: "An autumn forest with leaves dripping from rain, creating a fresh, earthy atmosphere under the canopy."
    },
    "rainy autumn desert": {
        image: "rainy-autumn-desert.jpg",
        caption: "Rainy Autumn Desert",
        description: "A rare autumn rainstorm in the desert, with droplets hitting the dry sand and creating small puddles."
    },
    "rainy spring field": {
        image: "rainy-spring-field.jpg",
        caption: "Rainy Spring Field",
        description: "A spring field alive with fresh blooms, while the rain gently falls, nourishing the plants."
    },
    "rainy spring mountain": {
        image: "rainy-spring-mountain.jpg",
        caption: "Rainy Spring Mountain",
        description: "A mountain range in spring with misty rain showers, feeding the new growth and the freshness of the season."
    },
    "rainy spring market": {
        image: "rainy-spring-market.jpg",
        caption: "Rainy Spring Market",
        description: "A lively spring market with fresh produce and flowers, while light rain adds to the refreshing atmosphere."
    },
    "rainy spring beach": {
        image: "rainy-spring-beach.jpg",
        caption: "Rainy Spring Beach",
        description: "A beach in spring with light rain drizzling over the sand and waves, creating a peaceful and fresh environment."
    },
    "rainy spring forest": {
        image: "rainy-spring-forest.jpg",
        caption: "Rainy Spring Forest",
        description: "A lush spring forest with the rain falling gently, making the leaves shine with moisture and new growth."
    },
    "rainy spring desert": {
        image: "rainy-spring-desert.jpg",
        caption: "Rainy Spring Desert",
        description: "A desert in spring, experiencing light rain showers, creating a contrast between the arid landscape and new life."
    },
        "snowy summer field": {
            image: "snowy-summer-field.jpg",
            caption: "Snowy Summer Field",
            description: "A field covered with snow, offering a peaceful and serene view."
        },
        "snowy summer mountain": {
            image: "snowy-summer-mountain.jpg",
            caption: "Snowy Summer Mountain",
            description: "A mountain covered with snow, giving a tranquil and beautiful view."
        },
        "snowy summer market": {
            image: "snowy-summer-market.jpg",
            caption: "Snowy Summer Market",
            description: "A market scene with snowflakes falling gently in a seemingly paradoxical summer day."
        },
        "snowy summer beach": {
            image: "snowy-summer-beach.jpg",
            caption: "Snowy Summer Beach",
            description: "A snowy beach under the warmth of the summer sun, creating a surreal landscape."
        },
        "snowy summer forest": {
            image: "snowy-summer-forest.jpg",
            caption: "Snowy Summer Forest",
            description: "A forest covered in snow, blending the chill of winter with the summer sun."
        },
        "snowy summer desert": {
            image: "snowy-summer-desert.jpg",
            caption: "Snowy Summer Desert",
            description: "A desert with snow coating the sand dunes, making for a surreal sight."
        },
        "snowy winter field": {
            image: "snowy-winter-field.jpg",
            caption: "Snowy Winter Field",
            description: "A vast field covered in thick snow, with the quiet of winter in the air."
        },
        "snowy winter mountain": {
            image: "snowy-winter-mountain.jpg",
            caption: "Snowy Winter Mountain",
            description: "A mountain range covered in snow, with a chilly winter breeze."
        },
        "snowy winter market": {
            image: "snowy-winter-market.jpg",
            caption: "Snowy Winter Market",
            description: "A winter market with vendors and visitors braving the snowstorm."
        },
        "snowy winter beach": {
            image: "snowy-winter-beach.jpg",
            caption: "Snowy Winter Beach",
            description: "A serene beach covered in snow, with the cold ocean breeze in the air."
        },
        "snowy winter forest": {
            image: "snowy-winter-forest.jpg",
            caption: "Snowy Winter Forest",
            description: "A peaceful winter forest, with snow-laden branches and the silence of snow falling."
        },
        "snowy winter desert": {
            image: "snowy-winter-desert.jpg",
            caption: "Snowy Winter Desert",
            description: "A winter desert, where the sand dunes are topped with snow, creating an eerie stillness."
        },
        "snowy autumn field": {
            image: "snowy-autumn-field.jpg",
            caption: "Snowy Autumn Field",
            description: "A field with autumn leaves covered by a thin layer of snow, creating a peaceful scene."
        },
        "snowy autumn mountain": {
            image: "snowy-autumn-mountain.jpg",
            caption: "Snowy Autumn Mountain",
            description: "A mountain in autumn, where snow touches the last of the fallen autumn leaves."
        },
        "snowy autumn market": {
            image: "snowy-autumn-market.jpg",
            caption: "Snowy Autumn Market",
            description: "An autumn market dusted with snow, where people prepare for winter."
        },
        "snowy autumn beach": {
            image: "snowy-autumn-beach.jpg",
            caption: "Snowy Autumn Beach",
            description: "A beach with autumn-colored leaves scattered across the snow."
        },
        "snowy autumn forest": {
            image: "snowy-autumn-forest.jpg",
            caption: "Snowy Autumn Forest",
            description: "A forest in autumn with a dusting of snow, enhancing the fall colors."
        },
        "snowy autumn desert": {
            image: "snowy-autumn-desert.jpg",
            caption: "Snowy Autumn Desert",
            description: "A desert with scattered autumn leaves and a dusting of snow."
        },
        "snowy spring field": {
            image: "snowy-spring-field.jpg",
            caption: "Snowy Spring Field",
            description: "A spring field, where fresh blooms are partially covered by snow."
        },
        "snowy spring mountain": {
            image: "snowy-spring-mountain.jpg",
            caption: "Snowy Spring Mountain",
            description: "A mountain in spring where the last remnants of snow remain amidst new growth."
        },
        "snowy spring market": {
            image: "snowy-spring-market.jpg",
            caption: "Snowy Spring Market",
            description: "A market in spring, with flowers blooming but snowflakes still drifting down."
        },
        "snowy spring beach": {
            image: "snowy-spring-beach.jpg",
            caption: "Snowy Spring Beach",
            description: "A beach in spring with a rare snowfall, leaving a thin layer on the sand."
        },
        "snowy spring forest": {
            image: "snowy-spring-forest.jpg",
            caption: "Snowy Spring Forest",
            description: "A forest with budding trees, lightly covered in snow."
        },
        "snowy spring desert": {
            image: "snowy-spring-desert.jpg",
            caption: "Snowy Spring Desert",
            description: "A desert in spring where snow covers the sand, creating an unusual contrast."
        },
    };

    loading.style.display = 'block';
    sceneImage.style.display = 'none';
    sceneDetails.style.display = 'none';

    const combinationKey = `${weather} ${season} ${scene}`;

    if (manualImages[combinationKey]) {
        sceneImage.src = manualImages[combinationKey].image;
        sceneCaption.textContent = manualImages[combinationKey].caption;
        sceneDescription.textContent = manualImages[combinationKey].description;
    } else {
        sceneImage.src = 'https://via.placeholder.com/1280x720?text=Image+Not+Found';
        sceneCaption.textContent = "Image Not Found";
        sceneDescription.textContent = "Sorry, we couldn't find a scene for this combination.";
    }

    loading.style.display = 'none';
    sceneImage.style.display = 'block';
    sceneDetails.style.display = 'block';
});

document.getElementById('themeToggleCheckbox').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('downloadScene').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = sceneImage.src;
    link.download = 'virtual-scene.jpg';
    link.click();
});

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById('Randominp').addEventListener('click', () => {
    const weathers = ["sunny", "rainy", "snowy"];
    const seasons = ["summer", "winter", "autumn", "spring"];
    const scenes = ["field", "mountain", "market", "beach", "forest", "desert"];

    document.getElementById('weather').value = getRandomElement(weathers);
    document.getElementById('season').value = getRandomElement(seasons);
    document.getElementById('scene').value = getRandomElement(scenes);
});