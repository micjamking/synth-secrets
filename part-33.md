# SYNTH SECRETS  
_Original article: [http://www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp][0]_

![](http://media.soundonsound.com/sos/jan02/images/synthheader.gif)

Ever wanted to synthesize unpitched membranophones? No? Well, you might if you knew that bass and snare drums are of this percussion type. We show you how... This is the 33rd article in a 63-part series. Read [all parts][1].

_**Gordon Reid
**_

Two months ago, I introduced into Synth Secrets the idea of membranophones, the family of instruments that includes all the common drums, and analysed the sonic characteristics of the pitched subset of that family. We then proceeded to apply this knowledge to the synthesis of timpani.

Enlightening though the process of synthesizing timpani is, I realise that you're more likely to be interested in synthesizing the types of drums used in modern music -- bass drums, snare drums, and toms -- all of which fall into the subset of _unpitched_ membranophones. So this month, we're going to start looking into the analogue synthesis of common drum sounds.

We'll start by casting our mind back to the kettle drum. If you remember my analysis of two months ago, you'll know that the environment in which a membrane finds itself influences its modes of vibratio[![](http://media.soundonsound.com/sos/jan02/images/synth12s.gif)][2]n. I covered some of this ground last month, but let's now go into a little more detail.

Figure 1(a) shows the idealised case of a circular membrane suspended in a vacuum. As we already know, it is this that produces the enharmonic set of frequencies determined by the Bessel Functions. Of course, it's highly unlikely that either you or I will ever experience this sound. Firstly, no sound is carried in a vacuum. Secondly, much as I would like to eject most of my band's former drummers from the airlock of a passing Vogon Constructor Vessel, the opportunity to do so has not yet arisen. Therefore, we must consider the vibration of the membrane when suspended in the atmosphere, as shown in Figure 1(b).

As you can appreciate, it's not a trivial task for the membrane to shift all the air adjacent to its surfaces, especially if it is vibrating at scores -- if not hundreds -- of Hertz. And the result of this effort is that the frequencies of the modes shift upwards, and that they become somewhat less enharmonic.

Despite the ease with which we can create this sound, it is still not one that you will often hear. No -- the membrane sound we all know and love is the one produced when you stretch the membrane and mount it on some sort of shell.

The closed shell of the kettle drum discussed last month is a particular example of this, with the vibrations of the membrane strongly influenced by the modes of vibration of the air inside the shell itsel[![](http://media.soundonsound.com/sos/jan02/images/synth345s.gif)][3]f. Nonetheless, as shown in Figure 1(c), the membrane still has to shift the air on its outer surface against atmospheric pressure.

The physics of this example is, as we have already discussed, rather complex, but we know that the consequences of mounting the membrane in this way are twofold. Firstly, the pitches of the modes rise even further. Secondly, the frequencies of the important radial modes become almost harmonic in their distribution.

OK, so far we've discussed nothing new. But let's now take a step backwards, and ask what happens when we remove the body of the kettle drum and replace it with a tubular shell capped by a _second_ movable membrane (see Figure 2, above right). Clearly, we have designed a conventional drum of one sort or another. Welcome to the world of the unpitched membranophones.

**Bass Drums -- Frequency Content**

Traditional bass drums are much as shown in Figure 2\. The head that you strike is the beating head or batter head, while the other is the resonating head or carry head. Clearly, if the batter and carry are without holes, the air in the drum is trapped, and the membranes' modes of vibration will again be influenced by th[![](http://media.soundonsound.com/sos/jan02/images/synth6s.gif)][4]e cavity modes. However, whereas the modes within the rigid kettle drum shell are easy to understand and calculate, those of the bass drum are not. This is because, whereas the kettle drum has two coupled resonators (the membrane and the cavity) the conventional drum, with its second membrane, has three coupled resonators.

The physics of this is too advanced for Synth Secrets, but we can understand the measurements of its behaviour observed by academics. Let's start by considering Table 1, which shows a set of bass drum modes when both membranes are stretched to the same tension.

First, I had better explain why there are two frequencies shown for the 0,1 and 1,1 modes. Again, without describing the physics involved, we observe that the membranes' vibrations are affected by the air between them in such a way that, for these modes, not one, but two, frequencies are produced. Weird, eh?

Now, the frequencies in Table 1 may not seem related in any way, but when we plot them on a chart, something unexpected happens. If you look at Figure 3, the frequencies may look enharmonic, but if we remove the doubled 0,1 mode at 118Hz and the doubled 1,1 mode at 86Hz, we obtain Figure 4\.

Yikes! I don't know how it looks to you, but to me Figure 4 looks very close to a harmonic oscillator. This is, however, an illusion (damn... just when you thought you were getting the hang of things!). Al[![](http://media.soundonsound.com/sos/jan02/images/synth78s.gif)][5]though the spacing of the modes is very regular (see Table 2 below), the frequencies of the upper partials do not lie at integer multiples of the lowest component frequency. In fact, they appear to be in the form of a harmonic series, frequency-shifted upwards by about 7Hz. I can demonstrate this by subtracting 7Hz from each of the frequencies in Table 2, and writing the results in Table 3... which gives us an idea about how to synthesize the spectrum in Table 2\.

Let's take a complex harmonic waveform with a fundamental frequency of 43Hz, and pass its output through a device called a frequency-shifter (see the box on the next page). If we use this to increase by 7Hz the frequencies of each component in the signal (ie. at 43Hz, 86Hz, 129Hz, 172Hz... and so on), we obtain a signal with partials at 50Hz, 93Hz, 136Hz and 179Hz... which is almost exactly the spectrum we require.

Of course, we have no idea of the relative amplitudes of the partials in the sound, nor any idea about the relative speeds at which they decay. Nevertheless, we could pass this signal through a VCA controlled by an AR contour generator and -- if we are very lucky -- we might obtain something that sounds like a bass drum (see Figure 5 below).

Unfortunately, these low, quasi-harmonic modes are not the only important components in the sound of the drum. Because our ears are highly attuned to the frequency range that contains human speech, we are particularly sensitive to partials in the region of a few hundred Hertz. Inevitably (because the universe hates us and wouldn't want anything to be easy), the drum generates scores of partials between 250Hz an[![](http://media.soundonsound.com/sos/jan02/images/synthtabless.gif)][6]d 1kHz, so we must also synthesize these. This isn't a problem, because we can recreate the required cluster of enharmonic modes using frequency modulation (FM) synthesis. We simply add to Figure 5 two oscillators -- one modulating the other -- plus a band-pass filter (see Figure 6).

But before we get carried away, analysing and developing this model still further, let's take a step backwards for a moment. We started by assuming that the bass drum had two membranes of equal tension, and was completely sealed at both ends. This is seldom true, because players of orchestral drums rarely tune their instruments like this, tending to tune the carry head at a much lower tension.

Table 4 (above) shows the measurements for a drum tuned in this fashion. As you can see, the dual frequencies previously exhibited by the 0,1 and 1,1 modes have disappeared. But, more important than this, the result is close to a true harmonic series without any offset. This means that, when we synthesize the sound of a drum with a detuned membrane, we can dispose of the frequency-shifter.

Of course, the bass drums we encounter in most modern music do not have two complete membranes. We call them kick drums and they often have a hole cut in the carry head, into which we stuff pillows, microphones, the guitarist's head, and the occasional empty lager can (see Figure 7).

We might expect that this would introduce yet another dose of arcane concepts and hideous maths, but -- for once -- the result is fairly straightforward. The action of the atmospheric pressure at the aperture of the partial membrane is not so different from the loose (ie. detuned) membrane, so the frequencies in Table 4 are largely unaffected. This then leads us to an important conclusion:

_The frequency components of a kick drum approximate a harmonic spectrum at low frequencies, with a large number of densely packed enharmonic components at mid and high frequencies._

_**What Is A Frequency-shifter?**

I introduced many synthesizer modules throughout parts one to 23 of this series. I started with obvious ones such as oscillators and filters, and then proceeded to discuss some of the more obscure ones -- envelope followers, sample & hold modules, keyboard decoders, and so on. However, I didn't mention them all, and one of my omissions was the Frequency-shifter -- often called the Bode Frequency-shifter, in honour of the man who developed it for the early Moog modular synthesizers.

Unlike a Harmoniser or pitch-shifter, which alters the frequency of each component in the sound spectrum by a fixed ratio, a frequency-shifter moves each of the components by a fixed amount in Hertz. To understand the difference, we'll start by considering the first of the diagrams on the right. This shows the spectrum of a 100Hz signal with four harmonics.

If we pass this signal through a pitch-shifter set up to increase the pitch of the fundamental by one octave, we obtain the spectrum shown in the second diagram. And, since we have doubled the frequency of the fundamental, all the harmonics have moved too: the second harmonic still lies at twice the fundamental frequency, the third harmonic still lies at three times the fundamental frequency... and so on.

But what happens if we build a device that moves the frequencies of each component of the sound by an equal amount -- say, 100Hz -- rather than by an equal ratio? This is the very essence of a frequency-shifter.

As you can see from the third diagram, the signal still _looks_ harmonic, but it is not. The first overtone (it's no longer a harmonic) lies at 300Hz, which is 1.5 times the lowest frequency, the second overtone lies at twice the lowest frequency, and the third overtone lies at 2.5 times the lowest frequency.

In this particular case, the signal shown will still sound musical, because the components lie in a harmonic pattern based on a frequency of 100Hz; it's just that the fundamental is missing. Indeed, the human brain is such an amazing piece of equipment that, if the signal components lie in precisely the right places, it will insert the missing pitch, and you will 'hear' a note of 100Hz, even though the lowest partial lies at 200Hz. The builders of church and cathedral organs have been using this trick for centuries, tuning the pipes so that you hear implied fundamentals lying an octave below the true pitch. Given that organ pipes in even moderate organs extend to 16', and that the implied pitch is one that would emanate from a pipe 32' long, you can appreciate that this represents a huge saving in height and weight.

Let's now extend this argument. Instead of doubling the frequency of the lowest frequency component, I'll increase it by 25 percent, as in the last diagram.

If we pass the signal through a pitch-shifter, the fundamental moves from 100Hz to 125Hz, and the overtones are likewise increased in frequency by 25 percent to 250Hz, 375Hz, and 500Hz. In practice, this means that the pitch of the note has shifted upwards by about two semitones.

But if we use a frequency-shifter to increase the frequency of the fundamental by 25Hz, the overtones also move by 25Hz, to lie at 225Hz, 325Hz and 425Hz. This means that the overtones lie at 1.8 times, 2.6 times, and 3.4 times the lowest component. Clearly, the signal is no longer harmonic, and it will not sound like a tuned musical tone.

As you might imagine, there are numerous uses for such a device, and the frequency-shifter can generate a wide range of effects. These include eerie chorus and phasing effects, ring modulation effects, stereo panning, Doppler effects, and more. You can even use them to reduce acoustic feedback. But these are all topics for another day. 

_

**Bass Drums -- Decays, Pitch Changes & Clicks**

Now that we know the frequency content of the bass drum, we need to know more about the relative amplitudes of the components, and the rates at which they decay. There is very little academic literature about the first of these, but I think we can assume that the amplitudes of the lowest modes are the loudest, a[![](http://media.soundonsound.com/sos/jan02/images/synth9s.gif)][7]nd that these amplitudes diminish rapidly with increasing frequency. If so, a triangle wave or a filtered sawtooth wave will be an ideal starting point for bass-drum synthesis. As for the decay rates, a number of texts suggest that the rate is constant across all the important partials. This means that -- although I was guessing when I drew Figures 5 and 6 -- we should be safe using a single VCA and EG to simulate the decay of the sound.

It might seem that we now know everything we need to know in order to create a bass drum patch, but there are two important attributes left to investigate: first, the pitch shift that occurs every time you excite the batter head; and second, the sound of the beater 'click'. Let's look at the first of these.

If you again cast your mind back a couple of months, you may recall that the cavity modes within a kettle-drum shell act as frequency regulators on the equivalent vibrations of the membrane. Therefore, no matter how hard or softly you hit the membrane, the frequencies of its modes remain tightly locked to those permitted by the air in the cavity. Figure 8 depicts the 0,1 mode[![](http://media.soundonsound.com/sos/jan02/images/synth10s.gif)][8] of a kettle drum, showing how the vibration of the air is coupled to the vibration of the membrane.

Now let's look again at the bass drum in Figure 7\. This has a flexible interface with the outside world (ie. the air section at the aperture in the carry head), so the cavity modes are very much less constraining that those of the kettle drum. This means that, if the batter head wants to vibrate at a different pitch, it is relatively free to do so. But what would make it change pitch?

Consider Figure 9(a). This shows a stretched membrane seen from its edge. I have arbitrarily made it 30 inches in diameter.

Now let's beat the living daylights out of this, smacking it with a beater and displacing its centre by an inch or so. This is an unrealistically large displacement for any tightly stretched membrane, yet it only increases the distance across the surface by about one sixteenth of an inch, as shown in Figure 9(b) below.

What it does do, however, is increase the tension of the membrane by an amount that is pro[![](http://media.soundonsound.com/sos/jan02/images/synth11s.gif)][9]portional to the square of the displacement. And, since pitch is determined by tension, this increases the pitches of the modes by a considerable amount. It's a small leap of understanding to realise, therefore, that the pitch of every mode will be higher at the start of the sound (when the maximum instantaneous displacement is large) and will drop as the amplitude of the vibration decays. Indeed, the pitch of a typical kick drum can shift by a couple of semitones from start to finish, and we must build this into our patch if it is to sound realistic.

Fortunately, we do not need a second contour generator to implement this. After all, the loudness and the pitch of the sound are both determined by the maximum instantaneous displacement of the membrane, so a single AR Generator should do the trick. However, whereas the VCA Gain will change by 100 percent from the start to the end of the sound, the pitch should only shift by around 10 percent, so the patch requires some form of attenuator at the oscillator's pitch CV input (see Figure 10 above).

Finally, we come to the beater click. This is caused by hundreds of short-lived high-frequency partials that exist for just a few milliseconds after the membrane is hit.

There are two ways we can model this. One would be to use a short noise burst (which you would normally call a click); the other uses a contour generator to shape the spectrum of the partials generated [![](http://media.soundonsound.com/sos/jan02/images/synthchartss.gif)][10]by the FM components in Figure 10\. If we choose the latter, we split the band-pass filter into its low-pass and high-pass components, and apply a rapid AR contour to the cutoff frequency of the LPF. This allows many high-frequency components (almost a noise spectrum) to pass for a very brief time, before the patch settles down to the sound generated in Figure 10 (see Figure 11 above).

So there we have it: a simple bass-drum patch. Simple? Well, we've skirted over the true nature of the enharmonic partials, approximated the decay rates, disregarded the (albeit reduced) effects of the cavity modes, and totally ignored the presence of any shell resonances. Consequently, I think that it's fair to say that this is a simplified patch. Nonetheless, it will produce extremely usable results. If you have access to a patchable analogue synth with three oscillators, cross-modulation, three suitable filters, a couple of contour generators, a mixer and a couple of VCAs, you're in business.

Unfortunately, few low-cost analogue monosynths have this degree of flexibility. So next month we'll set about programming some bass drum sounds on the synths you _do_ own. Until then... [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][11]

[0]: http://www.soundonsound.com/sos/jan02/articles/synthsecrets0102.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/jan02/images/synth12.gif
[3]: http://media.soundonsound.com/sos/jan02/images/synth345.gif
[4]: http://media.soundonsound.com/sos/jan02/images/synth6.gif
[5]: http://media.soundonsound.com/sos/jan02/images/synth78.gif
[6]: http://media.soundonsound.com/sos/jan02/images/synthtables.gif
[7]: http://media.soundonsound.com/sos/jan02/images/synth9.gif
[8]: http://media.soundonsound.com/sos/jan02/images/synth10.gif
[9]: http://media.soundonsound.com/sos/jan02/images/synth11.gif
[10]: http://media.soundonsound.com/sos/jan02/images/synthcharts.gif
[11]: http://www.soundonsound.com