# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/Dec01/articles/synthsecrets1201.asp][0]_

[![](http://media.soundonsound.com/sos/dec01/images/synth123s.gif)][1]Building on the theory of what makes up the sound of timpani, as explained last month, this month's Synth Secrets reveals how to synthesize realistic kettle drums using a Korg MS20 and a Yamaha DX7\. This is the 32nd article in a 63-part series. Read [all parts][2].

_**Gordon Reid  
**

---

_

Last month, I spent the whole of Synth Secrets introducing the various families of percussion instruments, and conducting a detailed analysis of one small sub-class of these: the pitched membranophones. This month, having primed you with all the theory of kettle drums (or timpani), I'll investigate a number of ways to translate what you have learned into practical synthesis.

**More About Spectrograms**

I'll start with last month's Figure 11, reproduced here as Figure 1\. This is a simplified and idealised spectrogram of the sound of a single kettle drum being struck once.

Spectrograms are very useful because, although drawn in two dimensions, they represent all three dimensions of sound: time, frequency, and loudness. OK, it's easy to see the time and frequency axes, but where is the loudness information? Well, in my diagram it's represented by the brightness of the red at any given point on the chart. I'll give you an example: the point marked '1' in Figure 2 below represents a sound of frequency 150Hz, measured 0.1 seconds after the start of the spectrogram, with an intensity of around 95 percent of maximum amplitude. Likewise, the point marked '2' represents a component of frequency 750Hz, 0.3 seconds after the start of the spectrogram, with an intensity of about 35 percent. Of course, it's highly unlikely that all the components of the sound would start at the same amplitude, but I'll address that issue later.

Now that you understand what Figure 1 is telling you, you should be able to 'see' how a single strike of the kettle drum sounds. You should also be able to hypothesise that the sound produced by striking the drum three times (thus re-energising the sound on each occasion) will look like Figure 3 below.

**Modelling Timps -- Pitched Modes**

These spectrograms give a strong clue about how to model the sound of timpani. As you can see, Figure 3 depicts five strong partials in the sound, plus a wash of frequencies that decay more quickly than those partials.

I don't know about you, but Figure 3 screams 'additive synthesis' to me. I first introduced this in part 14 of this series (see _SOS_ June 2000 or [www.soundonsound.com/sos/jun00/articles/synthsec.htm][3]), at the end of which I drew the block diagram shown in Figure 4 on the next page. This architecture may look complex, but it's not. Starting from the left, there's a single trigger which, in the real world, will be provided by a keyb
FREQUENCY RELATIVE

MODE
TO PRINCIPAL

OF TIMPANI

1,1
1.00

2,1
1.50

3,1
1.98

4,1
2.44

**Table 1: **The most important partials of a real kettle drum.

oard. This trigger initiates the action of six contour generators. Four of these control the gain of Amplifiers 1 to 4, which pass the outputs from Oscillators 1 to 4\. The other two control the cutoff frequency of a filter and the gain of an amplifier that, in turn, determine the tone and loudness of the contribution of a noise generator.

Let's now choose the frequencies and waveforms for the oscillators. This is simple: you know from last month that the relative frequencies of the first four radial modes are as shown in Table 1 below, so, if you know the frequency of the principal 1,1 mode, you can calculate the frequencies of the others.

Measurements of real timpani show that the principal frequency of a large kettle drum is higher than you might expect. In these days of super-deep analogue thumps and almost subsonic bass, a kettle FREQUENCY RELATIVE
FREQUENCY 

MODE
TO PRINCIPAL
IN HZ

OF TIMPANI

1,1
1.00
150

2,1
1.50
225

3,1
1.98
297

4,1
2.44
366

**Table 2:** The frequencies of the first four kettle drum partials.

drum has a (not particularly deep) principal frequency of around 150Hz. This is all you need to work out the frequencies of the first four modes (they're shown in Table 2 on the next page). Furthermore, because I'm talking about individual modes of vibration, the waveforms are sine waves.

Now let's consider contour generators 1 to 4\. Looking at the spectrogram, it's clear that each should generate a simple Attack/Decay/Release contour with Attack = 0, and equal Decay/Release rates (ensuring that each contour completes its decay whether you hold the key or release it before each note is concluded). However, it's also clear that the four contours should have different values for the Decay/Release.

Figure 5 above shows idealised decay times for the first nine modes, of which the ones in red are the quasi-harmonic partials. Now, I happen to know (because I drew the diagram) that the relative decay/release times for the first four quasi-harmonic partials are approximately 45 percent, 73 percent, 91 percent, and 84 percent respectively. You might think that this is all the information you need before defining the precise contour for each mode, but before you can determine these, you need to know the relative amplitudes of each. For that, I refer you back to another of last month's diagrams, reproduced here as Figure 6 above.

This diagram suggests that amplitude ratios of approximately 5:4:3:1 would be appropriate for the first four modes. Knowing this, you can set your four contour generators as shown in Figures 7(a) to (d) on the next page.

FREQUENCIES OF

FIRST FIVE 87HZ

MODULATOR

HARMONICS
FREQUENCIES OF FIRST FIVE 100HZ CARRIER HARMONICS

**100**
**200**
**300**
**400**
**500**

**87**
w1+w2
187
287
387
487
587

w1-w2
13
113
213
313
413

**174**
w1+w2
274
374
474
574
674

w1-w2
74
26
126
226
326

**261**
w1+w2
361
461
561
661
761

w1-w2
161
61
39
139
239

**348**
w1+w2
448
548
648
748
848

w1-w2
248
148
48
52
152

**435**
w1+w2
535
635
735
835
935

w1-w2
335
235
135
35
65

**Table 3:** The first 25 partials generated by amplitude modulation of two signals with frequencies 100Hz and 87Hz.

**Modelling Timps -- Enharmonic Modes**

Now that you've defined the components supplying the pitched part of the sound, you need to define the burst of noise at its start.

Here's an admission: last month I was lazy. Instead of drawing myriad little lines of low amplitude to represent all the enharmonic modes generated when you hit a kettle drum, I used my graphics p![](http://media.soundonsound.com/sos/dec01/images/synthdx7.gif)ackage to draw something similar: a burst of white noise. But that's not what you get when you strike a membrane. You get myriad enharmonic partials. So what can you do to emulate this correctly? The solution is surprisingly simple. You can use a ring modulator (a form of amplitude modulation, 'AM') or frequency modulation, 'FM'.

Let's consider ring modulation, simply because this is the means most likely to lie at your disposal. If you cast your mind back to part 11 of this series (see _SOS_ March 2000 or [www.soundonsound.com/sos/mar00/][4] articles/synthsecrets.htm), you'll remember that this is a special case of Amplitude Modulation. As such, it uses two signals (which I'll call '1' and '2'), and produces side-bands according to the complex equation shown below, where w1 is the frequency of signal 1, w2 is the frequency of signal 2, a1 is the amplitude of signal 1, and a2 is the amplitude of signal 2\.

If the modulator and carrier signals are merely sine waves (which, remember, have no harmonics), the result is not very useful; it's simply the carrier, plus two signals of frequency (w1 + w2) and (w1 - w2). How[![](http://media.soundonsound.com/sos/dec01/images/synth456s.gif)][5]ever, if you set both the modulator and the carrier to be harmonically rich sawtooth waves, the result is two complete harmonic series that interact according to that complex equation.

Let me demonstrate the consequences of this by calculating a matrix that shows the 50 partials generated by the interaction of just the first five harmonics of each waveform (see Table 3 below).

If I show Table 3 as a chart of frequencies (as in Figure 8 below), you can see that the results are far from harmonic, with many clumps and clusters of partials. All this, and I only calculated the outputs generated by the first five harmonics in each signal. Given that, within the audible 20kHz audio spectrum, there are 230 harmonics of an 87Hz signal, and 200 harmonics of a 100Hz signal, there will be 46,000 partials in the modulated signal. Notwithstanding the tiny amplitudes of most of them, that should do the trick!

There's just one problem with this result. You should know from last month's discussion that a kettle drum produces just one partial below the principal, but my -- albeit arbitrary -- choice of 100Hz and 87Hz has generated about a dozen components below 150Hz. Increasing the frequencies of the signals feeding the ring modulator does not alleviate this, so I will place an high-pass filter in the signal path to remove the offending low frequencies (as shown in Figure 9 below). Now you have only to make the Decay/Release of thi[![](http://media.soundonsound.com/sos/dec01/images/synth7s.gif)][6]s contour generator suitably short, and you have the desired burst of closely spaced, enharmonic modes that decay quickly after the membrane is struck.

At this point, I should make it clear that the partials generated by ring modulation do not lie at the correct frequencies for a kettle drum. Nonetheless, the effect should be sufficient for your purposes.

It's now time to consider the strength with which the drum's membrane is struck. As explained last month, this affects only the loudness of the sound, so you can emulate this by adding a VCA at the end of the signal chain, perhaps controlling its gain using keyboard velocity (see Figure 10, right).

Finally, the pitch of the sound must be controlled. You could use the keyboard to 'play' the sound in conventional semitones, but real timpani do not work this way. I therefore propose to use the pitch-bend wheel or a CV pedal to span a range of pitches (say, plus or minus a fifth) and restrict my playing to just one or two notes on the keyboard itself (see Figure 11, right).

You're now in a position to construct an analogue timpani synth, as shown in Figure 12 below. The eagle-eyed among you might notice that I've omitted the complex EQ bank that would follow the final amplifier to model the sound dispersion pattern of the real instrument, but I hope you'll forgive me that -- it'll help to keep t[![](http://media.soundonsound.com/sos/dec01/images/synth8_9s.gif)][7]he graphics department at _Sound On Sound_ on my side.

If Figure 12 looks complex, it isn't as bad as you might fear. The 'radial mode' generator comprises 12 modules, but these are just four sets of an oscillator/amplifier/contour generator setup. Likewise, the 'circular mode' generator, pitch controls and final gain are simply Figures 9, 10 and 11 incorporated into the patch.

**Sometimes Digital _Is_ Best...**

Unfortunately, most of us do not have access to the powerful modular analogue synth needed to create the patch in Figure 12\. So, in a moment, I'll demonstrate how a simple and relatively cheap analogue synth can give you a surprisingly accurate imitation of the kettle drum. However, tens of thousands of us have an ideal synth for creating the patch. You may not realise it... but if you own a DX7 or any other six-operator FM synth, you're in business.

Look at algorithm 31 on a DX7... it's the same as Figure 13 below. Now, remembering that each operator on a DX7 is a sine-wave oscillator with an associated pitch envelope generator, amplitude envelope gene[![](http://media.soundonsound.com/sos/dec01/images/synth10_11s.gif)][8]rator, and amplifier, it's clear that you can use Operators 1 to 4 as the 'radial mode' generators in Figure 12\. Indeed, so suitable is the DX7 that you can type the 1.00:1.50:1.99:2.44 frequency ratios directly into the algorithm.

Similarly, Operators 5 and 6 are equivalent to the 'circular mode' generator in Figure 12\. OK, so the DX7 algorithm uses FM to generate its enharmonic frequencies, whereas the analogue patch used a ring modulator, but the effect is much the same. Indeed, FM produces even more components with no harmonic relation to the pitched part of the sound, and is arguably even more suitable than ring modulation.

Using my DX1, I created an approximation to the patch in Figure 12 in a little under five minutes. Even in its rough form, it was remarkably usable.

I then loaded Yamaha's own timpani patch. Ooh... this uses algorithm 16, has just one carrier, and sounds far better than my first attempt. The difference appears to lie in the realism of the initial part of the[![](http://media.soundonsound.com/sos/dec01/images/synth12s.gif)][9] sound so, if you want to program the best possible imitation, you'll need to analyse the short-lived enharmonic components more accurately. Unfortunately (or fortunately, depending upon your fondness for higher maths) a more detailed model of the sound is beyond the scope of Synth Secrets.

So let's now return to the analogue domain and see if it's possible to simplify the patch while still retaining the essence of the desired sound.

**The Korg MS20**

Figure 14, below, shows in simplified form the control panel of that most popular of vintage synths, the Korg MS20\. Normally associated with the squeaks and squeals of modern dance music, this is an under-rated synth for careful, imitative synthesis. The reason for this generally lies in its rather lacklustre 12dB-per-octave filters, which are not ideal for powerful sounds such as brass. Nevertheless, the filters need not always be a limitation, as you will see.

Since the MS20 has just two oscillators, and neither of these produces a sine wave, you ca[![](http://media.soundonsound.com/sos/dec01/images/synth13s.gif)][10]n't create the pitched part of Figure 12 as drawn. Nor can the MS20 produce slightly detuned partials. So you must compromise... you need to choose a waveform with just a few strong harmonics, and filter off the rest of them. You can do this by choosing the triangle wave for Oscillator 1, ignoring Oscillator 2, and reducing the low-pass filter cutoff frequency (see Figure 15).

However, you can do better. If you refer back to Figure 6, you'll see that the relative amplitudes of the first three partials are only slightly different. So you can use the MS20's twin filters to sculpt the '1/n2' amplitude relationship of the triangle wave (shown in Figure 16) into something far more akin to the desired shape (see Figure 17). Notice in particular how this removes the fundamental of the triangle wave, and ensures that t[![](http://media.soundonsound.com/sos/dec01/images/synth14s.gif)][11]he first four partials have the required 1:1.5:2:2.5 relationship seen in Table 1, rather than 1:2:3:4, as would be the case if the fundamental survived filtering.

You can improve this even further by adding resonance (or 'peak' in Korg-speak) to the filters' cutoff frequencies, further enhancing the contributions from the partials contained in the narrow band of frequencies between the two cutoff frequencies. 

But what of the non-pitched partials in the kettle drum sound? You can use Oscillator 2 to provide these if you select the Ring Modulator option and the lowest footage, and then detune the oscillator so that it p[![](http://media.soundonsound.com/sos/dec01/images/synth15s.gif)][12]roduces a suitably clangorous tone (I find that something in the region of +2 works quite well). You can then mix a little of this with Oscillator 1 to create the desired timbre.

You now create a simple Attack/Decay/ Release envelope using EG2 to shape the amplitude of the note. Remember to set the decay and release times to be equal, so that the sound decays consistently whether you release the key or not. Finally, feed a little of the CV from EG2 to the low-pass filter cutoff frequency. This makes the sound brighter at the start, and reduces the brightness as the volume decays. This is correct: remember that the higher partials in Figures 1, 2 and 3 decayed more rapidly than some of the lower ones, so applying the EG to the low-pass filter overcomes the lack of independent VCAs. The resulting patch appears in Figure 18 (below left).

**A Better MS20 Patch**

The patch in Figure 18 is very sensitive to tiny changes in certain parameters -- particularly the VCO2 pitch and the filter settings -- but once set correctly, it can give the impression of a kettle drum. Nonetheless, it's not particularly satisfying. Indeed, considering the care with which I've followed the theory, it's remarkable just how unconvincing it is. I suspect that this is due to the limitations of the MS20's ring modulator, which gives no control over the input signals, so let's cast theory to the wind and see whether another method can produce more con[![](http://media.soundonsound.com/sos/dec01/images/synth16_17s.gif)][13]vincing results.

If you study Figure 19, you'll see that my next patch (which is Korg's 'factory' timpani patch) uses a pulse wave as its starting point, and that the ring modulator is not detuned. This makes the basic timbre much less clangorous than the patch in Figure 18\. Other parts of Figure 19 are more familiar: both filters again have resonance, further emphasising the second, third and fourth harmonics, and EG2 again affects the low-pass filter cutoff frequency.

However, if you play this part of the patch alone, you'll find that it sounds nothing like a kettle drum... it's just a simple bass sound, and not a very good one, at that. But now have a look at the semi-modular patch matrix provided by the MS20, shown on the right-hand side of the diagram.

Look closely, and you'll see that the noise generator is feeding pink noise to the input of the External Signal Processor. This type of noise is already deficient in high frequencies, and the high-pass filter in the ESP is removing the low frequencies, so the result is a narrow band of noise. Furthermore, at the setting[![](http://media.soundonsound.com/sos/dec01/images/synth18s.gif)][14]s shown, the input of the ESP is distorting, so the result is a very 'rough' timbre. This is then directed to the input of the MS20's main filters, where it is even further narrowed and emphasised by the overlapping resonant filters.

The result is a band of highly tuned, somewhat distorted noise that takes the place of the ring-modulated sound in Figure 12, and does so very effectively. Indeed, it sounds remarkably similar to the unpitched sound produced by the kettle drum. If you now add back the pitched partials from the oscillators, the result is extraordinarily life-like, with the sound from the oscillators providing the characteristic 'ringing' of the kettle shell as the sound decays.

Having got this far, you could go on to patch the CV Wheel to the oscillator pitches (as suggested in Figure 12) and develop a number of small performance enhancements. However, lack of space precludes me from doing so here, and this is something that you'll just have to try for yourself.

**More Patching Ideas**

If you look back to the start of this article, you'll see that I've gone full circle. Having admitted that, in Figure 1, the 'noise' representation of the enharmonic modes is the result of my laziness, it turns out that using a noise generator is indeed a highly satisfactory way to model a kettle drum. But why stop there...?

As I discussed last month, timpani are far from the only pitched membranophones so, if you own an MS20, you should consider using these ideas to create a wide range of pitched drum sounds. This is si[![](http://media.soundonsound.com/sos/dec01/images/synth19s.gif)][15]mply done: take the patches in Figures 18 and 19, and experiment with the pitches, filter settings and envelope times. You should easily create other pitched percussion sounds. However, you must take care not to stray too far from the initial settings; do so, and the character of your sounds will change into something else entirely.

Of course, you can try all of this on other synthesizers, but among low-cost instruments, the MS20 is particularly suitable because it offers a powerful combination of pitched oscillators, a ring modulator, a noise source, and four filters. Consequently, you won't get the same quality of results from the Minimoog, ARP Axxe or Roland SH101 that I used so successfully for brass patches a few months ago. 

So there you have it... proof that the MS20 is good for far more than dancefloor bleeps and bloops. Give it a try! [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][16]

[0]: http://www.soundonsound.com/sos/Dec01/articles/synthsecrets1201.asp
[1]: http://media.soundonsound.com/sos/dec01/images/synth123.gif
[2]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[3]: http://www.soundonsound.com/sos/jun00/articles/synthsec.htm
[4]: http://www.soundonsound.com/sos/mar00/
[5]: http://media.soundonsound.com/sos/dec01/images/synth456.gif
[6]: http://media.soundonsound.com/sos/dec01/images/synth7.gif
[7]: http://media.soundonsound.com/sos/dec01/images/synth8_9.gif
[8]: http://media.soundonsound.com/sos/dec01/images/synth10_11.gif
[9]: http://media.soundonsound.com/sos/dec01/images/synth12.gif
[10]: http://media.soundonsound.com/sos/dec01/images/synth13.gif
[11]: http://media.soundonsound.com/sos/dec01/images/synth14.gif
[12]: http://media.soundonsound.com/sos/dec01/images/synth15.gif
[13]: http://media.soundonsound.com/sos/dec01/images/synth16_17.gif
[14]: http://media.soundonsound.com/sos/dec01/images/synth18.gif
[15]: http://media.soundonsound.com/sos/dec01/images/synth19.gif
[16]: http://www.soundonsound.com