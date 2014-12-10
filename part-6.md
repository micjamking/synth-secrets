# Synth Secrets, Part 6: Of Responses & Resonance  
_Original article: [http://www.soundonsound.com/sos/oct99/articles/synthsecrets.htm][0]_

### This is the sixth article in a 63-part series. Read [all parts][1].

If you have read the most recent two parts of this series you'll now know (at least in principle) how to construct a 24dB/octave filter and define its cutoff frequency. You will also be able to appreciate how that filter messes around with the phases of the harmonics within any signal you pass through it. So now we can start talking about[![](http://media.soundonsound.com/sos/oct99/images/synth1_2s.gif)][2] winding up the resonance to 11, overdriving the input and creating some classic tearing analogue filter sweeps... Yes? 

No! All the filters we've discussed so far have been static, acting just like tone controls, albeit rather powerful ones. No matter how you use them, you will eventually end up with something that sounds about as interesting as a documentary on last year's party political broadcasts. So let's introduce another handful of vitally important ideas, tie up a few loose ends, and bring ourselves to the point where we can, finally, get twiddling.

**Step 1: Varying The Cutoff Frequency**

We'll start, as usual, with our simple 6dB/octave low-pass RC filter (see Figure 1). Let's consider what happens if we replace the resistor at the top of the diagram with a variable resistor, more commonly known as a potentiometer. We then get the circuit shown in Figure 2\. Now, I have done my best to avoid any maths, but there's something you ought to know about this filter: the cutoff frequency is directly related to the amount of electrical resistance provided by the resistor, and the capacitance of the capacitor. The relationship is so simple that I can write it like this:

In other words, if you increase the resistance, the cutoff frequency drops. Conversely, if you reduce the resistance, the cutoff frequency rises. And what would a synthesist use to control the potentiometer that lets you do this...? Answer: a knob or a slider. In this case, it's the filter cutoff knob (or slider). Of course, this is an example of a passive filter, and almost every analogue synthesizer filter is active (ie. it includes an amplifier of some sort). But the principle remains the same: by adjusting the value of one or more components in a given filter circuit, you can adjust the cutoff frequency.

The same is also true of a high-pass filter. This is a device that, instead of attenuating high frequencies, attenuates the low ones. You can compare the different frequency responses of low-pass and high-pass filters in Fig[![](http://media.soundonsound.com/sos/oct99/images/synth3_4s.gif)][3]ures 3 and 4\.

Figure 5 shows the simplest high-pass filter with a variable cutoff frequency. As you can see, it has the same two components as the variable low-pass filter, but they are swapped around in the circuit. And, once again, the cutoff frequency is simply proportional to 1/R.

**Step 2: More Types Of Filter**

Now let's be imaginative. It should be a small leap to see that we can combine a low-pass filter and a high-pass filter to create another type of filter found on many synthesizers: the band-pass filter. This is so called because, instead of attenuating one end of the audio spectrum, it attenuates both ends, permitting just a band of frequencies to pass (relatively) unattenuated. Conceptually it's simple: just place the low-pass and high-pass elements in series, and you get the circuit shown in Figure 6, and a frequency response that looks like Figure 7\.

Of course, nothing in life is ever quite that easy, and there are two problems with this approach. Firstly, as we discussed last month, you can't cascade RC filters and achieve the expected result. Secondly, with the same cutoff frequency for both the high-pass and low-pass elements, the signal is attenuated everywhere -- by 6dB at its loudest point, and more elsewhere. This would, in most cases, make it unusably quiet.

Fortunately, designers can overcome these difficulties very easily. The first solution requires that the input and output impedances are designed to isolate the cascaded stages from each other. The second simply requires that we separate the cutoff frequencies and (preferably) make the slopes steeper by increasing the response of each element to 12dB/oct or even 24dB/oct. The gain response of the resulting filter now looks something like that shown in figure 8\.

Extending these ideas further, we can now work out what a band-reject (or 'notch') filter is. L[![](http://media.soundonsound.com/sos/oct99/images/synth5_6s.gif)][4]et's take a low-pass filter with a cutoff of, say, 1kHz and pass a signal through it. Now let's pass the same source signal, in parallel this time, through a high-pass filter with a cutoff frequency of, say, 5kHz. When the two are recombined, the frequencies below 1kHz and above 5kHz will come through relatively unscathed, but all those between will be attenuated. Neat, huh? Well, no... the phase shifts introduced by the two separated filters can cause all manner of side-effects when the signals are mixed together again. Nevertheless, the block diagram and the response of our idealised band-reject filter are shown in Figures 9 and 10\.

**Step 3: Sweeping The Filter**

So, finally, we can make all those interesting filter sweeps and sounds that you've been waiting for? Sorry... but no. Certainly, we've discussed every filter type that you'll encounter on a conventional analogue synth -- low-pass, high-pass, band-pass, band-reject, and (in Synth Secrets 4, Aug '99) comb -- and we have even seen how we [![](http://media.soundonsound.com/sos/oct99/images/synth7_8s.gif)][5]can adjust their attenuation rates and cutoff frequencies. But there are still two vital factors missing from the equation.

The first factor is easily introduced: it's 'voltage control'. If you return to Synth Secrets 3 (July '99) you will find that it is devoted to the idea of changing elements of the sound without human intervention. I won't retread old ground here, but it should be obvious that you can replace the potentiometers in Figures 2, 5 and 6 with a device that responds in some way to the application of an external voltage. In this way, we can sweep the filters' cutoff frequencies by applying modulators such as envelope generators and LFOs -- see Figure 11\.

But what about the second missing item? Ah, that's a bit more involved...

**Step 4: Resonance**

Almost without exception, all physical objects resonate. Or, to put it another way, almost all objects will vibrate naturally at certain frequencies. If the object in question is a stretched string, the lowest such frequency is the fundamental pitch produced when the string is plucked. But what happens if you don't pluck it? In isolation (of course) nothing.

The key word here is "isolation". Let's consider what happens when you place the string in front of a speaker that is reproducing some music. You will then notice that there are times when the string vibrates, and others when it does not. What you are observing is _resonance_. If the string is excited by frequencies in the music that coincid[![](http://media.soundonsound.com/sos/oct99/images/synth9_10_11s.gif)][6]e with its natural resonant frequencies, it will vibrate in sympathy with the source. If none of its resonant frequencies are present in the music, it will sit there uninterested. The same is true of, say, the body of a violin, or the air in a pipe. Indeed, the positions and relationships of these resonant frequencies are instrumental (if you see what I mean) in defining the tone of the instrument itself. It's also true of suspension bridges, and civil engineers take great care to ensure that bridges won't resonate in the wind. But what has this to do with analogue filters?

Answer 1: Nothing. Passive RC filters have no resonant frequencies. You can put any signal through one and, no matter how complex the filter circuit, it will just pass or attenuate each frequency according to its response.

Answer 2: Lots. When you combine resistors and capacitors with a third component called an inductor, or use them in active circuits with two or more poles, you can make relatively simple circuits that have a large peak in the response at a particular frequency (see Figure 12).

Furthermore, whereas all passive filters have a gain of less than unity, an active resonant circuit can boost frequencies, making the harmonics at those frequencies louder than they were in the input signal. I'd love to tell you why this is so but, as CEDAR Audio's Research Director, Dave Betts, said to me recently, "It's obvious why it happens. It's the solution to a second-order differential equation." Yeah, well... at least I can tell you which frequencies are boosted. It's those that exist near the cutoff frequency. 

Figure 13 (on page 140) shows an idealised response for a resonant low-pass filter. As you can see, the filter still attenuates the frequencies far above the cutoff frequency, but a band around the cutoff is boosted. Furthermore, the low frequencies are slightly attenuated. (For some reason, this is rarely shown in diagrams of this sort.) The width of the resonant peak is described by a parameter called its 'Q'. If Q is low, the peak is broad, but as Q increases, the peak in the filter response becomes more and more pronounced and creates dramatic tonal changes. See Figures 14 and 15\.

If you then use a voltage controller to sweep the cutoff frequency up and down the spectrum, the band in which the harmonics are accentuated is also swept up and down. It is this that generates what is, perhaps, the most recognisable and desirable of all analogue synthesizer sounds. Now you can wind up the resonance to create those 'analogue filter sweeps'!

**Step 5: Self-Oscillation**

But this is far from the end of the story. If you continue to increase Q, the resonance becomes so pronounced that the high and low frequencies disappear from the signal and another effect occurs: the filter begins to oscillate at its cutoff frequency (see Figure 16). This is a powerful sonic effect, and a filter on the edge of self-oscillation will create [![](http://media.soundonsound.com/sos/oct99/images/synth12s.gif)][7]a range of unnatural sounds unique to the electronic synthesizer.

**Step 6: Synthesizer Heaven?**

More than anything else, the resonant low-pass filter defines the sound of subtractive synthesis. Indeed, some instruments' filters have become so revered that players rarely think about the other facilities offered (or not) by the instrument. This is a narrow view, and one that we must try to expand in later instalments of Synth Secrets. But, in the spirit of all things filter-y, let's briefly touch upon some of the possibilities suggested by Figures 14 to 16:

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You can use a static filter to emphasise certain frequencies, creating character and making a sound stand out in a complex mix.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) You can use two or more static filters to create formants in a sound, and tailor these to imitate the characteristics of the human voice or traditional acoustic instruments.[![](http://media.soundonsound.com/sos/oct99/images/synth13_14s.gif)][8]

![](http://media.soundonsound.com/images/regulars/bulbow.gif) If you use a resonant filter with moderate Q and make the cutoff frequency track the pitch, you can create a characteristic 'emphasised' quality that remains tonally consistent as you play up and down the keyboard.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Increasing Q further, you can (on many but not all synthesizers) enter a region where the filter is on the edge of self-oscillation. It will then ring in sympathy with certain frequencies in the input signal. This creates a distinctive distortion that can be very effective for 'off-the-wall' sounds.

![](http://media.soundonsound.com/images/regulars/bulbow.gif) Increasing Q to its maximum, the filter will become a sinewave generator in its own right. If the filter tracks the keyboard CV accurately, you can then play it as if it were an extra oscillator. You can even add vibrato using a filter modulation CV. In theory, no input signal is passed at this point, but few filters completely remove all the signal, and the result is a tortured sound that has extensive uses in modern music.

If some of these ideas seem alien to you, don't worry. I fully intend to cover them in later articles. For now it's enough to appreciate just how many ways there are in which a filter can modify a signal. And don't forget that, while we have used a low-pass filter response in our resonance diagrams, the same ideas are just as relevant to high-pass filters, comb filters and, to a lesser extent, band-pass and band-reject filters.

So where does that leave us? Look at it like this: a powerful analogue synth offers several filters. The majority of these will be active and, in addition to the ubiquitous low-pass filter, may be selected from any combination of four other types. Most of these will be voltage-controlled, allowing you to manipulate the cutoff frequency using a[![](http://media.soundonsound.com/sos/oct99/images/synth15_16s.gif)][9] wide range of modifiers. Many will also be resonant, giving you even more powerful ways to modify and sculpt signals. Some offer a range of cutoff slopes, and most will self-oscillate, offering a further range of sounds, even allowing you to use the filter as an additional oscillator within the synthesizer. The best filters also allow you to control Q using a CV source, giving voltage-controlled resonance. A vanishing small number will even permit you to insert other signals into a feedback loop that helps to generate the resonance effect, and this can lead to even more startling results.

In conclusion, it should come as no surprise that the filters are the defining elements in an analogue synthesizer. Indeed, if you take the output from a Moog oscillator and pass it through a Korg filter, the result sounds like... a Korg synthesizer. Conversely, if you filter a Korg waveform using a Moog filter, the result sounds like a Moog synthesizer. So, while you may get sick and tired of analogue anoraks whinging on about their filters, they do have a point. Filters are crucial, and if you are into creative synthesis, your sound generation will depend upon what you've got and what you do with it. And that's no Synth Secret at all.

As parts 4 & 5 of Gordon Reid's series showed, even the simplest analogue filters mess with your sound in complicated ways. In this part, he considers what happens when you make the design more sophisticated... [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][10]

**

### This is the sixth article in a 63-part series. Read [all parts][1].**

[Published in SOS October 1999][11]

[0]: http://www.soundonsound.com/sos/oct99/articles/synthsecrets.htm
[1]: http://www.soundonsound.com/search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/oct99/images/synth1_2.gif
[3]: http://media.soundonsound.com/sos/oct99/images/synth3_4.gif
[4]: http://media.soundonsound.com/sos/oct99/images/synth5_6.gif
[5]: http://media.soundonsound.com/sos/oct99/images/synth7_8.gif
[6]: http://media.soundonsound.com/sos/oct99/images/synth9_10_11.gif
[7]: http://media.soundonsound.com/sos/oct99/images/synth12.gif
[8]: http://media.soundonsound.com/sos/oct99/images/synth13_14.gif
[9]: http://media.soundonsound.com/sos/oct99/images/synth15_16.gif
[10]: http://www.soundonsound.com
[11]: http://www.soundonsound.com/Contents.php?Month=10&Year=1999