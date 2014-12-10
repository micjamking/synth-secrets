# Synth Secrets, Part 11: Amplitude Modulation  
_Original article: [http://www.soundonsound.com/sos/mar00/articles/synthsecrets.htm][0]_

Last month, **Gordon Reid** examined the concept of modulation at low frequencies. This month, he speeds things up a bit. The result is not just faster versions of the same modulation effects, but a new type of synthesis... This is the 11th article in a 63-part series. Read [all parts][1].

[![](http://media.soundonsound.com/sos/mar00/images/synth1_2s.gif)][2]In Part 3 of this series, and then again last month at the end of Part 10, I introduced the idea that modulation sources do not need to be low-frequency oscillators or envelope generators. Of course, they frequently are, and most pre-patched analogue synthesizers are limited in this fashion. Fortunately, some powerful synths allow you to modulate their oscillators, filters and VCAs using higher-frequency sources whose output signals are within the range of human hearing (ie. audio-frequency signals). This opens the door to a whole new world of timbres that you can not easily obtain in any other fashion.

When the modulation source is an audio-frequency oscillator and the destination is the Gain of a VCA in the audio signal path, we call the result Amplitude Modulation, or AM for short. I find AM a fascinating topic, not least because it has a quite unexpected result: instead of just sounding like a very fast tremolo, it creates new frequencies that were not present in the original signals! But how does this happen? On a common-sense level, it's very counter-intuitive, so the answer, almost inevitably, lies in some maths. It's not exactly rocket science (to be precise, it's A-level trigonometry) but I will quite understand if you want to skip this section and jump directly to the examples in the second half of this article. But the more daring among you might find this interesting...

**Maths Can Be Fun... Honestly!**

Equation 1 is the formula that relates the instantaneous amplitude (the level at any given point in time, called 'A') of a single frequency (called 'w') to time (called 't'). I could just as have easily written this using a sine term (it is, of course, a sine wave), but using a cosine changes nothing except the phase, and it makes the maths a little simpler. There is one other term in the equation, 'a', and this is the maximum amplitude of the waveform (the maximum level of the waveform in its cycle).

A1=a1cos(w1t)

**Equation 1: A simple cosine wave.**

You may also have noticed that every term in equation 1 (except time) has a small '1' subscript. This demonstrates that each part of the equation relates to our first waveform. 

A2=a2cos(w2t)

**Equation 2: A second cosine wave.**

Now look at equation 2\. This is identical to equation 1, except that all the subscripts are the number '2'. This shows that we have a second waveform to consider, and that this has a different maximum amplitude and a different frequency.

Let's consider the case where the amplitude a1 of Signal 1 is half the amplitude a2 of Signal 2\. I will call these the Gains o[![](http://media.soundonsound.com/sos/mar00/images/synth3_4s.gif)][3]f 1 and 2 on some arbitrary scale. Now let's define w1 to be 50 percent higher than w2 -- say 300Hz for Signal 1 and 200Hz for Signal 2\. I have plotted these waves in Figures 1 and 3 (right), and shown their harmonic spectra in Figures 2 and 4 (right). OK, so the equations may look a little arcane, and the graphs may look more familiar, but they are simply different ways of describing exactly the same information.

Now let's consider what happens when you mix these waves together. Figure 5 (see page 89) shows the synthesizer block diagram, Figure 6 (also page 89) shows the resulting waveform (which is just the arithmetic sum of the two waves at each moment), and Figure 7 (see page 90) shows the harmonic spectrum of the new waveform.

This is not a very interesting result. But now let's change our synthesizer configuration very slightly, and replace the mixer with a Voltage Controlled Amplifier (or VCA) in the signal chain. We will send Signal 1 to the audio input of the VCA, but instead of sending Signal 2 to another audio input we will use it (like last month's LFO) to modulate the gain of the device. Signal 2 is, therefore, the Modulator, and Signal 1 must be the Carrier (See Figure 8, on page 90).

You'll remember that, in Equation 1, the term a1 determined the maximum amplitude of the wave, and for the sake of argument I will define this as the Gain of the VCA. But we now have a situation where the Gain is being modulated by the instantaneous amplitude of the second signal. So, when the waveform of the Modulator is positive (ie. above the 0V axis) the Gain of the VCA increases, and when it is negative, the Gain of the VCA decreases. But, at every moment in time, we know exactly what the amplitude of the modulating signal is: it's A2, as defined in Equation 2\.

So we can now write a new equation, which shows that the output signal has an amplitude that is the sum of the original a1 plus A2. This is Equation 3\.

A1=(a1 + A2)cos(w1t)

**Equation 3: The equation defining the output waveform.**

Now, we know what A2 is, so we can rewrite Equation 3 as Equation 4, and then rapidly rewrite _that_ to obtain Equation 5\.

A1=(a1 + a2)cos(w2t))cos(w1t)

**Equation 4: Another way of writing equation 3\.**

A1= a1cos(w1t)) + a2cos(w2t)cos(w1t)

**Equation 5: Another way of writing equation 4\.**

This may look more complicated than the original Equation 3, but you can take my word that it expresses exactly the same information about the signals and the VCA. However, it's at this point that I'm going to ask you to take something on trust. If you look at the right-hand term in Equation 5 you will see that it contains two cosine terms multiplied together. This is a horrible thing to try to understand. Fortunately, there's a bit of maths that proves that you can separate a single term that multiplies two cosines of frequencies X and Y into two new terms of the form cos(X+Y) and cos(X-Y). If this sounds like complete gobbledegook to you, don't worry -- accept that we can split the right-hand term in Equation 5 into two new terms, as shown in Equation 6\. One of these is a wave of frequency (w1+ w2), while the other is a wave of frequency (w1- w2).

A1= a1cos(w1t)) + 1/2 \[a2cos(w1+w2)t\] + 1/2\[a2cos(w1-w2)t\]

**Equation 6: The result of Amplitude Modulation.**

If you now look at Equation 6 more closely you'll see that the first term (immediately to the right of the 'equals' sign) is the original Signal 1 -- in other words, the Carrier signal. Now consider what the frequency (w1+ w2) in the second term means... this must represent a wave with a frequency equal to the Carrier frequency plus the Modulator frequency. The third term must, therefore, be a wave with frequency equal to the Carrier frequency minus the Modulator frequency. In other words, Amplitude Modulation allows the original Carrier waveform through the VCA, and also creates two new signals called the Sum and the Difference signals. I love this stuff!

Now look at Figure 9 (right), which shows the waveform defined in Equation 6\. As you can see, this signal is markedly more[![](http://media.soundonsound.com/sos/mar00/images/synth5_6s.gif)][4] complex than the simpler mixed signal in Figure 6\.

Moving on, Figure 10 (right) shows the spectrum of the waveform in Figure 9\. Notice that the Modulator has completely disappeared, and that the Sum and Difference signals have half the amplitude of the Modulator (this is what the '1/2's in Equation 6 are telling us).

**In Use**

OK, I'm sure that that's enough theory for this month, so let's ask ourselves why anyone would include AM capabilities in a synthesizer. To answer this, we'll consider two cases of Amplitude Modulation: one where the Modulator lies at a fixed frequency, and another where the Modulator as well as the Carrier tracks the keyboard (or any other controlling voltage).

Let's first ask what happens when you play the Carrier from your keyboard, but a Modulator (of equal amplitude) is fixed at a frequency of, say, 100Hz.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) CASE 1

When the Carrier also has a frequency of 100Hz (a moderately deep bass note), the three frequencies produced by Amplitude Modulation lie at 0Hz, 100Hz, and 200Hz. These are, of course, the Difference, the Carrier, and the Sum signals. You may be tempted to think that the signal at 0Hz has no effect, but this is not the case. It still has an amplitude (of half the Modulator amplitude) and this manifests itself as an offset in the signal. We call this a DC (direct current) offset because, being at 0Hz, it has no oscillation frequency. You can see this in Figure 11 (right) because a very high proportion of the output signal lies above the axis. DC offsets can have significant effects when a signal is processed by other synthesizer modules such as filters and amplifiers. Unfortunately, these effects lie outside the scope of this article...

The other two signals are the Carrier at 100Hz, and the Sum at 200Hz. The Sum signal is, of course, exactly an octave above the Carrier, so this will sound harmonic, or 'sweet'. We can represent this case by saying that the three components at the output lie at 0 percent, 100 percent and 200 percent of the Carrier frequency. So far, so good.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) CASE 2

Now let's play a few notes further up the keyboard, say at a frequency of 200Hz. This is our new Carrier frequency. Since the Modulator is unchanged at 100Hz the Difference signal now lies at 100Hz, and the Sum lies at 300Hz. The sound thus produced is still tonal to a degree because the Difference is exactly an octave below the Carrier. The Sum, however, is not harmonically related to the Carrier. Nevertheless, this example is another special case because the Sum is the third harmonic of the Difference, so the output still sounds 'musical', even though the Carrier (which is, in effect, the second harmonic of the Difference) is the dominant signal. In this case, we can represent the result by saying that the three components at the output lie at 50 percent, 100 percent and 150 percent of the Carrier frequency.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) CASE 3

Now let's choose a more random frequency for our carrier. What will happen if the Carrier frequency is, say, 371Hz? The D[![](http://media.soundonsound.com/sos/mar00/images/synth7_8s.gif)][5]ifference and Sum signals now lie at 271Hz and 471Hz respectively, and there is no harmonic relationship between any of them. The three components at the output lie at roughly 73 percent, 100 percent and 127 percent of the Carrier frequency and the result is, therefore, enharmonic, and clangorous.

Indeed, enharmonicity is the result when virtually all signals are treated in this fashion. There are very few special instances such as Cases 1 and 2 above. Consequently, fixed-Modulator AM is most useful for creating aggressive and conventionally 'unmusical' sounds that change dramatically as you play up and down the keyboard. You can even control the amount of enharmonicity by raising or lowering the level of the Modulator.

But what happens when the Modulator is not fixed? How does this affect the sounds produced by your synthesizer? To answer this, let's consider the case where you're 'playing' both the Carrier and the Modulator using the same CV source to affect the frequency of both signals.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) CASE 4

As a starting point, we'll return to Case 2 above. The Carrier still has a frequency of 200Hz and the Modulator has a frequency of 100Hz. As before, the output contains the original 200Hz, plus the Difference and Sum signals at 100Hz and 300Hz. But this time, we're going to patch the synthesizer so that, as you play the Carrier up and down the keyboard, the Modulator frequency tracks the change in the Carrier frequency. So, for example, if you play a Carrier frequency of 400Hz (one octave higher than the initial 200Hz) the Modulator frequency doubles too, and the Difference and Sum frequencies become 200Hz and 600Hz respectively. In both cases, the relationship between the Difference, Carrier, and Sum signals is 50 percent, 100 percent and 150 percent. You can see this in Figures 14 and 15 (right): the frequency may have doubled, but the shape of the waveform itself has remained the same.

Indeed, no matter what initial frequencies you choose, the relationships between the Difference, Carrier and Sum remain constant if both the Carrier and the Modulator track the keyboard equally. As a result, you always obtain a consistent tone at the output. So this form of Amplitude Modulation offers a way to create complex non-harmonic timbres that change pitch normally as you play up and down the keyboard. To put it in a Synth Secrets sort of way:

_Amplitude Modulation is a powerful tool that allows you to create and play new sounds that you cannot obtain using conven[![](http://media.soundonsound.com/sos/mar00/images/synth9_10s.gif)][6]tional oscillators alone._

This is true even though everything we have discussed assumes that we have used simple sine waves as our input signals. But you can, of course, use other waveforms. Imagine that each signal had a fundamental and one extra harmonic. Instead of two Sum and Difference signals, there would now be eight. If each signal had three components, the number of these 'side bands' would increase to 18\. Four components would lead to 32 side bands... and so on.

Since there is nothing stopping you from modulating harmonically complex waveforms, why not use square waves and sawtooth waves as Carriers and Modulators? There's no reason why not. Fortunately, it's no harder to understand what happens with these waves than it is to understand simple sine waves, it's just more laborious...

Remember that a sawtooth wave contains all the harmonics in the conventional harmonic series. For example, a 100Hz sawtooth has components at 100Hz, 200Hz, 300Hz, 400Hz... and so on, while a 75Hz sawtooth has components at 75Hz, 150Hz, 225Hz... and so on. So what happens when you Amplitude Modulate a 100Hz sawtooth Carrier with a 75Hz sawtooth Modulator?

Unsurprisingly, the fundamental in the Carrier interacts with the fundamental of the Modulator, giving components at 25Hz, 100Hz, and 175Hz. It also reacts with the second harmonic of the Modulator, giving additional output components at -50Hz, 100Hz, and 250Hz (you might think that a frequency of minus 50Hz is a stupid concept, but in practice you hear this as simply 50Hz). Then there's the third harmonic of the Modulator (resulting in 125Hz, 100Hz, and 325Hz components) the fourth harmonic, the fifth, the sixth... ooh, this is complicated!

But before you think that you have grasped this and avoided a headache, don't forget that the second harmonic of the Carrier also interacts with the complete harmonic series of the Modulator, as does the third, the fourth, the fifth... and on and on and on and on! Fortunately, the amplitudes of all but the first few components are very small, so in practical terms you can discount the higher-order series. Nevertheless, it's not hard to imagine that these tones will be very complex. Indeed, they produce superb starting points for complex synthesis using filters and other modulators.

**Real VCAs & Ring Modulators**

In all the above we have assumed that the VCAs in your synthesizer work perfectly (ie. according to signal-processing theory), and that none of the Modulating signal breaks through to the output. In my experience this is never the case, although with very good VCAs the leakage can be reasonably small. Nevertheless, even a small amount of Modulator will contaminate the output signal quite noticeably and, in general, this will increase the enharmonic quality of the result.

There is, however, another class of synthesizer modules that (when well designed and implemented) eliminate not only the Modulator but also the Carrier from the output. These are Ring Modulators, devices that have acquired a certain mystique[![](http://media.soundonsound.com/sos/mar00/images/synth11s.gif)][7] over the past few years. Nevertheless, a Ring Modulator is merely a special case of an Amplitude Modulator. Furthermore, it only works in the fashion described when both the Carrier and the Modulator waveforms are precisely centred on zero volts. To facilitate this, many RMs are 'AC-coupled', which means (at least, in an ideal world) that any DC offsets in the inputs are eliminated before modulation. The result is an output consisting of the Sum and Difference frequencies, but neither of the input frequencies. Lesser RMs are 'DC-coupled' and respond somewhat differently from their AC-coupled cousins. Most notably, these allow the Carrier and Modulator signals to pass into the output. A few RMs, such as the device in the ARP 2600, have a switch that allows you to select between AC-coupled and DC-coupled modes -- the best of both worlds.

**Filter Modulation**

To finish off, let's ask ourselves what would happen if we used Signal 2 to modulate the cutoff frequency of a low-pass filter rather than the gain of a VCA (see Figure 16, below left). You might fear that this would lead to another complex discussion with loads of new impenetrable mathematics. Happily, this is not the case.

Imagine a single harmonic of a complex waveform lying somewhere just above the cutoff frequency Fc. As you modulate Fc you will find that sometimes the harmonic is attenuated more because of the modulation, while at other times it is attenuated less. In other words, this harmonic is being Amplitude Modulated by the changing action of the filter. Depending upon the width of the modulation (the maximum amplitude a2 of the Modulator) the same is true to a greater or lesser extent for all the other harmonics within the signal. So this time, instead of having one set of harmonics modulating another set of harmonics, we have just a single set, but each component is being modulated in a different way. As I said before, I love this stuff!

**Frequency Modulation**

OK, so that has explained Amplitude Modulation (which is tremolo at audio frequencies) and Filter Modulation (which is growl at audio frequencies). Surely, it's not too great a leap to describe what happens when we take vibrato into the audio frequency domain? We could call this Frequency Modulation (or 'FM' -- see Figure 17, left) and it can't be too complex, can it?

Well, remember that I said that Filter Modulation did not entail a complex discussion with loads of new impenetrable mathematics? Unfortunately, that's exactly what FM does entail... see you next time! [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][8]

[0]: http://www.soundonsound.com/sos/mar00/articles/synthsecrets.htm
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/mar00/images/synth1_2.gif
[3]: http://media.soundonsound.com/sos/mar00/images/synth3_4.gif
[4]: http://media.soundonsound.com/sos/mar00/images/synth5_6.gif
[5]: http://media.soundonsound.com/sos/mar00/images/synth7_8.gif
[6]: http://media.soundonsound.com/sos/mar00/images/synth9_10.gif
[7]: http://media.soundonsound.com/sos/mar00/images/synth11.gif
[8]: http://www.soundonsound.com