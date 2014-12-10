# Synth Secrets, Part 18: Priorities & Triggers  
_Original article: [http://www.soundonsound.com/sos/oct00/articles/synthsec.htm][0]_

In these days of 64-note polyphony and 32-part multitimbrality, it's easy to forget the importance of note-priority systems in analogue monosynths -- yet they can have a drastic effect on what you hear when you play or trigger an old synth. **Gordon Reid** provides a refresher course. This is the 18th article in a 63-part series. Read [all parts][1].

![](http://media.soundonsound.com/sos/oct00/images/synthminimoog.gif)For 17 months we've been talking about the nature of sounds and how we might represent them using simple analogue electronics. In a few months, we're going to start using this knowledge to dissect real sounds and recreate them using the components of typical analogue synthesizers. But before we get carried away by all the maths and physics, we should remember that synths are, above all else, musical instruments. This means that, before we can get the best from them, we must understand and become proficient at the ways in which we can control them.

Lest this sound like a clarion call to keyboard-playing snobs everywhere, it's worth pointing out that in the context of the typical _SOS_ readers' setup, the way in which you 'control' a synth might include playing a guitar and using some form of guitar synthesis, using vocal and/or other control signals to activate a synth using pitch/CV converters and envelope followers, or using some other form of external control, such as a sequencer. It could include waving your hands in the air in front of a proximity- or light-sensitive controller, or tweaking the resonance and filter cutoff knobs of a Roland TB303 whilst the internal sequencer cycles around a simple note pattern. Despite all this, it doesn't take much to point out that the primary method of controlling most analogue s[![](http://media.soundonsound.com/sos/oct00/images/synth1s.gif)][2]ynths _is_ via a keyboard, which is why I will be using this interface to illustrate most of the points that I make this month.

That said, here's a Synth Secret that I regard as axiomatic:

_If we're going to get the best from our synthesizers, we need to understand how their sounds react when played -- whatever means we use to play them._

This no-brainer was brought home to me a few weeks ago when I unearthed and started playing one of my lesser-used analogue monosynths -- a Yamaha CS20 -- with unexpectedly unpleasant results. If you had been there, you might have heard me muttering "the old girl's up the Swanee" (or something less printable) in dark tones. Half the notes seemed to be speaking a fraction of a second after I played them, and for a few moments, I was convinced that the trigger circuit was misbehaving. Fortunately, there was nothing wrong with my synth; I had simply forgotten that the CS20 has a high-note priority keyboard. I, being an ARP man at heart, am a low-note priority sort of guy, so I wasn't releasing the upper notes quickly enough, thus making the low ones speak too late. If all this means nothing to you, then you should _definitely_ read on.

**A Matter Of Priorities**

You would think that there's very little to complicate using a monosynth, wouldn't you? You just set up a sound on the control panel, press a note or send it a control voltage if it has an external input, and everything responds exactly as you tell it to -- right? Well, this may be true in isolation, but not when you start to play more than one note at a time.

Hang on a second... we're discussing _monophonic_ synthesis. Surely, there's never a time when you're going to play two or more notes simultaneously, is there? Actually, in all likelihood, you press two notes simultaneously every time you play a line on your synth. Whether you're playing a simple melody, a bass riff, an accompaniment, or an Emerson-esque lead extravaganza, it's unlikely that you'll release every note before playing the next. If you try, you'll probably play very unevenly, in a disjointed staccato fashion. So what effect do these little overlaps have?

Look at Figure 1 (left). This shows two representations for the simple four-note sequence D-F-A-C. Each note lasts for four beats, but the start of each note is separated from the previous by one beat. OK, so the notation in the upper stave is not strictly according to the rules (there should be a key signature, rests and so on) but we're not going to worry about that. Furthermore, the bar lasts for seven beats (which puts it in 7/4) but I'm an old prog-rocker, so we're not going to give that a second thought, either.

Now look at the lower representation of the sequence. This is my personal shorthand for depicting the pitch of the note, when it starts, and how lon[![](http://media.soundonsound.com/sos/oct00/images/synth2s.gif)][3]g it lasts. It's very similar to the grid edit pages of some sequencers and drum programs, so I imagine that you'll have seen something similar elsewhere. As you can see, the first note starts on beat one and lasts until beat five. The second starts on beat two and lasts until beat six... and so on.

If we play this sequence (which I'll call the 'input') on an organ or any other truly polyphonic keyboard, we hear the four notes speak on successive beats. After that, we then hear them ending on successive beats after the fourth note has spoken.

Unfortunately, and by definition, a monophonic synthesizer can only produce one note at a time. Fortunately, at some point during its design, someone will have decided how it will respond to this situation.

The most common response is called 'lowest-note priority'. This means that the lowest note held at any time is the one that the synthesizer will produce. That might sound simple, but Figure 2(a) shows what might happen to our sequence when played on a lowest-note-priority monosynth. As you can see, the output is quite different from the input. Because it's the lowest note, the first note is held for its entire duration, and the following notes can only speak when they become the lowest held notes.

The other common response is 'highest-note priority'. In direct contrast to lowest-note priority, this means that the highest note depressed at any time is the one that the synthesizer will play. Figure 2(b) shows what will happen to our sequence when played on a highest-note-priority monosynth. At least the notes speak at the right time with this approach, but they are curtailed when you play the higher ones. But before you suggest making all monosynths highest-note priority, I'm afraid that it isn't a panacea (as we'll see in a moment).

Before explaining why not, let's look[![](http://media.soundonsound.com/sos/oct00/images/synth3s.gif)][4] at two less common priority systems. The first of these is 'last-note priority'. Figure 2(c) shows the same sequence replayed using a monosynth based on this system. As you can see, the last (ie. most recent) note has priority, so you always hear the last note you pressed. Of course, this looks identical to the results you get with highest-note priority. But bear with me a moment.

The last of the four schemes is 'first-note priority'. In this case the first (rather than the most recent) note has priority. Figure 2(d) shows the result. This time, the output looks identical to that of the lowest-note-priority synthesizer.

So, can we say that last-note priority is the same as highest-note priority, and first-note the same as lowest-note? Sorry, but in general, this is _not_ true. It only seems like that because I chose an upward sequence of four notes to illustrate the problem. 

So let's look at the converse of this, and take a simple _downward_ sequence. Figures 3(a), 3(b), 3(c), and 3(d) show the same four priority systems, but the results are quite different from before.

With this sequence, lowest-note priority offers the same results as last-note priority, while first-note priority imitates highest-note priority. This is opposite to the result we achieved when playing up the keyboard, and I hope that the diagrams make it obvious [![](http://media.soundonsound.com/sos/oct00/images/synth4s.gif)][5]why! Furthermore, Figure 3(b) explains why I said that highest-note priority is no panacea... it only lets notes speak on time when you play up the keyboard.

Let's now complicate matters by playing a four-note sequence that changes direction. Study Figures 4(a), 4(b), 4(d), and 4(d), which show the input and outputs for such a sequence (see page 182). As you can see, the results are quite unexpected, and each is different from the other. Indeed, two of the sequences play just three notes, and the timing can be very odd compared with the original, regular beat.

At this point, I could continue to draw increasingly complex sequences, and show you how the four priority schemes make a mess of your playing. But I won't, because I suspect that you could now do this for yourselves without any further help from me!

**The Real World**

Of course, Figures 2(a) to 4(d) are extreme examples. It's highly unlikely that you will hang on to a note for three full beats after you intended to release it, but the principle remains the same, no matter how long or short the overlap. So here are a couple of rules to remember:

_(i): Hang on to a lower note for too long on a lowest-note-priority monosynth, and the following higher note will speak too late, making your playing sound uneven and off the beat. The same is true if you hang on to a higher note too long on a highest-note-priority monosynth, and then follow it with a lower note._

_(ii): Hang on to a lower note too long on a highest-note-priority monosynth, and the following higher note will still speak on time, so you'll get away with your bad technique. The same is true if you hang on to a higher note too long on a lowest-note-priority monosynth, and follow it with a lower note._

As you can see, I've limited these 'rules' to lowest- and highest-note-priority monosynths because these are by far the most common, and therefore the ones that you're most likely to encounter. However, since all keyboard playing involves playing up and down the keyboard, no matter which synth you're playing, you'll trip over these problems if you hold n[![](http://media.soundonsound.com/sos/oct00/images/synth5s.gif)][6]otes too long. The only exception to this will be a last-note-priority monosynth which, in general, will always play the notes at the moment that you press the keys.

**Triggers**

Up to this point, we've treated synthesizers as monophonic organs, and ignored the actions of their contour generators and the triggers that initiate their actions. But we can't carry on doing this indefinitely. To illustrate this, let's take the lowest-note-priority synth in Figure 4(a) as an example. In this case, the synthesizer holds the first note for its entire four-beat duration because this is the lowest note in the sequence. When this note expires, the synth then plays the remaining beat of the second note followed by the third note and, finally, the fourth note. But to do this, it must still be producing a sound at beats 4, 5, 6 and 7\. If the contour generators have already closed the VCF, or reduced the gain of the VCA to zero, no sound will be forthcoming whether you play another note or not -- see Figure 5\.

To overcome this, we must cast our minds back to part seven of this series (see _SOS_ November '99) and turn our thoughts once again to the triggers that initiate the contour generators which shape the loudness and tone of our sounds (see Figure 6). However, we must now extend these ideas to encompass keyboard priorities as well as the triggers and contours we discussed months ago.

As you know, the modules in Figure 6 need something to produce the trigger that initiates the contour generators, and to tell the VCO what pitch to produce. Bearing in mind what I said at the start of this article, let's simplify things and say that for the purposes of discussion here, the 'something' required to initiate the trigger is the key that you press on the synthesizer's keyboard.

Now let's illustrate this further. Figure 7 shows a simple keyboard synthesizer with a single VCO, a single contour generator, and a single VCA. It has no filter, so it can't shape the tone of the note, but it's perfectly adequate for our discussion. As you can see, the keyboard produces three output voltages. These are: a pitch CV to determine the pitch of the note; a Trigger to tell the contour generator when to 'fire'; and a Gate that tells the contour generator how long you keep a key (or keys) depressed.

Now let's apply the ideas contained in Figure 7 to the rising scale in Figure 2(a). Can you see the problems? For example, does th[![](http://media.soundonsound.com/sos/oct00/images/synth6_7s.gif)][7]e keyboard send a trigger only when all existing notes are released and a new key is pressed in isolation (so-called 'single triggering')? If so, do the contour generators allow sound to pass for the whole duration of the Gate? Alternatively, does the keyboard generate a trigger whenever you press a key, irrespective of whether existing notes are depressed or not (so-called 'multi-triggering')?

Let's look at the first of these cases applied to a lowest-note-priority keyboard. Figure 8 shows that, provided that the sustain is non-zero for the duration of the Gate, all the notes play, albeit at the wrong times, and without the correct articulation of the individual notes (this, by the way, is exactly how a Minimoog works).

In contrast, Figure 9 (which depicts the lowest-note-priority multi-triggering of an ARP synth) is nasty, because it shows that all four articulations occur during the first note, not when the other notes finally speak (this is where we diverge from what we learned in part seven of this series, which assumed last-note priority throughout). OK, so I've grossly exaggerated the extension of each of the notes, but the problem can become severe, even when you drag your notes just a little. Where you should have a release phase of the previous note and then a nice, sparkling, contoured new note, the last few moments of the old note are affected by the attack phase of the next contour. This can sound very unnatural, and is it a common performance error.

Indeed, further extending the ideas mentioned in part seven, I can make Figure 9 look and sound even worse by replacing its contour generator with one that 'resets to zero' each time it receives a new trigger (see Figure 10). The sustained D is now chopped up into sections, with no articulation of the later notes. Horrid!

But this still isn't the strangest trigger characteristic. It's not uncommon to find a synth that retriggers when you release previous notes, provided that at least one note is still depressed (see Figure 11). This can be quite useful, because it makes sounds speak correctly when you release the previous notes, but it makes slurs impossible because, in general, you can't make notes run into each other.

**Putting It All Together**

So where does this leave us? We have four pitch-priority schemes, and six or more permutations of[![](http://media.soundonsound.com/sos/oct00/images/synth8_9.s.gif)][8] triggering/contouring. This means that there are at least 24 keyboard characteristics that you might encounter when playing a monophonic synthesizer, each of which can demand a slightly different playing style if you are to achieve optimal results.

You could, I suppose, take the simplistic view and say that, if you play perfectly or sequence carefully, none of the above limitations will arise. But you can also turn this view around, and put some of the 'limitations' of these priority systems to your advantage. Here's an example of a technique that was used by numerous soloists in the '70s.

Using a multi-triggering, highest-note-priority synth, hold a low note (say, a bottom C) using one of the fingers of your left hand or, if you prefer, a wooden stake, a Hitler Youth dagger, or something similar (fans of Keith Emerson will know what I mean). Then play a solo using your right hand. If you play legato higher up the scale, the synth will perform conventionally and each note will be articulated correctly. But if you cease playing, the pitch will drop almost instantaneously to the bottom C and, if the VCF and VCA sustains are greater than zero, continue to produce this note until you start playing again.

You can develop this technique still further. Consider this: when you let the pitch drop to bottom C, you have not pressed a key (you have only released one) so -- on most synths -- the low note will not be articulated. This can be an expressive and subtle performance feature. If you now add a little portamento to the patch, the synth will swoop down without articulation, giving the note a different character from the main body of the solo. Then, when you press another key to continue playing, a trigger occurs, the contour generators do their stuff, and the pitch swoops up in a flurry of increasing amplitude and opening filters.

Many players used this technique to play impossible solos spanning two or three octaves. They did this by leaving short gaps between each of the notes played by their right hands, thus causing the bottom note to play between each. Played as a rapid staccato with ju![](http://media.soundonsound.com/sos/oct00/images/synthminikorg.gif)st a touch of portamento, and preferably with a huge Mellotron chord under your left hand, the result is extremely distinctive. It makes you sound like a virtuoso (well, actually, it makes you sound like Rick Wakeman) even though you can achieve it using just one finger of your right hand.

**The Real World**

I thought that it would be fun to finish this article by taking a short tour of some common monosynths to study their keyboard priorities and triggering regimes. So let's start with the most famous of all -- the Minimoog. This, as you would expect from the world's first integrated synthesizer, is one of the simplest of the bunch and, as stated above, uses lowest-note priority and single triggering. The same is true of the Minimoog's younger and less well-endowed little brother, the Prodigy. ARPs such as the Axxe and Explorer also use a lowest-note priority system, but retrigger when you play a higher note -- even though you still hear the pitch of the lower! Indeed, my Axxe often (but not always) retriggers when you release higher notes, too. I suspect that this is a fault, but I'm not complaining.

Jumping across to Japan, the Roland SH09 is another single-trigger keyboard, but with highest-note priority. The same is true of the Korg 700S, the Korg MS20, and the Yamaha CS20 which, of course, is where this articl[![](http://media.soundonsound.com/sos/oct00/images/synth10_11s.gif)][9]e began. However, other Rolands respond differently. For example, the SH2000 has highest-note priority and retriggers both on pressing and releasing any key (except the last).

I should also mention the Crumar Spirit. This boasts a last-note-priority system with a unique twist... It remembers the first note that you play and, once you have released all subsequent notes, it returns to this (provided, of course, that you are still holding it). This means that its keyboard combines last-note and first-note priorities! It may sound crazy, but it makes the Spirit an almost uniquely playable instrument.

So there you have it... even if you ignore the sound generation itself, not all monosynths are equal. Indeed, it seems that the Pacific Ocean determines how you play your keyboards. American synths are, almost without exception, lowest-note priority, while Japanese ones are predominantly highest-note priority.

This provokes an interesting thought. Since the heyday of the American monosynths was from 1970 to 1975, and the Japanese manufacturers arguably took over from 1976 to 1981, it's also true to say that highest-note priority overtook lowest-note priority as the dominant system. Maybe this is another reason why players who cut their teeth on Moogs and ARPs disliked later monosynths. In music, as in all else, we're always happiest with the system we learned first.

Consequently, when you choose a monosynth, you should ask yourself whether you prefer lowest-note, highest-note, or last-note priority (these being the three that you are likely to encounter) and whether you prefer single- or multi-triggering. These serious considerations could prove as important to you as the action of a guitar, or the placement of the individual drums in a kit.

Next month, we'll start looking at duophonic keyboards and beyond. Until then, have fun prioritising.![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/oct00/articles/synthsec.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/oct00/images/synth1.gif
[3]: http://media.soundonsound.com/sos/oct00/images/synth2.gif
[4]: http://media.soundonsound.com/sos/oct00/images/synth3.gif
[5]: http://media.soundonsound.com/sos/oct00/images/synth4.gif
[6]: http://media.soundonsound.com/sos/oct00/images/synth5.gif
[7]: http://media.soundonsound.com/sos/oct00/images/synth6_7.gif
[8]: http://media.soundonsound.com/sos/oct00/images/synth8_9.gif
[9]: http://media.soundonsound.com/sos/oct00/images/synth10_11.gif