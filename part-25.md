# Synth Secrets, Part 25: Synthesizing Brass Instruments  
_Original article: [http://www.soundonsound.com/sos/may01/articles/synthsecrets.asp][0]_

**Gordon Reid **builds on the acoustic theory of wind and brass instruments he introduced last month, and explains how to produce a convincing analogue trumpet sound. This is the 25th article in a 63-part series. Read [all parts][1].

![](http://media.soundonsound.com/sos/may01/images/synthoberheimobx.gif)Before going any further, I owe you an apology. At the end of Part 23 of Synth Secrets (see _SOS_ March 2001) I said that we would crack on with some genuine synthesis at the expense of some of the acoustic or electronic theory. I then gave you Part 24, which delved into a great deal of acoustics, and offered little in the way of synthesis. For this I must apologise, but the further I probed into the nature of pipes, the more I realised that it would take a couple of chapters to tell the whole story of synthesizing brass and woodwind instruments. Indeed, university textbooks offer hundreds of pages about pipes and the instruments created from them. Nevertheless, I have tried to condense the topic down somewhat. So this month, I offer you a practical approach to synthesizing brass.

**Beyond The Initial Waveform**

Last month I finished with a quick example: a look at how to create the basic elements of a trumpet-like waveform by subtractive synthesis. But as I pointed out in my final paragraph, that static approach ignored all consideration of how a real trumpet note evolves and changes over time, and that's what we'll examine more closely now.

Ask yourself this: when you hear two instruments play a note of identical loudness and pitch, how do you differentiate between them? Indeed, let's make the question even more difficult: when you hear two instruments that produce the same harmonic series play a note of identical loudness and pitch, how do you differentiate between them? For example, how can you tell the difference between a recorder playing a C, and a trumpet playing the same note? Both produce complete harmonic series (although for different reasons -- as explained last month, the recorder does so because it's an open pipe, while the trumpet does so because it's not cylindrical along all its length) yet they sound very different, both when playing individual notes, and in performance.

The reasons for this lie in the many other factors that determine the sound of a given type of instrument (or, for that matter, of individual instruments within a family). These factors include the following changes that occur during the course of a note:[![](http://media.soundonsound.com/sos/may01/images/synth1_4.s.gif)][2]

![](http://media.soundonsound.com/images/regulars/bulbow.gif) the loudness contour of the pitched note;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) the tonal contour of the pitched note;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) the pitch contour of the pitched note;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) the instrument's formants;

![](http://media.soundonsound.com/images/regulars/bulbow.gif) the attributes of any noise present in the signal.

As you can see, this is a far from trivial list. So let's return to the trumpet example, break the sound down into its individual parts, and see how we can use the sections of a modular analogue synthesizer to recreate them.

**The Amplitude Response**

By definition, the initial (or 'transient') response of a brass instrument is that section of the sound that occurs at the beginning, before the note settles down into its 'steady state'. Although some of the attributes of the transient are pre-determined by the nature of the instrument, the player can also influence its nature by adopting different tonguing and blowing techniques. These techniques allow the player to alter the pressure that initiates the standing wave in the tube (refer back to last month if this talk of standing waves is confusing you). This means that the amplitude response of the transient can be gentle, rapid, or even (if the air is expelled violently) 'plosive'.

If you measure the amplitude changes of the transients in softly and vigorously blown pipes, you get similar results (see Figure 1 above). What's more, the response describes a shape you should recognise. Although the durations of the stages differ, you can approximate these curves using the Attack, Decay and Sustain stages of a conventional four-stage ADSR synth contour generator.

Of course, this is no accident. Pioneers such as Bob Moog and Alan R Pearlman (of ARP) chose the ADSR contour for good reasons, and it's something that you'll find on nearly every analogue synthesizer. So now we know what we're going to use for the first part of our output (audio) VCA contour!

Now let's turn to the plosive case, which occurs when players use their tongues to speak a 'T' or 'D' while blowing the instrument. This is more complicated than the other examples, because the transient amplitude does not follow an ADS contour. Instead, it exhibits an almost instantaneous Attack at the instant you blow the note, followed by a slower second Attack before reaching the Sustain Level (see Figure 2, previous page). This means that you need a different type of contour called an A(AL)A2S, which stands for Attack, (Attack Level), Attack2, Sustain. Unfortunately, although you can find such an envelope on certain digital synthesizers, it's not available on analogue synths. But don't despair... physics comes to your aid here. If you create an ADS contour with, theoretically, an instantaneous Attack, the limitations of the electronic circuits 'round off' the transient, and you get a contour similar to that generated by the real instrument (see Figure 3, right).

We're now in a position to define one of the stages in the synthesis chain of our brass sound, as shown in Figure 4 (right). Note the extra module in the block diagram. This is the loudness sensor which, on most synthesizers, will be a keyboard velocity sensor. You route this so that, as you hit a [![](http://media.soundonsound.com/sos/may01/images/synth5_6.s.gif)][3]key harder (thus simulating the increased air pressure as the brass player blows into the mouthpiece harder and harder) the transient gets faster and faster. In practical terms, this means that the Attack stage gets shorter as the velocity increases. Unfortunately, most vintage synths do not have this facility so, to emulate this effect, you may have to tweak the Attack knob or slider by hand as you play.

Now that the amplitude of the sound has reached its steady state, you have to consider what happens to it until the end of the note. Simplifying matters somewhat, you find that there are three other main factors to consider.

The first of these is tremolo -- delayed or otherwise -- that the player may add by modulating the air pressure once the note has reached the steady state. We can synthesize this by applying an LFO to the gain of the VCA. The second is any swell or _diminuendo_ the player may apply during the course of the note, and it's easy to generate this if the synthesizer has a suitable controller or a contour generator with more than four stages. The final factor is the time it takes for the note to die away when the player stops blowing. This is the simplest of all... it's the amplitude contour's Release time. On a brass instrument, this is very short. You can generate all three of these factors as shown in Figure 5).

If I now put Figures 4 and 5 together, I get the envelope shown in Figure 6(a),. This is a typical 'swell brass' envelope, and it is easily produced by a synth with a five-stage amplitude contour and an LFO that can be routed to the audio signal VCA.

Unfortunately, few analogue synthesizers offer five-stage contour generators, and most of us make do with the traditional four-stage ADSR generator. This means that the contour in Figure 6(a) is out of the question, and we must limit ourselves to the amplitude envelope shown in Figure 6(b). But don't despair... some of the greatest synthesized brass sounds ever created emanated from synths with ADSRs, such as the ARP Odyssey, Sequential Prophet 5, Oberheim OBX, and Moog Memorymoog, to name just four.

**The Tone Contour**

Now let's consider the brightness of the sound. Last month, I looked at the steady-state spectrum of the waveform as produced at different pitches, but let's quickly recap. You should recall that louder notes have more harmonics than quieter ones. Figure 7 shows how we can achieve this us[![](http://media.soundonsound.com/sos/may01/images/synth7_10.s.gif)][4]ing the pitch CV and a loudness sensor to affect the cutoff frequency of a low-pass filter. Furthermore, you know that the loudest harmonic need not be the fundamental (as in overblown notes). Again, Figure 7 provides a solution: by making the resonance proportional to the loudness, you ensure that high harmonics are accentuated to a greater and greater degree as we play louder and louder. But neither last month's analysis nor Figure 7 tells you what happens at the start of the note...

You might think it obvious that the player's tonguing and blowing techniques would change the loudness contour of the transient. However, you might be more surprised to hear that they also alter the mix of harmonics within the transient, thus making the timbre more or less aggressive. Vigorous tonguing (no giggling at the back, please) can even make high harmonics the loudest, thus pitching the transient an octave (or more) higher than the fundamental -- see Figures 8, 9 and 10\.

If you study Figure 8, you'll see that the loudness of the third harmonic is still increasing after the fundamental has attained its peak level. In Figure 9, all the harmonics appear to attain their steady-state amplitudes at the same time. In fact, neither description is quite right. Ignoring the plosive case (which would require an instalment of Synth Secrets to itself) it's a reasonable approximation to say that the[![](http://media.soundonsound.com/sos/may01/images/synth11_12.s.gif)][5] harmonics beneath the instrument's natural cutoff frequency (for any given note) reach their sustain levels together, and more quickly than the harmonics above the cutoff point (see Figure 11).

This might seem to be in conflict with the amplitude graphs in Figure 1, but it isn't. By and large, the amplitudes of the higher harmonics are low compared to those of the fundamental and lower harmonics, so the slow development of the higher harmonics has little effect on the amplitude envelope. Therefore the red line in Figure 11 (the summed amplitude of the lower harmonics) looks almost identical to the red line in Figure 1, which shows the overall transient response.

However... while the tardiness of the higher harmonics has little affect on the development of the amplitude, it has a huge effect on the tone of the sound. Indeed, some researchers believe that the differences in the development rates of the harmonics are the most important audible clue you have as to the identity of an instrument when you hear it.

In theory, you can recreate a response similar to that shown in Figure 11 using a simple low-pass filter and an associated AR contour generator to create the filter profile shown in Figure 12\. But if you try this, you'll find that your brass sounds are very unconvincing. To a large extent, this is because we have overlooked the 'parp' of the initial overblown pulse of air released by the player to initiate the note. To recreate this, you need a four-stage ADSR contour generator, as shown in Figure 13\. For realism, you also need to add velocity sensitivity to the patch, and you do so by hooking up a velocity sensor to control the amount of ADSR contour applied to the VCF cutoff frequency (see Figure 14). As you can see, this diagram has an extra module that I've not used before: a pressure (or 'aftertouch') sensor. Hooking this up to the gain of the VCA controlling the envelope amount allows you to vary the brightness during the sustained part of the note, just as a 'real' brass player would do.

**Pitch Modulation -- Growl & Vibrato**

This still isn't the end of the story. All brass instruments require a 'settling time' at the start of the note. This is because it takes a finite amount of time for the standing wave to reach its steady state. For a note of, say, 256Hz (middle C), this 'settling' takes about a dozen cycles. This means that there's a period of pitch instability lasting about 50mS: a duration of the same order as the time it takes for all the harmonics to reach their steady-state amplitudes (this explains why all horn players sometimes fluff the initial pitches of notes... to a large extent it's the instrument's fault, not that of the players!).

Now, you might expect to apply some sort of modulation to the oscillator to emulate this, but there's a good reason not to do so. Any form of periodic or even quasi-periodic modulation applied to the frequency of the oscillator will result in frequency modulation (FM), and therefore lead to the production of side-bands (see part 12 of Synth Secrets, back in _SOS_ April 2000, or check out [_www.soundonsound.com/sos/apr00/articles/synthsecrets.htm_][6]). This would destroy the timbre of the brass patch, and take it off in a new direction entirely. Instead, I apply a modulator to the low-pass filter in a way that achieves the desired effect.

Over the years, I've found that a triangle wave is an acceptable source for this modulation, and a frequency in the region of 80Hz does the trick nicely (this, by the way, is one of the reasons why I point out that a maximum LFO frequency of, say, 25Hz is inadequate when reviewing synths). Of course, you don't want the resulting growl to last for the duration of the note; it should last as long as the instability in the acoustic instrument we're synthesizing. Therefore, we patch the modulation into the filter through a VCA whose gain is controlled by an AD contour generator, as shown in Figure 15\.

Again, I've patched a pressure sensor to the gain control input of the VCA controlling the amount of growl. I discovered how useful this could be when I bought a touch-sensitive ARP Pro-Soloist, which allows you to re-introduce the growl using aftertouch. This is a fantastic way to add expression, imitating those instances when a brass player over-blows the instrument. If you don't have aftertouch sensitivity on your synth (or if you're not using a keyboard synth) you can achieve the same result using other controllers such as joysticks and CV pedals.

There's one more modulation to introduce before the emulated brass sound can be considered finished. This is vibrato, which players introduce and control by adjusting the tension of their lips once the note has reached its steady state. Since vibrato does not occur during the transient stage of the note, you can't simply apply an LFO to the oscillator. Delayed vibrato is what is required, and it's usually implemented as an AR ramp controlling the amount of modulation. Figure 16, right, shows the patch that creates this. I[![](http://media.soundonsound.com/sos/may01/images/synth13_16.s.gif)][7] find that modulating frequencies in the region of 5Hz sound the most realistic, and that the amplitude of the modulation must be very low, otherwise the timbre will sound electronic.

**Noise**

In addition to everything above, noise forms part of the signal in any pipe-based instrument. This is because some of the air within a real instrument will become turbulent, unlike the idealised cases I discussed last month. Scientists refer to this noise as 'aerodynamic' or 'turbulent' noise.

If the pipe did not confine this turbulence, it would be largely 'white' within the limits of its bandwidth. However, the formants of the instrument shape the noise, as does the player's technique. For some instruments -- pan-pipes are a perfect example -- the noise content is a large part of the sound's appeal, but for most orchestral instruments this is not the case, and it should be almost undetectable in normal playing. What it adds, however, is a low-level, tuned undertone to the sound -- sometimes harmonically related to the note, but often not. If we add noise in this way (see Figure 17) it can add a great deal of realism to the synthesized sound.

**Putting It All Together**

Now for the exciting bit. Given a large enough and suitably equipped modular sy[![](http://media.soundonsound.com/sos/may01/images/synthlarge.s.gif)][8]nthesizer, there's no reason why we shouldn't create the entire patch described above. Being realistic, we must make some compromises, using common elements in many places within the patch. Figure 18, on the last page of this article, shows the result. I think that I've incorporated everything from the preceding pages, but if I've missed anything, please don't bother to tell me. You have no idea how long it took me to figure out a way to draw the diagram sensibly...

By the way, if you think that Figure 18 looks like the block diagram from a synthesizer service manual, you would be right, because it includes many of the modules from a single-oscillator synth.

**Conclusion**

This chapter of Synth Secrets may seem very detailed, but, in reality, an undergraduate student of acoustics could pick many holes in it. This is because, while I have attempted to explain the most[![](http://media.soundonsound.com/sos/may01/images/synth17.s.gif)][9] important elements of brass instruments, and describe them from the perspective of a synthesist, the truth is _still_ more complex than presented here. For example, we've ignored any conventional pitch envelope that the player might wish to create (including portamento effects) and the effects of formants on the timbre of the tonal elements of the sound. I have also ignored the phases of the harmonics which, due to the complexities of brass instruments, are not all in phase with one another. Furthermore, the amplitude of individual harmonics may change during the course of the note, and in ways that we cannot easily emulate using low-pass filters and amplifiers. Even the frequencies of the harmonics (which, at this point, we should strictly call 'partials') are not constant, and can vary between the transient and the steady state. Indeed, for reasons we need not dwell on here, the partials are not, strictly speaking, harmonics at all. Their frequencies are stretched out (sharpened) as the harmonic number increases.

When you look at it like this, you have to conclude that subtractive synthesis is not an ideal way to recreate brass sounds. In theory, microtonal additive synthesis would be a far better way to go about it. Indeed, additive synths such as the Kawai K5 and K5000 are superb at recreating brass-type sounds (see _SOS_ January 1997 or [_www.soundonsound.com/sos/1997\_articles/jan97/kawaik5000w.html_][10]). Nevertheless, if you're careful about it, subtractive synthesis can make more than a passable stab (pun intended) at producing the sounds of brass instruments, and even this simplified analysis should help you to create better patches and better performances.

**Epilogue**

So... what do you do if want to put some of this theory into practice on your synth, but don't possess a fraction of the elements needed to recreate Figure 18 accurately in your studio? Don't despair, because next month, we'll look at a number of common monophonic synthesizers, and see how we can recreate the essence of that diagram on more limited equipment. Until then... ![](http://media.soundonsound.com/images/regulars/sos_end.gif)

[0]: http://www.soundonsound.com/sos/may01/articles/synthsecrets.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/may01/images/synth1_4.gif
[3]: http://media.soundonsound.com/sos/may01/images/synth5_6.gif
[4]: http://media.soundonsound.com/sos/may01/images/synth7_10.gif
[5]: http://media.soundonsound.com/sos/may01/images/synth11_12.gif
[6]: http://www.soundonsound.com/sos/apr00/articles/synthsecrets.htm
[7]: http://media.soundonsound.com/sos/may01/images/synth13_16.gif
[8]: http://media.soundonsound.com/sos/may01/images/synthlarge.gif
[9]: http://media.soundonsound.com/sos/may01/images/synth17.gif
[10]: http://www.soundonsound.com/sos/1997_articles/jan97/kawaik5000w.html