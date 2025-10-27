

document.addEventListener('DOMContentLoaded', () => {
    
    
    const ROUND_1_TIME_LIMIT_MINS = 20;
    const JIGSAW_ROWS = 6;
    const JIGSAW_COLS = 6;
    const ASTRA_NAMES = ["Pashupatastra", "Vayu Astra", "Agni Astra", "Vajra Astra", "Brahmastra"];
    const blackPieceIndexes = [0, 1, 4, 5, 12, 17];


    const teamChallenges = [
        { team: 1, secretKey: "SILENCE", asuraForm: `The sky turned crimson as the Asura descended — his roar splitting mountains, his gaze setting oceans ablaze. His presence was heavier than gravity itself — a darkness that crushed even light beneath its will. For a thousand years, he had slept beneath the cosmic depths, waiting for mankind’s arrogance to summon him again.

The five warriors stood upon the edge of existence, their hearts unwavering, their Astras gleaming with divine power. Before them shimmered five layers of protection — the seals of the Asura — each a test beyond imagination.

The first layer was silence. A stillness so absolute that even the gods forgot to breathe. But the warriors closed their eyes, letting their souls speak where sound could not — and the silence shattered.

The second layer came as furious wind — slicing, raging, howling from every direction. They stood unbroken, their unity bending the storm itself until calm returned to chaos.

Then came fire — molten, living, alive with divine vengeance. It devoured the sky, but their resolve burned brighter. Fire bowed to will, and the inferno fell quiet.

The fourth barrier erupted as thunder and lightning — blinding arcs of divine rage crashing upon them. Their strength became rhythm, their movements precise — and thunder learned humility.

And finally, a veil of creation itself pulsed before them — the last defense of existence. They merged their spirits, invoked every force they had conquered, and the universe itself knelt before their unity.

Asura’s laughter tore through the silence: “You think you’ve broken my shields? You’ve merely awakened me!”

Light collided with darkness, and for a brief moment, victory seemed theirs. But suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Vayu Astra", "Agni Astra", "Vajra Astra", "Brahmastra", "Pashupatastra"] },
        { team: 2, secretKey: "COSMOS", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

Now came the ultimate trial — the Asura himself, surrounded by five layers of protection, each woven from cosmic forces beyond mortal comprehension. The air was thick with ash as the Asura’s shadow fell upon the peaks of Kailasha. The five warriors stood before an altar of forgotten gods, their hearts burning with resolve.

The first seal was no wind nor flame, but a blaze that refused to be tamed — fire that spoke of chaos and cleansing. They had to face it head-on, not to destroy it, but to learn its rhythm — to dance with its fury.

When the flames subsided, the silence that followed carried whispers of the sky. A current of unseen air began to twist around them — neither storm nor breeze, but something that tested their spirit’s balance. Only when they calmed their breath did the veil part, revealing the path ahead.

From the depths of the storm, the Asura’s laughter echoed — “Fools! You wield what was forged in my own rage. Every spark you command was once born of my fury.” Far beyond, a light shimmered within a dark sphere — creation bound in destruction. The ground trembled as the warriors approached, each step heavier than the last. They did not attack this layer — they bowed. And in that humility, creation unfolded itself, granting them the strength to endure.

But the next barrier was merciless. Bolts of thunder tore across the sky — the heavens themselves divided. Lightning clashed with storm until even the stars recoiled. Only when the warriors struck with the same precision — swift, absolute, divine — did the storm surrender.

And then came the stillness — the first veil reborn. Time froze. Words lost meaning. Only silence remained — vast, eternal, consuming. They entered it not as warriors, but as souls ready to vanish for the greater good.

The fifth and final layer pulsed with the essence of creation itself, alive and defiant. Using all five Astras in harmony, the warriors shattered the final barriers and reached the Asura. The Asura roared, his ancient fury echoing across mountains and valleys. The warriors celebrated — they had conquered his defenses and pierced his might.

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Vajra Astra", "Agni Astra", "Pashupatastra", "Brahmastra", "Vayu Astra"] },
        { team: 3, secretKey: "DESTINY", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

Now came the ultimate trial — the Asura himself, surrounded by five layers of protection, each woven from cosmic forces beyond mortal comprehension. The storm howled before the first strike landed. Not of flame or thunder, but wind so fierce it tore apart thought itself. The warriors could not see each other — only hear the call of destiny echo through the chaos. They moved as one, letting the storm guide their instincts rather than sight.

As the wind calmed, a roar split the heavens — lightning, alive and vengeful, danced across the battlefield. It was not mere energy; it was judgment, demanding precision and courage. They endured, each bolt testing their bond, each spark drawing them closer to the divine.

Amid the thunder, the Asura’s voice rolled like doom — “You think yourselves chosen? I have broken gods before you were born. The sky itself bends to my will.”

When the light faded, silence consumed the earth. The warriors found themselves before a mirror of time — stillness so deep that their own reflections spoke. There, they faced the void within, the echo of their fears, and conquered it with calm determination.

But beneath the silence lay creation itself — the source of life and unmaking. It pulsed gently, reminding them that destruction too is a part of creation. Through reverence, not power, they awakened it.

And when the flames finally returned, they burned differently — not to consume, but to purify. Fire rose, not as wrath, but as clarity — showing the warriors what must be done. The fifth and final layer pulsed with the essence of creation itself, alive and defiant. Using all five Astras in harmony, the warriors shattered the final barriers and reached the Asura.

The Asura roared, his ancient fury echoing across mountains and valleys. The warriors celebrated — they had conquered his defenses and pierced his might.

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Agni Astra", "Brahmastra", "Vayu Astra", "Pashupatastra", "Vajra Astra"] },
        { team: 4, secretKey: "ETERNITY", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

Now came the ultimate trial — the Asura himself, surrounded by five layers of protection, each woven from cosmic forces beyond mortal comprehension.

Flames raged across the horizon as the Asura’s laughter echoed through eternity. The warriors stepped forward, facing the first of the five seals — a fire that devoured sound and shape alike. But fire reveals as much as it consumes, and within its chaos, they saw the truth of balance.

From the ashes, thunder descended — a tempest so loud that even courage trembled. Lightning struck not from the sky but from within, burning through doubt and fear. Only those who trusted their heart’s rhythm could survive.

The Asura sneered amid the storm — “Even the lightning bows to me, mortals. Do you think your borrowed sparks can pierce eternity?”

When the last bolt faded, a faint wind stirred. Soft at first — then rising, circling, testing. The warriors followed its current, learning its language until the air itself bowed before them.

But ahead, all fell silent. No sound, no time, no form. The stillness itself seemed alive — watching, waiting. They walked through it, unarmed, and silence embraced them like a mother’s sorrow.

Beyond that silence shimmered the final test — a pulse that felt alive, eternal. The very essence of creation awaited them. They did not strike; they surrendered — and in surrender, the world was reborn.

But the fifth and final layer pulsed with the essence of creation itself, alive and defiant. Using all five Astras in harmony, the warriors shattered the final barriers and reached the Asura.

The Asura roared, his ancient fury echoing across mountains and valleys. The warriors celebrated — they had conquered his defenses and pierced his might.

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Vajra Astra", "Brahmastra", "Agni Astra", "Vayu Astra", "Pashupatastra"] },
        { team: 5, secretKey: "BALANCE", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

Now came the ultimate trial — the Asura himself, surrounded by five layers of protection, each woven from cosmic forces beyond mortal comprehension.

The sky tore apart with thunder before the warriors could take their first step. Bolts of divine wrath fell like rain, each flash a question from the heavens — “Are you worthy?” They answered not with steel, but with faith, moving in rhythm with the storm until it yielded.

The wind followed, fierce and wild, testing not their strength but their unity. Each gust whispered temptations of despair, but together they stood firm, one soul against the chaos.

From beyond the tempest, the Asura’s mocking voice boomed — “Your defiance amuses me. You fight with my own weapons and call yourselves saviors?”

Then came the blaze — not of anger, but revelation. Fire rose to remind them that power must be controlled, not unleashed without purpose. It burned away weakness and left behind conviction.

Beyond it, a glow pulsed gently — the song of creation, ancient and divine. They listened rather than fought, and in doing so, awakened the cosmic bond between man and god.

Finally, silence reigned. Time halted. The universe held its breath. And through that void, the warriors passed — unseen, unshaken, undying.

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Brahmastra", "Agni Astra", "Vajra Astra", "Pashupatastra", "Vayu Astra"] },
        { team: 6, secretKey: "CHAOS", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

The battlefield rippled with divine energy as the warriors stepped into the layer. A golden sphere surrounded them — its surface pulsing like the heartbeat of creation itself. They knew they must begin with what births and ends all things.

A surge of light erupted, rewriting the very air — and the first crack appeared. From the fragments rose fire, wild and unchained, seeking to devour everything in sight. The warriors didn’t run; they embraced the flame, guiding it until the inferno itself bowed to them.

The sky twisted, winds howling in anger, tearing apart the clouds and striking the earth. Each breath felt heavier than the last, the air itself turning into a weapon. But with calm hearts, they turned the storm inward, making the tempest kneel before stillness.

A thunderbolt followed — fierce, relentless, shattering the mountains. The warriors answered not with strength but rhythm — each strike echoing their unity until lightning fell silent.

The veil of silence awaited them next — so thick even thoughts felt frozen. They closed their eyes, let their spirits expand beyond form, and the silence broke itself.

Asura’s voice thundered: “You play with my elements as if they obey you… but every breath you take belongs to me!”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Pashupatastra", "Vajra Astra", "Agni Astra", "Brahmastra", "Vayu Astra"] },
        { team: 7, secretKey: "COURAGE", asuraForm:  `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

The barrier shimmered with the sound of thunder — arcs of light dancing across the horizon. Each bolt struck the ground with divine anger, forcing the warriors to move as one, not as men, but as rhythm itself. They struck in pattern — every motion countering heaven’s fury — and thunder surrendered its pride.

But where light fades, fire rises. The ground split, and molten rivers coiled like serpents of rage. The warriors wove their will through the blaze — not to extinguish it, but to command its purity. Flame met resolve, and the inferno bowed to harmony.

Then — silence. The world halted. Not a breath, not a thought. A silence so deep that even their hearts forgot to beat. They understood: stillness was the answer. And in stillness, the next layer fell.

But the final veil was not silence — it was birth itself. Creation trembled as energy coalesced into divine power. From nothingness came everything. From unity, the shield broke.

Winds followed, fierce and boundless, roaring through the remains of the storm. They steadied themselves, shaping chaos into balance, and the storm bent before them.

Asura laughed, voice echoing through fire and thunder: “Your courage amuses me. Shall I show you what despair truly sounds like?”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Brahmastra", "Vajra Astra", "Vayu Astra", "Pashupatastra", "Agni Astra"] },
        { team: 8, secretKey: "STORM", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

A wall of storm clouds surged forward — layer’s defense, alive with divine breath. Every gust screamed like a fallen god, hurling the warriors through air and dust. But they embraced the storm, moving within it, shaping its rhythm until the winds turned to their side.

Beyond the storm, the barrier of creation glowed like a newborn star. They could feel reality warping — every step birthing galaxies, every breath echoing eternity. They walked forward, guided by balance, and the fabric of creation bowed open.

The ground ignited beneath them — flames swirling upward, alive and screaming. The fire didn’t destroy; it cleansed. Its fury transformed into clarity as they stood tall amid the blaze.

Then came silence — suffocating, eternal. They didn’t fight it. They became one with it, dissolving until the silence shattered itself. And from that silence — lightning. Unpredictable, savage, divine. The warriors met the thunder with focus, their unity splitting the storm apart.

Asura’s mockery roared: “You bend my storms, wield my light, command my fire — but remember, mortals, all of it was born from me!”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Agni Astra", "Pashupatastra", "Vajra Astra", "Vayu Astra", "Brahmastra"] },
        { team: 9, secretKey: "CREATION", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

The air shimmered, thick with energy as the first layer emerged — the barrier of existence itself. The warriors stepped forward, invoking creation and destruction in perfect balance. The barrier trembled, bending to the paradox of their will.

Then lightning tore the sky — arcs of rage cutting through creation’s remains. The ground fractured under divine fury, yet they stood firm, matching rhythm for rhythm. When the storm finally bent, light scattered like shattered glass.

The wind rose next, carrying whispers of forgotten gods and ancient vengeance. The warriors listened — then turned that breath into strength, their motion flowing with the storm’s own pulse.

Flames burst across the horizon — red, wild, endless. They didn’t run. They danced within it, their resolve stronger than the inferno itself.

At last, silence descended — heavy and absolute. In that stillness, they found the way — and the final seal broke.

Asura’s voice hissed through the ashes: “You think creation answers to you? I am the beginning, I am the end!”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Pashupatastra", "Brahmastra", "Agni Astra", "Vajra Astra", "Vayu Astra"] },
        { team: 10, secretKey: "FURY", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

The flames came first — roaring, unending, like the anger of gods forgotten by time. They consumed everything, yet the warriors stood amidst the fire, turning heat into harmony. When the inferno bowed, silence took its place. Not absence of sound — but the kind that crushes thought itself. They moved through it gently, and when their spirits aligned, the silence cracked.

From above, thunder rolled — light exploding, rage incarnate. But they struck in rhythm, their movements reflecting the storm, until the heavens bowed.

A radiant sphere formed — creation itself, infinite and unyielding. It pulsed with cosmic rhythm, and through sheer will, they reshaped its pattern.

Winds surged — last of the barriers — cold, furious, divine. They embraced it, let the storm pass through them, and calm followed.

Asura’s laughter echoed: “Pathetic illusions of power! You mimic gods — but I was born before gods were dreamed of.”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Vajra Astra", "Vayu Astra", "Brahmastra", "Pashupatastra", "Agni Astra"] },
        { team: 11, secretKey: "VOID", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

It began in silence — an endless void where even existence forgot its name. The warriors didn’t resist. They surrendered to it, until the silence itself surrendered back.

From that stillness, a sphere of creation pulsed, glowing with divine order. They moved in rhythm with its breath, and the sphere yielded.

Then fire erupted — vast, sentient, furious. Every ember carried memories of fallen worlds. They faced it not with defiance, but compassion — and the flames bowed.

The storm rose next — a hurricane of divine breath. It tore through mountains and souls alike, but they wove harmony into chaos until the winds obeyed.

Thunder followed — merciless, striking with celestial rage. They raised their blades, channeling the storm’s pulse, and lightning itself froze in reverence.

Asura sneered: “You silence my void, twist my flame, and calm my winds… Tell me, who gave you such arrogance? Brats!”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Vayu Astra", "Pashupatastra", "Vajra Astra", "Agni Astra", "Brahmastra"] },
        { team: 12, secretKey: "WRATH", asuraForm: `In the sky stained crimson, the Asura descended, his roar splitting mountains, his eyes burning with the fury of forgotten ages. More fearsome than the wrath of the cosmos itself, his gaze made rivers tremble and mountains shudder. After a thousand years of slumber, he had awakened — summoned by the arrogance and folly of humankind.

A time of grave peril had befallen Earth. The gods and protectors of mankind — five chosen warriors — gathered to face this nightmare. Only through pure intent, focus, and determination did each ruler grant the warriors one divine Astra. Thus, after their arduous devotion, the warriors possessed all five divine Astras.

The shield emerged — lightning itself, alive and furious. Bolts fell like divine punishment, yet the warriors danced through the storm, matching its heartbeat until the thunder faded.

Then came silence — deeper than time, darker than death. They didn’t fear it. They let it swallow them, and within the silence, they found light.

From that light, creation burst forth — radiant, divine, infinite. The sphere expanded, bending reality, but their unity shaped it into balance.

Winds tore across the field, screaming with divine anger. They faced it head-on, letting its force guide their rhythm, until the storm collapsed inward.

Finally — flame. Pure, unbound, the symbol of rebirth. They embraced it, and the blaze turned into brilliance.

Asura roared, laughter shaking the skies: “You’ve unmade my storms, silenced my thunder… but have you seen what I become when darkness itself kneels before me?”

Suddenly, the heavens darkened. The Almighty Asura unleashed his full wrath, eyes blazing like molten stars, and shadows fell across the world. Everything went black.

What fate awaits the warriors now? Will they survive Asura's ultimate rage, or is this just the beginning of an even greater battle?`, correctSequence: ["Brahmastra", "Vayu Astra", "Pashupatastra", "Agni Astra", "Vajra Astra"] },
    ];

   
    const screens = document.querySelectorAll('.screen');
    const startMissionButton = document.getElementById('start-mission-button');
    const startRound1Button = document.getElementById('start-round-1-button');
    const proceedToRound3Button = document.getElementById('proceed-to-round-3-button');
    const submitSequenceButton = document.getElementById('submit-sequence-button');
    const proceedToPuzzleButton = document.getElementById('proceed-to-puzzle-button');
    const backToStoryButton = document.getElementById('back-to-story-button');
    const countdownDisplay = document.getElementById('countdown');
    const jigsawPiecesContainer = document.getElementById('jigsaw-pieces');
    const jigsawBoardContainer = document.getElementById('jigsaw-board');
    const jigsawStatusMessage = document.getElementById('jigsaw-status');
    const round1ResultHeading = document.getElementById('round-1-result');
    const round2IntroParagraph = document.getElementById('round-2-intro');
    const teamGrid = document.getElementById('team-grid');
    const r3TeamTitle = document.getElementById('r3-team-title');
    const r3StoryDisplay = document.getElementById('r3-story-display');
    const astraBank = document.getElementById('astra-bank');
    const sequenceSlots = document.querySelectorAll('.sequence-slot');
    const round3Message = document.getElementById('round-3-message');
    const finalOutcomeText = document.getElementById('final-outcome-text');
    const failureMessage = document.getElementById('failure-message');


    let round1TimerInterval;
    let draggedJigsawPiece = null;
    let round1CompletedSuccessfully = false;
    let currentTeamChallenge = null;
    let draggedAstraElement = null;

 
    function showScreen(screenId) {
        screens.forEach(s => s.classList.add('hidden'));
        document.getElementById(screenId).classList.remove('hidden');
        localStorage.setItem('currentScreen', screenId);
    }

    startMissionButton.addEventListener('click', () => showScreen('story-screen'));
    startRound1Button.addEventListener('click', () => { showScreen('round-1-screen'); initializeRound1(); });
    proceedToRound3Button.addEventListener('click', () => { showScreen('round-3-selection-screen'); initializeRound3Selection(); });
    submitSequenceButton.addEventListener('click', checkRound3Sequence);
    proceedToPuzzleButton.addEventListener('click', () => showScreen('round-3-puzzle-screen'));
    backToStoryButton.addEventListener('click', () => showScreen('round-3-story-screen'));
    

    function updateJigsawScore() {
        let correctPieces = 0;
        const totalSolvablePieces = (JIGSAW_ROWS * JIGSAW_COLS) - blackPieceIndexes.length;
        jigsawBoardContainer.querySelectorAll('.jigsaw-slot').forEach(slot => {
            if (slot.firstChild && slot.firstChild.id === slot.dataset.correctId) {
                correctPieces++;
            }
        });
        if (correctPieces === JIGSAW_ROWS * JIGSAW_COLS) {
            if (round1CompletedSuccessfully) return;
            round1CompletedSuccessfully = true;
            clearInterval(round1TimerInterval);
            lockRound1Puzzle("You got it right! You have received Astra 1."); 
            setTimeout(() => showRound2Transition(), 2500); 
        } else {
             jigsawStatusMessage.innerText = `Fragments Aligned: ${correctPieces - blackPieceIndexes.length}/${totalSolvablePieces}`;
        }
    }

    function initializeRound1() {
        jigsawBoardContainer.innerHTML = '';
        jigsawPiecesContainer.innerHTML = '';
        round1CompletedSuccessfully = false;
        jigsawStatusMessage.innerText = "";
        const boardSize = jigsawBoardContainer.offsetWidth;
        if (boardSize === 0) return;
        const pieceSize = boardSize / JIGSAW_COLS;
        const totalPieces = JIGSAW_ROWS * JIGSAW_COLS;
        let piecesToShuffle = [];
        const allSlots = [];

        for (let i = 0; i < totalPieces; i++) {
            const slot = document.createElement('div');
            slot.classList.add('jigsaw-slot');
            slot.dataset.correctId = `piece-${i}`;
            jigsawBoardContainer.appendChild(slot);
            addJigsawSlotDragEvents(slot);
            allSlots.push(slot);
        }

        for (let i = 0; i < totalPieces; i++) {
            const piece = document.createElement('div');
            piece.classList.add('jigsaw-piece');
            piece.id = `piece-${i}`;
            piece.style.width = `${pieceSize}px`;
            piece.style.height = `${pieceSize}px`;
            const row = Math.floor(i / JIGSAW_COLS);
            const col = i % JIGSAW_COLS;
            const xPos = -col * pieceSize;
            const yPos = -row * pieceSize;
            piece.style.backgroundImage = "url('puzzle-image.jpg')";
            piece.style.backgroundPosition = `${xPos}px ${yPos}px`;
            piece.style.backgroundSize = `${boardSize}px ${boardSize}px`;

            if (blackPieceIndexes.includes(i)) {
                allSlots[i].appendChild(piece);
                piece.classList.add('pre-solved', 'locked');
                piece.draggable = false;
            } else {
                piece.draggable = true;
                piece.addEventListener('dragstart', (e) => { draggedJigsawPiece = e.target; setTimeout(() => e.target.style.opacity = '0.5', 0); });
                piece.addEventListener('dragend', (e) => e.target.style.opacity = '1');
                piecesToShuffle.push(piece);
            }
        }
        
        piecesToShuffle.sort(() => Math.random() - 0.5);
        piecesToShuffle.forEach(piece => jigsawPiecesContainer.appendChild(piece));
        
        addJigsawPieceBankDragEvents();
        updateJigsawScore();
        startRound1Timer();
    }

    function addJigsawSlotDragEvents(slot) {
        slot.addEventListener('dragover', e => { e.preventDefault(); if (!slot.hasChildNodes()) slot.classList.add('drag-over'); });
        slot.addEventListener('dragleave', e => slot.classList.remove('drag-over'));
        slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('drag-over'); if (slot.hasChildNodes() || !draggedJigsawPiece) return; slot.appendChild(draggedJigsawPiece); updateJigsawScore(); });
    }

    function addJigsawPieceBankDragEvents() {
        jigsawPiecesContainer.addEventListener('dragover', e => { e.preventDefault(); jigsawPiecesContainer.classList.add('drag-over'); });
        jigsawPiecesContainer.addEventListener('dragleave', e => jigsawPiecesContainer.classList.remove('drag-over'));
        jigsawPiecesContainer.addEventListener('drop', e => { e.preventDefault(); jigsawPiecesContainer.classList.remove('drag-over'); if (!draggedJigsawPiece) return; jigsawPiecesContainer.appendChild(draggedJigsawPiece); updateJigsawScore(); });
    }

    function startRound1Timer() {
        let timeRemaining = ROUND_1_TIME_LIMIT_MINS * 60;
        clearInterval(round1TimerInterval);
        const updateTimer = () => {
            if (timeRemaining <= 0) {
                clearInterval(round1TimerInterval);
                if (!round1CompletedSuccessfully) {
                    lockRound1Puzzle("TIME EXPIRED! The glyph remains incomplete...");
                    showRound2Transition();
                }
            } else {
                timeRemaining--;
                const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
                const seconds = (timeRemaining % 60).toString().padStart(2, '0');
                countdownDisplay.innerText = `${minutes}:${seconds}`;
            }
        };
        updateTimer();
        round1TimerInterval = setInterval(updateTimer, 1000);
    }

    function lockRound1Puzzle(message) {
        jigsawStatusMessage.innerText = message;
        jigsawStatusMessage.style.color = round1CompletedSuccessfully ? 'var(--color-primary)' : '#ff4444';
        document.querySelectorAll('.jigsaw-piece').forEach(p => { if (!p.classList.contains('pre-solved')) { p.draggable = false; p.classList.add('locked'); } });
        proceedToRound3Button.classList.remove('hidden');
    }
    
    function showRound2Transition() {
        showScreen('round-2-transition-screen');
        if (round1CompletedSuccessfully) {
            round1ResultHeading.innerText = "ASTRA 1 ACQUIRED!";
            round1ResultHeading.style.color = 'var(--color-primary)';
            round2IntroParagraph.innerText = "Your intellect shines, warrior! The first seal is broken, and Astra 1 is yours!";
        } else {
            round1ResultHeading.innerText = "GLYPH REMAINS UNSEALED!";
            round1ResultHeading.style.color = '#ff4444';
            round2IntroParagraph.innerText = "Time has run its course, warrior. While the first Astra eludes your complete grasp, your journey must continue!";
        }
    }
    

    function initializeRound3Selection() {
        teamGrid.innerHTML = '';
        for (let i = 1; i <= teamChallenges.length; i++) {
            const button = document.createElement('button');
            button.classList.add('team-button');
            button.innerText = `TEAM ${i}`;
            button.dataset.teamId = i;
            button.addEventListener('click', selectTeamForRound3);
            teamGrid.appendChild(button);
        }
    }


    function selectTeamForRound3(event) {
        const teamId = event.target.dataset.teamId;
        currentTeamChallenge = teamChallenges.find(c => c.team == teamId);

        const enteredKey = prompt(`The Oracle demands the secret key for Team ${teamId}:`);
        
  
        if (!enteredKey) {
            return; 
        }
        
        if (enteredKey.trim().toUpperCase() === currentTeamChallenge.secretKey.toUpperCase()) {
            r3TeamTitle.innerText = `TEAM ${teamId}'S CHALLENGE`;
            r3StoryDisplay.innerText = teamChallenges[teamId - 1].asuraForm;
            showScreen('round-3-story-screen');
            setupRound3Puzzle(currentTeamChallenge);
        } else {
            alert("Incorrect key. The path remains sealed.");
        }
    }

    function setupRound3Puzzle(challenge) {
        round3Message.innerText = "Arrange the Astras in the correct sequence to pierce his defenses!";
        round3Message.style.color = 'var(--color-text-light)';
        astraBank.innerHTML = '<h3>AVAILABLE ASTRAS</h3>';
        
        const shuffledAstraNames = [...ASTRA_NAMES].sort(() => Math.random() - 0.5);
        shuffledAstraNames.forEach(name => {
            const astra = document.createElement('div');
            astra.classList.add('astra-item');
            astra.innerText = name;
            astra.draggable = true;
            astra.addEventListener('dragstart', (e) => {
                draggedAstraElement = e.target;
            });
            astraBank.appendChild(astra);
        });

        sequenceSlots.forEach(slot => {
            slot.innerHTML = '';
            addAstraDropEvents(slot);
        });
        
        addAstraDropEvents(astraBank);
    }
    
    function addAstraDropEvents(target) {
        target.addEventListener('dragover', (e) => { e.preventDefault(); target.classList.add('drag-over'); });
        target.addEventListener('dragleave', (e) => { target.classList.remove('drag-over'); });
        target.addEventListener('drop', (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');
            if (!draggedAstraElement) return;
            if (target.hasChildNodes() && target.firstChild.classList?.contains('astra-item')) {
                const itemInTarget = target.firstChild;
                draggedAstraElement.parentElement.appendChild(itemInTarget);
            }
            target.appendChild(draggedAstraElement);
        });
    }

    function checkRound3Sequence() {
        const submittedSequence = Array.from(sequenceSlots).map(slot => {
            const name = slot.firstChild?.innerText || null;
            return name ? name.trim().toLowerCase() : null;
        });

        if (submittedSequence.some(name => name === null)) {
            round3Message.innerText = "All layers must be filled, warrior!";
            round3Message.style.color = '#ff4444';
            return;
        }

        const correctSequence = currentTeamChallenge.correctSequence.map(a => a.trim().toLowerCase());
        const isCorrect = submittedSequence.length === correctSequence.length &&
                          submittedSequence.every((a, i) => a === correctSequence[i]);

        if (isCorrect) {
            showScreen('victory-screen');
        } else {
            finalOutcomeText.innerText = "SEQUENCE INCORRECT!";
            failureMessage.classList.remove('hidden');
            showScreen('final-screen');
        }
    }


    function init() {
    const savedScreen = localStorage.getItem('currentScreen');
    

    if (savedScreen === 'round-2-transition-screen' || 
        savedScreen === 'round-3-selection-screen' || 
        savedScreen === 'round-3-story-screen' || 
        savedScreen === 'final-screen' || 
        savedScreen === 'victory-screen') {
            
        showScreen(savedScreen); 


        if (savedScreen === 'round-2-transition-screen') {
           
             proceedToRound3Button.classList.remove('hidden');
         
             round1ResultHeading.innerText = "Round 1 Status"; 
             round2IntroParagraph.innerText = "Continue your journey from here.";
        }
        

        if (savedScreen === 'round-3-selection-screen') {
            initializeRound3Selection();
        }
 

    } else {
        
        showScreen('welcome-screen');
        localStorage.setItem('currentScreen', 'welcome-screen'); 
    }
}

init();
    
    init(); 
});
