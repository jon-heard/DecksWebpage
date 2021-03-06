
var decks = [];


let d; // Temporary deck buffer

///////////
// DICE //
///////////
decks.push({
	name: "D2",
	images: ["numbers.png"],
	backImage: "d2_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0] ]
});
decks.push({
	name: "D3",
	images: ["numbers.png"],
	backImage: "d3_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0], [0,2,0] ]
});
decks.push({
	name: "D4",
	images: ["numbers.png"],
	backImage: "d4_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0], [0,2,0], [0,3,0] ]
});
decks.push({
	name: "D6",
	images: ["numbers.png"],
	backImage: "d6_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0], [0,5,0] ]
});
decks.push({
	name: "D8",
	images: ["numbers.png"],
	backImage: "d8_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0], [0,5,0], [0,6,0], [0,7,0] ]
});
decks.push({
	name: "D10",
	images: ["numbers.png"],
	backImage: "d10_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [ [0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0], [0,5,0], [0,6,0], [0,7,0], [0,8,0], [0,9,0] ]
});
decks.push({
	name: "D10 (x10)",
	images: ["numbers.png"],
	backImage: "d10_10_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [
		[0,5,1], [0,6,1], [0,7,1], [0,8,1], [0,9,1], [0,10,1], [0,11,1], [0,12,1], [0,13,1], [0,14,1] ]
});
decks.push({
	name: "D12",
	images: ["numbers.png"],
	backImage: "d12_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [
		[0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0], [0,5,0], [0,6,0], [0,7,0], [0,8,0], [0,9,0],
		[0,10,0], [0,11,0] ]
});
decks.push({
	name: "D20",
	images: ["numbers.png"],
	backImage: "d20_back.png",
	refImages: {},
	hiW: 25,
	hiH: 19,
	lowW: 13,
	lowH: 10,
	noRedraw: false,
	allowFlipped: false,
	cards: [
		[0,0,0], [0,1,0], [0,2,0], [0,3,0], [0,4,0], [0,5,0], [0,6,0], [0,7,0], [0,8,0], [0,9,0],
		[0,10,0], [0,11,0], [0,12,0], [0,13,0], [0,14,0], [0,0,1], [0,1,1], [0,2,1], [0,3,1], [0,4,1] ]
});


///////////
// Tarot //
///////////
d = {
	name: "Tarot",
	images: ["tarot_1.png", "tarot_2.png"],
	backImage: "tarot_back.jpg",
	refImages: {},
	hiW: 277,
	hiH: 500,
	lowW: 111,
	lowH: 200,
	noRedraw: true,
	allowFlipped: true,
	cards: []
};
for (var i = 0; i < 6; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 5 && k > 5) { continue; }
		d.cards.push([0, k, i]);
	}
}
for (var i = 0; i < 3; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 2 && k > 1) { continue; }
		d.cards.push([1, k, i]);
	}
}
decks.push(d);


/////////////////
// Story cubes //
/////////////////
d = {
	name: "Story cubes",
	images: ["storyCubes.png"],
	backImage: "storyCubes_back.png",
	refImages: {},
	hiW: 109,
	hiH: 109,
	lowW: 43,
	lowH: 43,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 7; i++)
{
	for (var k = 0; k < 8; k++)
	{
		if (i == 6 && k > 5) { continue; }
		d.cards.push([0, k, i]);
	}
}
decks.push(d);
d = {
	name: "Story cubes: actions",
	images: ["storyCubes_actions.png"],
	backImage: "storyCubes_actions_back.png",
	refImages: {},
	hiW: 109,
	hiH: 109,
	lowW: 43,
	lowH: 43,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 7; i++)
{
	for (var k = 0; k < 8; k++)
	{
		if (i == 6 && k > 5) { continue; }
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


///////////////////
// Deck of tales //
///////////////////
d = {
	name: "Deck of Tales",
	images: ["deckOfTales_1.png", "deckOfTales_2.png", "deckOfTales_3.png"],
	backImage: "deckOfTales_back.png",
	refImages: { overview: "ref_deckOfTales_1.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 206,
	lowH: 281,
	noRedraw: false,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 4; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 0 && k < 4) { continue; }
		d.cards.push([0, k, i]);
	}
}
for (var i = 0; i < 4; i++)
{
	for (var k = 0; k < 10; k++)
	{
		d.cards.push([1, k, i]);
	}
}
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 4 && k > 3) { continue; }
		d.cards.push([2, k, i]);
	}
}
decks.push(d);


///////////////////
// GM Apprentice //
///////////////////
d = {
	name: "GM Apprentice",
	images: ["gmApprentice_1.png", "gmApprentice_2.png", "gmApprentice_3.png"],
	backImage: "gmApprentice_back.png",
	refImages: { recipes: "ref_gma_recipes.png", tags: "ref_gma_tags.png", elements: "ref_gma_elements.png",  "runes 1/3": "ref_gma_runes1.png",  "runes 2/3": "ref_gma_runes2.png",  "runes 3/3": "ref_gma_runes3.png", "Char traits": "ref_gma_charTraits.png", Professions: "ref_gma_professions.png", "Encounter traits": "ref_gma_encounterTraits.png", Loot: "ref_gma_loot.png", Quests: "ref_gma_quest.png", "Quest givers": "ref_gma_questGiver.png", "Quest premise": "ref_gma_questPremise.png", "Quest reason": "ref_gma_questReason.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 248,
	lowH: 338,
	noRedraw: false,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 3; i++)
{
	for (var k = 0; k < 10; k++)
	{
		d.cards.push([0, k, i]);
	}
}
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 4 && k > 4) { continue; }
		d.cards.push([1, k, i]);
	}
}
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 10; k++)
	{
		if (i == 4 && k > 4) { continue; }
		d.cards.push([2, k, i]);
	}
}
decks.push(d);


/////////////////
// GMA Fantasy //
/////////////////
d = {
	name: "GMA Fantasy",
	images: [
		"gmaFantasy/1.jpg",   "gmaFantasy/2.jpg",   "gmaFantasy/3.jpg",   "gmaFantasy/4.jpg",   "gmaFantasy/5.jpg",
		"gmaFantasy/6.jpg",   "gmaFantasy/7.jpg",   "gmaFantasy/8.jpg",   "gmaFantasy/9.jpg",   "gmaFantasy/10.jpg",
		"gmaFantasy/11.jpg",  "gmaFantasy/12.jpg",  "gmaFantasy/13.jpg",  "gmaFantasy/14.jpg",  "gmaFantasy/15.jpg",
		"gmaFantasy/16.jpg",  "gmaFantasy/17.jpg",  "gmaFantasy/18.jpg",  "gmaFantasy/19.jpg",  "gmaFantasy/20.jpg",
		"gmaFantasy/21.jpg",  "gmaFantasy/22.jpg",  "gmaFantasy/23.jpg",  "gmaFantasy/24.jpg",  "gmaFantasy/25.jpg",
		"gmaFantasy/26.jpg",  "gmaFantasy/27.jpg",  "gmaFantasy/28.jpg",  "gmaFantasy/29.jpg",  "gmaFantasy/30.jpg",
		"gmaFantasy/31.jpg",  "gmaFantasy/32.jpg",  "gmaFantasy/33.jpg",  "gmaFantasy/34.jpg",  "gmaFantasy/35.jpg",
		"gmaFantasy/36.jpg",  "gmaFantasy/37.jpg",  "gmaFantasy/38.jpg",  "gmaFantasy/39.jpg",  "gmaFantasy/40.jpg",
		"gmaFantasy/41.jpg",  "gmaFantasy/42.jpg",  "gmaFantasy/43.jpg",  "gmaFantasy/44.jpg",  "gmaFantasy/45.jpg",
		"gmaFantasy/46.jpg",  "gmaFantasy/47.jpg",  "gmaFantasy/48.jpg",  "gmaFantasy/49.jpg",  "gmaFantasy/50.jpg",
		"gmaFantasy/51.jpg",  "gmaFantasy/52.jpg",  "gmaFantasy/53.jpg",  "gmaFantasy/54.jpg",  "gmaFantasy/55.jpg",
		"gmaFantasy/56.jpg",  "gmaFantasy/57.jpg",  "gmaFantasy/58.jpg",  "gmaFantasy/59.jpg",  "gmaFantasy/60.jpg",
		"gmaFantasy/61.jpg",  "gmaFantasy/62.jpg",  "gmaFantasy/63.jpg",  "gmaFantasy/64.jpg",  "gmaFantasy/65.jpg",
		"gmaFantasy/66.jpg",  "gmaFantasy/67.jpg",  "gmaFantasy/68.jpg",  "gmaFantasy/69.jpg",  "gmaFantasy/70.jpg",
		"gmaFantasy/71.jpg",  "gmaFantasy/72.jpg",  "gmaFantasy/73.jpg",  "gmaFantasy/74.jpg",  "gmaFantasy/75.jpg",
		"gmaFantasy/76.jpg",  "gmaFantasy/77.jpg",  "gmaFantasy/78.jpg",  "gmaFantasy/79.jpg",  "gmaFantasy/80.jpg",
		"gmaFantasy/81.jpg",  "gmaFantasy/82.jpg",  "gmaFantasy/83.jpg",  "gmaFantasy/84.jpg",  "gmaFantasy/85.jpg",
		"gmaFantasy/86.jpg",  "gmaFantasy/87.jpg",  "gmaFantasy/88.jpg",  "gmaFantasy/89.jpg",  "gmaFantasy/90.jpg",
		"gmaFantasy/91.jpg",  "gmaFantasy/92.jpg",  "gmaFantasy/93.jpg",  "gmaFantasy/94.jpg",  "gmaFantasy/95.jpg",
		"gmaFantasy/96.jpg",  "gmaFantasy/97.jpg",  "gmaFantasy/98.jpg",  "gmaFantasy/99.jpg",  "gmaFantasy/100.jpg",
		"gmaFantasy/101.jpg", "gmaFantasy/102.jpg", "gmaFantasy/103.jpg", "gmaFantasy/104.jpg", "gmaFantasy/105.jpg",
		"gmaFantasy/106.jpg", "gmaFantasy/107.jpg", "gmaFantasy/108.jpg", "gmaFantasy/109.jpg", "gmaFantasy/110.jpg",
		"gmaFantasy/111.jpg", "gmaFantasy/112.jpg", "gmaFantasy/113.jpg", "gmaFantasy/114.jpg", "gmaFantasy/115.jpg",
		"gmaFantasy/116.jpg", "gmaFantasy/117.jpg", "gmaFantasy/118.jpg", "gmaFantasy/119.jpg", "gmaFantasy/120.jpg",
	],
	backImage: "gmaFantasy/back.png",
	refImages: { recipes: "ref_gma_recipes.png", tags: "ref_gma_tags.png", elements: "ref_gma_elements.png",  "runes 1/3": "ref_gma_runes1.png",  "runes 2/3": "ref_gma_runes2.png",  "runes 3/3": "ref_gma_runes3.png", "Char traits": "ref_gma_charTraits.png", Professions: "ref_gma_professions.png", "Encounter traits": "ref_gma_encounterTraits.png", Loot: "ref_gma_loot.png", Quests: "ref_gma_quest.png", "Quest givers": "ref_gma_questGiver.png", "Quest premise": "ref_gma_questPremise.png", "Quest reason": "ref_gma_questReason.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: false,
	allowFlipped: false,
	cards: [
		[  0, 0,0], [  1, 0,0], [  2, 0,0], [  3, 0,0], [  4, 0,0], [  5, 0,0], [  6, 0,0], [  7, 0,0], [  8, 0,0], [  9, 0,0],
		[ 10, 0,0], [ 11, 0,0], [ 12, 0,0], [ 13, 0,0], [ 14, 0,0], [ 15, 0,0], [ 16, 0,0], [ 17, 0,0], [ 18, 0,0], [ 19, 0,0],
		[ 20, 0,0], [ 21, 0,0], [ 22, 0,0], [ 23, 0,0], [ 24, 0,0], [ 25, 0,0], [ 26, 0,0], [ 27, 0,0], [ 28, 0,0], [ 29, 0,0],
		[ 30, 0,0], [ 31, 0,0], [ 32, 0,0], [ 33, 0,0], [ 34, 0,0], [ 35, 0,0], [ 36, 0,0], [ 37, 0,0], [ 38, 0,0], [ 39, 0,0],
		[ 40, 0,0], [ 41, 0,0], [ 42, 0,0], [ 43, 0,0], [ 44, 0,0], [ 45, 0,0], [ 46, 0,0], [ 47, 0,0], [ 48, 0,0], [ 49, 0,0],
		[ 50, 0,0], [ 51, 0,0], [ 52, 0,0], [ 53, 0,0], [ 54, 0,0], [ 55, 0,0], [ 56, 0,0], [ 57, 0,0], [ 58, 0,0], [ 59, 0,0],
		[ 60, 0,0], [ 61, 0,0], [ 62, 0,0], [ 63, 0,0], [ 64, 0,0], [ 65, 0,0], [ 66, 0,0], [ 67, 0,0], [ 68, 0,0], [ 69, 0,0],
		[ 70, 0,0], [ 71, 0,0], [ 72, 0,0], [ 73, 0,0], [ 74, 0,0], [ 75, 0,0], [ 76, 0,0], [ 77, 0,0], [ 78, 0,0], [ 79, 0,0],
		[ 80, 0,0], [ 81, 0,0], [ 82, 0,0], [ 83, 0,0], [ 84, 0,0], [ 85, 0,0], [ 86, 0,0], [ 87, 0,0], [ 88, 0,0], [ 89, 0,0],
		[ 90, 0,0], [ 91, 0,0], [ 92, 0,0], [ 93, 0,0], [ 94, 0,0], [ 95, 0,0], [ 96, 0,0], [ 97, 0,0], [ 98, 0,0], [ 99, 0,0],
		[100, 0,0], [101, 0,0], [102, 0,0], [103, 0,0], [104, 0,0], [105, 0,0], [106, 0,0], [107, 0,0], [108, 0,0], [109, 0,0],
		[110, 0,0], [111, 0,0], [112, 0,0], [113, 0,0], [114, 0,0], [115, 0,0], [116, 0,0], [117, 0,0], [118, 0,0], [119, 0,0]
	]
};
decks.push(d);


//////////////////////////
// Mythulu - characters //
//////////////////////////
d = {
	name: "Mythulu - characters",
	images: ["mythulu_characters.png"],
	backImage: "mythulu_characters_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		if (i == 0 && k == 0) { continue; }
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


////////////////////////
// Mythulu - elements //
////////////////////////
d = {
	name: "Mythulu - elements",
	images: ["mythulu_elements.png"],
	backImage: "mythulu_elements_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


////////////////////////
// Mythulu - habitats //
////////////////////////
d = {
	name: "Mythulu - habitats",
	images: ["mythulu_habitats.png"],
	backImage: "mythulu_habitats_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


/////////////////////////////
// Mythulu - relationships //
/////////////////////////////
d = {
	name: "Mythulu - relationships",
	images: ["mythulu_relationships.png"],
	backImage: "mythulu_relationships_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


////////////////////////
// Mythulu - textures //
////////////////////////
d = {
	name: "Mythulu - textures",
	images: ["mythulu_textures.png"],
	backImage: "mythulu_textures_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


//////////////////////
// Mythulu - traits //
//////////////////////
d = {
	name: "Mythulu - traits",
	images: ["mythulu_traits.png"],
	backImage: "mythulu_traits_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
{
	for (var k = 0; k < 5; k++)
	{
		d.cards.push([0, k, i]);
	}
}
decks.push(d);


///////////////////
// Mythulu - all //
///////////////////
d = {
	name: "Mythulu - all",
	images: ["mythulu_characters.png", "mythulu_elements.png", "mythulu_habitats.png", "mythulu_relationships.png", "mythulu_textures.png", "mythulu_traits.png"],
	backImage: "mythulu_relationships_back.jpg",
	refImages: { "Recipes 1/2": "ref_mythulu_1.png", "Recipes 2/2": "ref_mythulu_2.png" },
	hiW: 825,
	hiH: 1125,
	lowW: 289,
	lowH: 394,
	noRedraw: true,
	allowFlipped: false,
	cards: []
};
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
	{
		if (i == 0 && k == 0) { continue; }
		d.cards.push([0, k, i]);
	}
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
		d.cards.push([1, k, i]);
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
		d.cards.push([2, k, i]);
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
		d.cards.push([3, k, i]);
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
		d.cards.push([4, k, i]);
for (var i = 0; i < 5; i++)
	for (var k = 0; k < 5; k++)
		d.cards.push([5, k, i]);
decks.push(d);