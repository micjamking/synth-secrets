# Synth Secrets, Part 22: From Springs, Plates & Buckets To Physical Modelling  
_Original article: [http://www.soundonsound.com/sos/feb01/articles/synthsecrets.asp][0]_

Onboard effects may seem like a relatively recent synth innovation, but even old modular synths offered analogue effects. Although they were basic, the freely patchable nature of modular synths allowed them to be used to create convincing acoustic instrument sounds --- thus effectively physical modelling. **Gordon Reid** explains how. This is the 22nd article in a 63-part series. Read [all parts][1].

Everyone knows what happens when you place an echo unit at the end of a signal chain: you play a note and, after the original, you hear a number of repetitions, usually dying away over the course of a few seconds. Similarly, if you place a reverberator at the end of the chain, your note is extended, with added 'ambience' --- the perception that the note is produced in a room or hall of some sort.

[![](http://media.soundonsound.com/sos/feb01/images/fig01simpledelays.s.gif)][2]

Figure 1: Delays off a hard surface.

In both these cases, you are using electronics to model acoustic spaces. In the former case, the model is that of one or two surfaces which create a handful of discrete echoes. In the latter, it's a model of a closed space, imitating the thousands of echoes that merge into the dense phenomenon we call reverberation.

If you were now to consider a collection of modern synths, you'd notice straight away that many of them incorporate electronic delay lines and reverberators immediately before their outputs, positioned there to enhance the sound produced by the sound-generating circuits (indeed, some manufacturers incorporated these effects to invigorate synths that would otherwise be dull and lifeless). But let's ask what would happen if you could take one of these effects --- the reverb --- and place it somewhat earlier in the signal path.

Sadly, few synthesists can try this for themselves, because the vast majority of modern synths do not allow you to reposition the effects. However, those of you lucky enough to own a full-blown modular synth can do this, as can those with the earliest integrated synths such as the VCS3 (1969) and ARP 2600 (1970).

I've added the release dates of those synths for a reason... in the 1960s, when synthesis was in its infancy, reverb was seen as far more than simply a way to add ambience to a signal. It paved the way for realistic emulations of acoustic instruments that you cannot imitate using basic VCO-VCF-VCA architectures. The simple reverb was the key to what we now call 'physical modelling'.

To understand how it was capable of doing this, we'll need to discuss what happens to a sound within a reverberant space, or --- for that matter --- within an analogue effects unit designed to emulate such a space. So let's start by revisiting what we already know about delays and reverb...

**From Delays...**

Delays occur when sound reflects off solid objects. This phenomenon means that, in most circumstances, any sound produced by a point source will reach your ears from multiple directions (see Figure 1, right).

[![](http://media.soundonsound.com/sos/feb01/images/fig02multipledelaymodel.s.gif)][3]

Figure 2: Using four delays to create the sound paths shown in Figure 1\.

If we think of this in terms of synthesizer modules, we can construct a patch (see Figure 2 below) that attempts to recreate the acoustic environment shown.

Of course, this is hugely oversimplified. For one thing, there's no such thing as a point source --- anything moving the air must have an appreciable diameter. Secondly, we've ignored the reality of a wall that, far from being a perfect reflector, will diffuse the reflected sound, modifying its amplitude and tone. Thirdly, air is a less-than-perfect transmitter. To confirm this, stand at the back of a soggy crowd at Reading Festival on a windy day, and listen to the way in which the sound level rises and falls as the wind gusts (been there, done that). Fourthly, the dense matter between your ears conducts sound from one ear to the other. Clearly, Figure 2 is quite inadequate, even for the oversimplified example shown in Figure 1\.

More importantly, we've overlooked the reflections from the floor. This adds at least four further signal paths. So let's now consider what happens when we place the sound source and listener in a closed acoustic environment such as a room... I've restricted Figure 3 (above right) to a handful of paths with a maximum of two reflections, but it's already getting complicated. Imagine how complex things become when we contemplate all the possible (and, therefore, inevitable) reflections off the walls, the ceiling and the floor. Indeed, if the walls are not acoustically absorbent, there's no reason why the sound should not bounce around hundreds or even thousands of times before it reaches your ears! Clearly, we can no longer think of this in terms of a handful of delay units...

**...To Reverberation**

Fortunately for those who like to look into these things, it's possible to analyse reverb by using a very short click (or 'impulse') to make sense of the sound reflections that occur in a closed space. If you were to do this, you'd find that there are three distinct temporal parts to the phenomenon (see Figure 4 overleaf). The first is the original click, while the second comprises the so-called 'early reflections'. These are the first, distinct, reflected sounds you hear --- that is, the ones that bounce off just one or two of the available surfaces. The early reflections are rapidly followed by the thousands of reflected clicks that comprise the third region in Figure 4\. Because the human brain is not usually capable of perceiving echoes separated by less than 30 milliseconds as distinct sounds (no matter how percussive the sound is), you hear the clicks in this third region as a composite sound --- the 'reverb' portion of the reverbed click.

[![](http://media.soundonsound.com/sos/feb01/images/fig03delaysinaroomtop.s.gif)][4]

Figure 3: Some of the simplest wall reflections reaching the listener's ears (as seen from above).

Because there's always something in a room that absorbs sound, natural reverberation dies away to silence, and we use a measure called the 'Reverberation Time' to quantify the rate at which it does so. This was defined by a chap named Wallace Sabine who, in the late 1890s, recognised that the difference in loudness between the human voice and the quietest sound you can hear is a factor of about 1,000,000\. This difference is equivalent to approximately 60dB, so Wallace called his measure 'RT60' (see Figure 5, overleaf).

Fortunately (or not, when you try to do it) a simple formula allows you to calculate the theoretical value of RT60 for any given frequency for any given room. This can be your bathroom, your local rehearsal room or church hall, or even the Royal Albert Hall. You just need to know the size and absorbing properties of every material within it! Here is the equation:

In this formula:  
![](http://media.soundonsound.com/sos/feb01/images/eq1rt60.s.gif)  
• V is the volume of the room in cubic metres;  
• A is the area of each type of absorber;  
• S is the absorption coefficient of each type of absorber;  
• and (sum) means 'the sum for all the different absorbers in the room'.

**Room Modes**

At this point, you might think that you know most of what you need to understand reverberation. OK, it's fairly unlikely that Baroness Chumondsley-Smyth sitting in row three at the Royal Albert is going to cooperate when you ask to measure her soft absorbers, but, in principle, you're ready to calculate RT60 for any room. 

[![](http://media.soundonsound.com/sos/feb01/images/fig043partstructure.s.gif)][5]

Figure 4: Reverberation.

Unfortunately, useful as RT60 may be, it only gives you information about the decay of the reverberation. This could be described as a 'time-domain' characteristic, as it tells you about how the reverb behaves over time --- but to understand reverb more fully, and to see how it can be used in physical modelling, we must also consider its characteristics in the 'frequency domain'. In other words, we must consider the frequency response of the reverberation in a room.

To do this, let's remove the source and the listener from our reverberant room, and consider the properties of the room itself. Just as a stretched string has a fundamental mode of vibration plus harmonics (see part one of this series, way back in _SOS_ May '99, or look at [_www.soundonsound.com/sos/may99/articles/synthsec.htm_][6] on the Internet) there are frequencies at which a rectangular room with reflective walls will 'resonate'. However, whereas a string is essentially 1-dimensional, the room is 3-dimensional, so there are many more permitted modes, governed by the little darling that is this equation:

In this formula:  
![](http://media.soundonsound.com/sos/feb01/images/eq2roommodes.s.gif)  
• F is a resonant frequency;  
• x, y, and z are the dimensions of the room in metres;  
• c is the speed of sound in the room;  
• and m, n and p are whole numbers.

This may seem complex, but in principle the room actually behaves very similarly to the string. The difference deriving from the three-dimensional nature of the room (as opposed to the string, which is to all intents and purposes one-dimensional) is reflected in the three 'squared' terms in the equation (the equation for the string would have just one). Therefore, if we consider, say, the first 10 integers for each dimension, instead of having 10 harmonics, we obtain 1000 resonant modes!

[![](http://media.soundonsound.com/sos/feb01/images/fig05rt60.s.gif)][7]

Figure 5: Defining the 'reverb time'.

Analysis shows that the frequency response of one of the simple families of these modes (n=0, p=0, and m=1 to infinity) looks like Figure 6 (right), where each peak along the frequency axis corresponds to a mode. As you can see, this is similar in concept, if not exactly in shape, to the comb filter we discussed in Part 4 of this series (see _SOS_ August '99, or [_www.soundonsound.com/sos/aug99/articles/synthsecrets.htm_][8]).

Fortunately, rooms --- even rectangular ones with hard, reflective walls --- do not act as comb filters. This is because the thousands of modes are distributed unevenly throughout the spectrum, so the overall response is far flatter than Figure 6, with numerous smaller bumps and troughs. Nonetheless, a reverberant room has a definable frequency response.

Whether you choose to consider reverb in terms of its time-domain characteristics or in the frequency domain, you are simply considering two aspects of the same phenomenon. This equivalence of a room's reverberation characteristics and its frequency response is an illustration of what physicists often refer to as 'time/frequency duality'. We'll return to this point shortly...

There's just one thing to get across before we move on. It might seem as though moving the walls to change the room from rectangular to irregular would destroy room modes, but this is not the case. Sure, the modes will be distributed somewhat differently, leading to a changed frequency response, but an irregular room will, by and large, have a similar response to a regular one of the same volume. This will become an important consideration later in this article when we start to think about irregularly shaped musical instruments.

**From Theory To Practice**

Right, that's enough acoustic theory --- this is _Synth_ Secrets, after all. Now let's turn our thoughts to music, and the ways in which reverb was recreated before the advent of cheap digital effects processors.

[![](http://media.soundonsound.com/sos/feb01/images/fig06aroommode.s.gif)][9]

Figure 6: A family of modes in a rectangular room.

Given a large enough studio, a meaty enough power supply, and almost unlimited funds and patience, there's no reason why you couldn't create reverberation effects using thousands of delay modules and VCAs. But, obviously, it's impractical, even with an RT60 of just a few fractions of a second. What we need is a cheap and simple device that will produce the innumerable 'echoes' that comprise reverberation. Furthermore, it must make them die away in such a fashion that a sensible value for RT60 is obtained for the perceived 'resonant space' suggested by the delay of the unit.

The simplest way to do this is also the most impractical... you use a large, reverberant space called an 'echo chamber', and record your performance in this. If your sound is generated electronically rather than acoustically, you place a speaker at one end and a microphone at the other, play the 'dry' sound through the former, and re-record the 'wet' sound using the latter. In order to maximise the amount of reverb, you would not normally point the speaker at the microphone (see Figure 7, page 118).

[![](http://media.soundonsound.com/sos/feb01/images/fig07echochamber.s.gif)][10]

Figure 7: An echo chamber in a lift shaft.

A different reverb device requires a large steel plate, a suitable suspension, a large box, and a bunch of transducers. This is the plate reverb, a device of approximately the same size and weight --- and a good proportion of the cost --- of a grand piano. It uses a transducer to excite the plate, and one or more pickups that detect the reverberation created as the sound bounces around, reflecting off the edges (see Figure 8, page 118).

Unfortunately, neither of these mechanisms was small enough, light enough, or cheap enough to be placed within the early analogue synthesizers mentioned at the start of this article, so another device was needed. This, of course, was the spring reverb.

A simplistic view of the spring reverb suggests simply that you use a transducer to excite a spring, and a pickup to extract the reverberant sound at the other end (see Figure 9, page 118). In essence, this is true, but it is far from the whole story. Let's consider what's actually happening. 

Let's say that the transducer excites the spring with an impulse. Ignoring the short springs at either end of the device (these are just shockmounts to isolate the reverb itself from outside influences), the wave thus produced travels up the spring to the pickup in a certain time. The output is then amplified and, usually, mixed with the original signal.

However, when the wave reaches the pickup, some of the energy is reflected back towards the transducer. Likewise, the depleted wave reaching the transducer is reflected back towards the pickup... and the cycle continues until all the energy is absorbed. 

[![](http://media.soundonsound.com/sos/feb01/images/fig08plate.s.gif)][11]

Figure 8: The important elements of a plate reverb.

Let's now imagine that you are playing a 40Hz sine wave through this reverb, and that the transmission time from one end of the spring to the other is 12.5mS. The first delay reaches the pickup in 12.5mS. The reflected portion of the energy then travels back down the spring to reach the transducer 25mS after it left. However, the time taken for a sine wave of 40Hz to complete one cycle is also 25mS, so the next reflection reinforces the source. Furthermore, this happens time after time after time...

In contrast, a sine wave of 60Hz will arrive back at the transducer in anti-phase. Sure, the reflected energy is less than the energy being supplied by the transducer, but the two will, to some extent, cancel out. This means that a spring reverb has a frequency response similar to that shown in Figure 10 (right).

It looks familiar, doesn't it? It's that old time/frequency duality again, and it's very significant. Just as the reverberation bouncing around in a room exhibits a frequency response, so do the echoes travelling up and down a spring. So why doesn't a spring reverb have the characteristic warmth and depth of a concert hall or an echo chamber? The reason is simple... whereas the room has thousands of such modes, the spring has just three. The first is the longitudinal 'compression' mode. The second is the transverse wave exhibited by a stretched string... the spring moves up and down above and below its axis. The third is torsional... the spring twists and untwists along its length. Since each of these modes has different transmission speeds, the true frequency response of the spring is slightly smoother than Figure 10 would suggest. Nevertheless, the longitudinal mode dominates. Given the figures used above, you'll get echoes at 25mS, 75mS, 125mS... and so on, until the energy dissipates. This is very unlike true reverb, so a single spring reverb always exhibits a characteristic, metallic 'boinggg'.

[![](http://media.soundonsound.com/sos/feb01/images/fig09springassembly.s.gif)][12]

Figure 9: A 'single-spring' reverb.

Manufacturers have sought to improve on the single spring reverb by incorporating two or even three dissimilar springs in a single device. They have even gone so far as to assemble dissimilar sections into a single spring, and then use these composites to create more complex responses (see Figure 11, page 120).

Well, this is all fine and dandy, but hardly groundbreaking stuff. You use something that responds somewhat like a room to imitate the sound created by a room. Logical, or what?

But let's now return to synths, and consider the synthesis of acoustic musical instruments. Consider, for example, the body of a guitar, violin, contrabass, or any other hollow-bodied instrument. Ignoring the holes, these are all resonant spaces, like rooms, but with smaller dimensions. As for the holes, they're just like open windows: they let the sound out, but don't greatly reduce the amount of reverberation.

[![](http://media.soundonsound.com/sos/feb01/images/fig10aspringmode.s.gif)][13]

Figure 10: The frequency response of a single spring.

Now, it should be self-evident that the volume of an instrument's body, its shape, and the materials from which it is constructed will define its reverberant characteristics. In other words, the body will exhibit reverb, have a value for RT60 and, because of that ol' time/frequency duality, impose a frequency response upon the sound generated by whatever is exciting it. Research has shown that the vibration of a violin string at the bridge is remarkably close to being a sawtooth wave; and yet even if you ignore the years of practice required to develop an acceptable playing technique, a violin does not sound like a sawtooth wave. Clearly the body of the instrument plays a major part in shaping the sound that we recognise as that of a violin.

So here comes the leap of understanding towards which all the above leads... If we can recreate some of the reverberant frequency characteristics of a room using a spring reverb, can we emulate the modes (and therefore the frequency response) of a hollow-bodied instrument in the same way?

**'Real' Synthesis**

Figure 12 (see page 120) shows a basic representation of a simple, monophonic analogue synthesizer. In this, an oscillator creates the basic sound, a contour-controlled low-pass filter modifies the tone in some way, a contour-controlled amplifier modifies the loudness in some way, and a low-frequency oscillator introduces one or more forms of modulation. Finally, a reverb unit adds 'life' and 'air' to the resulting sound.

[![](http://media.soundonsound.com/sos/feb01/images/fig113springassembly.s.gif)][14]

Figure 11: A three-spring assembly using dissimilar elements in each.

Flexible though this structure is, its low-pass filter cannot recreate the tonal quality of the modes exhibited by a reverberant space. Therefore, if you try to imitate a violin or acoustic guitar, the result is unconvincing. But let's now move the reverb 'inside' the patch (see Figure 13, right).

In this configuration, the reverb imposes its complex frequency response upon the output from the oscillator, emphasising some harmonics while suppressing others. Therefore, as you play up and down the keyboard, the characters of the individual notes change, much like those of an acoustic instrument.

Unfortunately, the reverb time of our spring reverb is far too long to emulate a real instrument. While it's not too shabby at recreating room modes, the spring would synthesize a 'violin' with a cavity over four metres long! Smaller springs would, for obvious reasons, produce more appropriate modes, and it is for this reason, perhaps, that early synthesists were able to use the six-inch springs in their instruments in this way. Nevertheless, we're not quite where we need to be, which is in the delay range of about 1mS to 4mS.

[![](http://media.soundonsound.com/sos/feb01/images/fig12simplemonosynth.s.gif)][15]

Figure 12: A simple monosynth structure.

So now we turn to a device invented in 1969 by John Sangster at Philips, and introduced into affordable music technology in the mid-'70s: the Bucket Brigade Device. The BBD is a series of transistors connected in such a way that, if you present an analogue signal to the input, the signal comes out the other end, slightly delayed, slightly distorted but still recognisably the same signal. The name comes from the image of firemen passing buckets of water up a human line to quench a fire. Think about sampling the fluctuating voltage of an audio signal, and then passing each voltage down the line in a bucket... you get the picture.

You can chain BBDs to increase their delay times, and modulate the speed at which the 'sample buckets' are passed from one stage to the next. This makes them ideal for analogue effects units such as choruses, phasers, and flangers. They are also ideal for use as comb filters (as you may remember from part four of this series, comb filtering results when you combine two otherwise identical signals when one is very slightly delayed with respect to the other). But when placed in circuits with audio feedback to create reverb effects, it is the BBD's ability to produce very short delays that is important to us.

[![](http://media.soundonsound.com/sos/feb01/images/fig13modellingmonosynth.s.gif)][16]

Figure 13: Using a spring reverb to imitate the 'modes' of an acoustic space.

This, finally, explains how we can achieve physical modelling by placing a reverb with a suitable value for RT60 within the signal-generating architecture of a synth. Far from simply adding ambience to a previously generated signal, the short delay times generated by a BBD reverb will --- just like the body of a violin --- superimpose frequency characteristics reminiscent of an acoustic space upon basic signals such as a sawtooth wave. 

Of course, with a single BBD reverb, we're still limited to a single dimension. So let's add another two parallel reverbs to our signal path, and mix the results before passing them to the rest of the synth. Now we're getting somewhere... provided that the reverb times are different for each of the BBDs, we will obtain three families of modes, making the response more '3-dimensional' in its effect (see Figure 14, right).

We can now tailor each BBD to generate an approximation of the dimensions of the acoustic 'body' we desire (remember... an irregular space will have a similar response to a regular one of the same volume). We can even adjust RT60 (normally called the 'reverb time') to determine whether our 'virtual instrument' is made of a hard substance or a softer, more absorbent material.

[![](http://media.soundonsound.com/sos/feb01/images/fig143dmodellingsynth.s.gif)][17]

Figure 14: Modelling an acoustic space using analogue modules.

Unfortunately, I doubt that you'll be able to test this with your latest digital workstation, because it's unlikely that it will allow you to place its reverbs at the correct point within the signal chain. However, if you have a genuine modular synth that incorporates a number of BBD delays/comb filters, you'll be able to create some remarkably authentic acoustic instrument sounds (this is also true with the more modern 'virtual modulars', such as the Nord Modular shown opposite, because these too offer short delay lines). Sure, you'll have to think about the size of the instrument you want to emulate and then calculate the appropriate delay times, but that's no big deal. In fact, you can do this with a sharpened pencil and just a little GCSE maths.

To prove this, let's take the equation on page 115 and say that we want to calculate a one-dimensional mode of an instrument with a lowest resonance at, for example, 500Hz. Given that the speed of sound is approximately 340 metres per second, we obtain the following relationship:   
![](http://media.soundonsound.com/sos/feb01/images/eq3example.s.gif)  
If you manipulate this a little, you'll find that x (the dimension of the cavity) is 340/1000, which is 0.34m, or about 13 inches. Furthermore, since the speed of sound is 340 metres per second, and the sound has to travel from one end of the cavity to the other, and then back again... it follows that the delay time needed is two microseconds, exactly as we would expect for a resonance at 500Hz.

So here's this month's Synth Secret:

_You don't need powerful DSPs to dabble with physical modelling of acoustic spaces... a few analogue reverbs are more than enough._

Of course, once you've emulated your acoustic instrument, you'll want to place _another_ reverb at the end of the signal chain, just to place the sound in a pleasing ambient 'space'. Indeed, you'll probably choose a huge, digital hall reverb algorithm with a slow early-reflections setting and an RT60 of many seconds, because acoustic instruments often sound best in 'concert-hall' sized spaces. It just goes to show that, as always, there's more to this synthesis lark than you might first imagine.

Finally, I'm going to leave you with a bit of a teaser... This month's entire Synth Secrets has dealt with the duality of reverberation and the frequency responses of closed (-ish) acoustic spaces. But couldn't we have avoided this talk of echoes, RT60s, room modes, and all that other stuff, and achieved the same result with a bunch of fixed (or 'formant') filters? That's what we'll discuss next month... [![](http://media.soundonsound.com/images/regulars/sos_end.gif)][18]

[0]: http://www.soundonsound.com/sos/feb01/articles/synthsecrets.asp
[1]: /search?url=%2Fsearch&Keyword=%22synth+secrets%22&Words=All&Summary=Yes
[2]: http://media.soundonsound.com/sos/feb01/images/fig01simpledelays.gif
[3]: http://media.soundonsound.com/sos/feb01/images/fig02multipledelaymodel.gif
[4]: http://media.soundonsound.com/sos/feb01/images/fig03delaysinaroomtop.gif
[5]: http://media.soundonsound.com/sos/feb01/images/fig043partstructure.gif
[6]: http://www.soundonsound.com/sos/may99/articles/synthsec.htm
[7]: http://media.soundonsound.com/sos/feb01/images/fig05rt60.gif
[8]: http://www.soundonsound.com/sos/aug99/articles/synthsecrets.htm
[9]: http://media.soundonsound.com/sos/feb01/images/fig06aroommode.gif
[10]: http://media.soundonsound.com/sos/feb01/images/fig07echochamber.gif
[11]: http://media.soundonsound.com/sos/feb01/images/fig08plate.gif
[12]: http://media.soundonsound.com/sos/feb01/images/fig09springassembly.gif
[13]: http://media.soundonsound.com/sos/feb01/images/fig10aspringmode.gif
[14]: http://media.soundonsound.com/sos/feb01/images/fig113springassembly.gif
[15]: http://media.soundonsound.com/sos/feb01/images/fig12simplemonosynth.gif
[16]: http://media.soundonsound.com/sos/feb01/images/fig13modellingmonosynth.gif
[17]: http://media.soundonsound.com/sos/feb01/images/fig143dmodellingsynth.gif
[18]: http://www.soundonsound.com