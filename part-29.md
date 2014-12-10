# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Sep01/articles/synthsecrets29.asp][0]_

Having explained last month the reasons why analogue synthesis of guitar sounds should be well-nigh impossible, **Gordon Reid** puts the theory to the test... This is the 29th article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/sep01/images/synth_1s.gif)][2]I ended last month's explanation of the complexities of attempting to synthesize guitars with this statement: "You cannot create authentic-sounding acoustic guitar patches using analogue subtractive synthesis. This is one occasion when only digital technology will do!"

Since I'm writing this before that instalment of Synth Secrets is published, I have no idea whether this assertion has stirred up a storm of protest, or whether you have simply accepted it. Nonetheless, it's not very sporting to walk away from an argument (real or imagined), so I thought that it would be fun to try to patch an analogue model of the guitar sound, and to see how far it falls short of the ideal.

**A Real Guitar**

If we take a very simplistic view of an acoustic guitar, it seems straightforward to create a synthesizer patch that will imitate its major characteristics. Firstly, the instrument has six strings, so the synthesizer should have six voices. Secondly, strings produce complete harmonic series, so we set each of the oscillators in the voices to produce a sawtooth wave.

Next, we apply two bits of acoustic knowledge that are so familiar that they are almost truisms. The [![](http://media.soundonsound.com/sos/sep01/images/synth_2_4s.gif)][3]first of these is: the higher the pitch of an acoustic sound, the brighter it will be. The second is: at any given moment, the louder the sound is, the brighter it will be.

Recreating these characteristics on a keyboard synthesizer is easy: we use a low-pass filter, the cutoff frequency of which responds to the pitch CV (thus taking care of point one) and to a contour generator that duplicates the loudness characteristic of the sound (to take care of point two). The easiest way to do this is to use the same contour generator for both the brightness and the loudness. Since we are considering the case where the guitar's strings are plucked, we can model each string's amplitude response using an unconditional AD contour generator and a VCA. ('Unconditional', in this context, means that the Decay stage of the contour is completed whether or not we release the key producing the note.)

Putting it all together produces the simple six-voice synthesizer described by Figure 1\. Unfortunately, if you set up this patch on a synth with the appropriate architecture (the Roland Juno 6 is a perfect example), you'll find that, no matter what you do with the parameters, the sound remains singularly unlike a real guitar.

There are two reasons for this. The first lies in the voice assignment -- the way in which the synthesizer allocates its voices to the notes you play on the keyboard. The second lies in the inadequacies of the sound itself.

**Voice Assignment**

Let's start by considering the way in which a guitar allocates notes to its 'oscillators'. Consider the sequence in Figure 2\. This shows a simple chromatic scale running from G\# to B.

If you play this on the 'G' string alone, you will start on the first fret (G\#), thereafter stepping up each of the next three frets to play A, A\# and B. This has an important acoustic consequence: the plucking of each new no[![](http://media.soundonsound.com/sos/sep01/images/synth_6_7s.gif)][4]te terminates the previous one, reinitialising the brightness and loudness contours (see Figure 3, above right).

Now let's consider the arpeggio in Figure 4\. This shows the four notes C, F, A\# and D played across the A, D, G and B strings. In this instance, there's nothing stopping each note from dying away slowly, with its brightness and loudness decaying naturally to silence (see Figure 5).

So here's our first difficulty: how do we decide whether any given note in our guitar imitation should curtail a previous one and, if so, which one? This is a problem that needs a computer for its solution. No matter -- all but a tiny handful of polyphonic synthesizers use digital keyboard scanners, so this should not prove to be an impediment, provided that someone can work out a suitable algorithm that analyses the notes and causes them to respond appropriately.

There are two products I know that are capable of this. One is the Korg KARMA; the other is the Charlie Lab Digitar, a superb little device that takes previously sequenced MIDI notes, lets you strum/pick a guitar-like controller, and works out the correct virtual string assignments in real time. It then produces a new MIDI stream that imitates the playing of a real guitar. Not only does it create the correct MIDI Note _Ons_, it also outputs MIDI Note _Offs_ to truncate notes that would be curtailed when a new note was played on the same string. It even calculates the inversions up and down the neck for you! If you point the output from the Digitar at a suitable set of acoustic guitar multisamples, the results can be remarkably realistic.

But what has this to do with imitating the acoustic guitar using subtractive synthesis? Quite a lot, actually, because there's nothing stopping you from directing the output from the Digitar to any analogue synth with a MIDI input and internal MIDI/CV converters. So now we need only create the perfect guitar sound, and we're done...

**The Sound**

I ended Synth Secrets 28 with eight reasons why it is hard, if not impossible, to produce a realistic acoustic guitar sound using subtractive synthesis. Let's take a look at each of these, and see whether we can overcome the problems they represent:

_Each string produces a different waveform depending upon the plucking position._

Last month we saw how, when plucked in its centre, a guitar string produces a triangle wave for [![](http://media.soundonsound.com/sos/sep01/images/synth_8s.gif)][5]the first few cycles. I then explained that the interaction of the string and the soundboard excites other modes of vibration, including the even harmonics that are missing from the initial waveform.

So which synthesizer waveform should we use for our sound? One answer remains the sawtooth, the only common waveform that includes all the harmonics in the series. It's inevitable that these harmonics will be present in the wrong proportions, but at least they're present. However, a better choice would be to use an oscillator with a CV input that allows us to modify the harmonic content of the wave during the course of the note. At this stage, we've no way of knowing what we might apply as the modifying CV, but at least the facility is available (see Figure 6, above right).

_The shape and hardness of the fingers or the plectrum influences the high-frequency content of the initial waveform._

This suggests that we need to add an equaliser to the signal path before the signal passes through any other modifiers. The simplest that might be suitable is a high-frequency 'shelving' equaliser, similar to the 'High' EQ on a small mixing desk. With the high frequencies boosted, our patch will, in effect, model a hard ple[![](http://media.soundonsound.com/sos/sep01/images/synth_9_10s.gif)][6]ctrum. With the high frequencies suppressed, the sound will veer towards that produced by a soft plectrum or finger-picking with the pad of the fingertip (see Figure 7).

_The amplitude envelope of the oscillators depends upon the direction in which you pluck the string(s)._

As stated last month, a string plucked parallel to the top plate of the guitar has a lower amplitude, but a longer decay than one plucked perpendicular to the plate. Fortunately, it's easy to model this. We use an AD contour generator that offers simultaneous control over the amplitude of the Attack (AL -- Attack Level), as well as the Decay Time (DT). If the strum is parallel, the CV causes AL to decrease and DT to increase. If it is perpendicular, AL increases and DT decreases. We can also use this part of the patch to model the strumming/picking intensity. We do this by directing the velocity CV from the controller keyboard to the Attack Level and Decay Time, increasing each with greater velocity (see Figure 8 above).

_Strings' harmonics are 'stretched' as the pitch increases and/or the excitation increases in amplitude._

This is a tricky one, and there's nothing we can do to model it using subtractive synthesis. After all, the harmonics of a conventional oscillator lie at exact multiples of the fundamental frequency. If the real string does not conform to this relationship... well, that's tough. So let's move right along to...

_The guitar body has many densely packed resonances and anti-resonances that cannot be imitated using conventional equalisers or filters._

As we saw last month, a guitar's resonances are fiendishly complex and defy any attempts at simple analysis. Academic institutes spend considerable amounts of research time and funding on this problem, and this research has led in part to the algorithms now used in physical-modelling synthesizers. But as for a model suitable for implementation using analogue electronics, as far as I know, no such thing exists. N[![](http://media.soundonsound.com/sos/sep01/images/synth_11s.gif)][7]evertheless, we could -- with a lot of time and money -- employ a large number of parametric EQs with very high 'Q' values to produce something that approximates a body response.

Figure 9 shows the low- and mid-frequency body resonances of the guitar discussed last month, and Figure 10 shows an approximation of this, crafted via 12 extremely precise -- and no doubt extremely expensive -- parametric EQs. Graphic EQs are useless for this, because their bands are far too wide. Comb filters are useless because their peaks and troughs are in the wrong places.

As you can see, even in this idealised representation, which is far from the real response of even the most precise EQ bank, the responses do not look identical, and your ears will certainly be able to tell the difference. But it's a step in the right direction. Figure 11 shows a six-band parametric EQ bank added to the synthesizer patch. In all likelihood, we would need at least half a dozen of these to create a frequency respo[![](http://media.soundonsound.com/sos/sep01/images/synth_12s.gif)][8]nse that even approached something meaningful.

_Each string interacts with a system of complex resonators (the guitar body) that absorb energy and then direct it back to all the strings, exciting harmonics that may not be present in the initial waveform._

At this point, we need to create a feedback loop that will take the output from the filter banks and use it, in some way, to modify the waveform produced by the oscillator. The simplest way to do this would be to route the resonators' output directly back to the waveform CV input, thus modifying the wave at the same frequency as the signal itself. Unfortunately, this means that some harmonics are being added to, and removed from, the signal at audio frequencies... which is amplitude modulation. This will result in the creation of unwanted side bands, and is therefore quite unsuitable for our purposes (see part 11 of Synth Secrets, in _SOS_ March 2000, or surf to [_www.soundonsound.com/sos/mar00/articles/synthsecrets.htm_][9]). What we want is something that responds to the output from the EQ bank, but does so more slowly, making the waveform change more subtly over the course of a few cycles.

One way to do this would be to derive a side-chain from the audio signal, high-pass filter it to separate out the high-frequency content, and then pass the result through an envelope follower to determine the amplit[![](http://media.soundonsound.com/sos/sep01/images/synth_13s.gif)][10]ude of the separated signal. If the envelope follower responds too rapidly, we can use an S&H generator and a slew generator to create a smoothly changing voltage that varies within the right sort of timescale. Finally, we invert the output from the slew generator and apply the result to the waveform CV input of the oscillator (see Figure 12). Simple, eh?

It's important to realise that this is not supposed to represent the actual acoustic mechanism within the guitar. It simply gives you some idea of how the output from an oscillator can affect its own waveform.

Remember, too, that the waveform of a real plucked string tends towards toward a sine wave as time passes, with nothing but the fundamental present as the oscillation decays to inaudibility. As in Figure 1, we can model this by using a low-pass VCF whose cutoff frequency is controlled by the AD contour generator that also controls the audio signal VCA (see Figure 13).

Oh heck! Every six-string guitar has six of the systems shown in Figure 13, and each of them interacts with the others, modifying the waveform of the other five, as well as changing the decay characteristics[![](http://media.soundonsound.com/sos/sep01/images/synth_14s.gif)][11] of each (one string can provide energy to another, thus altering how it decays over time). These interactions are far beyond the scope of Synth Secrets, so our only sensible course of action is to treat each string as an isolated entity, as shown in Figure 14\.

Having done so, we must remember to set up each of the virtual voices individually, because the initial tone and amplitude characteristics of, say, a 0.052-inch wound bottom 'E' string are quite different from a 0.009-inch top 'E' string.

_The nature of the resultant sound is determined by the listening position and the angle between the listener and the instrument._

Good grief... we need _another_ complex EQ that models the spatial projection of the guitar body. Unfortunately (again) there's no standard way to set this up, so we will simply have to experiment to find something that sounds natural and pleasing. The block diagram for this is shown in Figure 15\.

**Guitar Performance Synthesis**

So there you have it: a huge modular synthesizer, patched to recreate the sound of an acou[![](http://media.soundonsound.com/sos/sep01/images/synth_15s.gif)][12]stic guitar. But we've still ignored the stretching of the harmonics, and we've not even attempted to recreate the true feedback characteristics of the string/body interaction. So, at best, this sound will merely approximate a guitar. Oh yes -- and we've ignored the fact that filter banks of this size and precision don't exist in the world of analogue synthesizers.

Nevertheless, let's ignore all of these problems, and assume that we've managed to create a set of authentic string tones. Unfortunately, we're still not going to convince any listener that we have a real guitar in our hands. This is because we have ignored all the other characteristics -- vibrato, pitch-bends, slides, and string squeaks, among others -- necessary to produce a convincing performance.

The first of these is not a big problem, because there are many ways of adding vibrato to an audio signal. The cheat's method would be to use a set of six LFOs (one for each string) with a set of six poly-pressure controlled VCAs. If this seems a little fanciful, I can think of one (mostly) analogue synth, the Sequential Prophet T8, that offers polyphonic aftertouch coupled to multiple LFOs. However, bear in mind that this mechanism only provides control over the depth of the vibrato, not the speed. I would prefer two mechanisms that could control both of these characteristics independently, but (like so much else in this article) that's wishful thinking. Perhaps a satisfactory compromise would be to divert the pressure CV to both the amplitude and the LFO speed, as shown in Figure 16 above.

We could use the same configuration to add pitch-bend to the strings, simply by taking a second output from the pressure CV and adding this to the pitch CV in the synth's Mixer. Unfortunately, this would mean that we could never separate pitch-bend from vibrato, and no guitarist could, or would, play like this. S[![](http://media.soundonsound.com/sos/sep01/images/synth_16_17s.gif)][13]o we need another controller source. We can't use velocity -- that's controlling the loudness and tone of the note. This leaves us with pitch wheels and foot pedals. However, we would need six of these to create a convincing performance, and that just isn't practical. Consequently, I think that we're going to have to ignore individual pitch-bends, settling for just a single bend applied to the whole patch. In keeping with conventional synthesizer architecture, we can use the pitch-bend wheel to apply this (see Figure 17). It will sound reasonable for one string, and maybe even when two are sounding, but woe betide you if you bend all six simultaneously. It will sound horrible.

Now, what about those string squeaks? It's easy to add them using a PCM guitar sound, whereby you add a sample of the squeak under every note, but restrict it to sounding within a limited range of MIDI velocities: say, 124 to 127\. This means that you can play the sound normally within (almost) the full dynamic range of the keyboard, but can add a squeak by hitting the appropriate note as hard as you can. We can't do this using any reasonable analogue synth (it's possible, but far from practical), so we'll have to ignore squeaks, too.

And how about glide? This should be easier. But once again we run into the problem o[![](http://media.soundonsound.com/sos/sep01/images/synth_18s.gif)][14]f control. It's all very well to add six slew generators to the pitch CV paths, but where do we generate the CVs that control the slew rates? The only realistic answer is to use a single control for all six slew generators simultaneously (see Figure 18, opposite). At least we can then slide between notes on a single string, and slide whole chords up or down the neck. But as for single-note slides within a chord, forget it. Oh yes, and don't disregard the fact that a guitar is a fretted instrument, so we should be quantising the slides (which travel across the frets), but not the pitch-bends or vibrato (which don't). If you would like to give yourself a headache, try to work out a patch that will offer this. It's a superb example of how difficult it is to create and manipulate multiple control signals using conventional keyboard synthesizers.

**Conclusions**

Let's finish by putting the whole thing together, in Figure 19, to see how it looks (see above). I make no claims for the diagram's veracity, nor do I state that it will do the job as advertised. But it will give you some idea of the complexity of the problem.

At this point, I suppose you would like to know how it sounds. Well, to be honest, I haven't a clue. Ignoring the stretched harmonics again, as well as the fact that the filter banks (resonators) don't exist, I simply don't have access to a poly-pressure sensitive, modular, analogue synth with well over 100 modules (plus the numerous signal splitters called multiples that I have ignored for the sake of clarity).

As I've said twice already, this is one occasion when only digital technology will do! ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/Sep01/articles/synthsecrets29.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/sep01/images/synth_1.gif
[3]: http://media.soundonsound.com/sos/sep01/images/synth_2_4.gif
[4]: http://media.soundonsound.com/sos/sep01/images/synth_6_7.gif
[5]: http://media.soundonsound.com/sos/sep01/images/synth_8.gif
[6]: http://media.soundonsound.com/sos/sep01/images/synth_9_10.gif
[7]: http://media.soundonsound.com/sos/sep01/images/synth_11.gif
[8]: http://media.soundonsound.com/sos/sep01/images/synth_12.gif
[9]: http://www.soundonsound.com/sos/mar00/articles/synthsecrets.htm
[10]: http://media.soundonsound.com/sos/sep01/images/synth_13.gif
[11]: http://media.soundonsound.com/sos/sep01/images/synth_14.gif
[12]: http://media.soundonsound.com/sos/sep01/images/synth_15.gif
[13]: http://media.soundonsound.com/sos/sep01/images/synth_16_17.gif
[14]: http://media.soundonsound.com/sos/sep01/images/synth_18.gif