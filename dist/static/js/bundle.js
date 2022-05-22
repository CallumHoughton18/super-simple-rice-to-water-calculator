(()=>{"use strict";var e=new Map;e.set("basmati",{displayName:"Basmati Rice",ratio:2.2}),e.set("arborio",{displayName:"Arborio Rice",ratio:4.2});var t,a,n=(t=e,{getFoodSourceNames:function(){return Array.from(t,(function(e){return{id:e[0],displayName:e[1].displayName}}))},toWaterValue:function(e){return e*a.ratio},toFoodValue:function(e){return e/a.ratio},set currentFood(e){a=t.get(e)}}),o=document.getElementById("food-type"),r=document.getElementById("amount"),u=document.getElementById("water");n.getFoodSourceNames().map((function(e){var t=e.id,a=e.displayName,n=document.createElement("option");n.value=t,n.text=a,o.options.add(n)})),o.selectedIndex=0,r.value=null,u.value=null,n.currentFood=o.value;var i=function(e,t){var a=Number(e.target.value);(!isNaN||a>0)&&t(Math.ceil(a))};o.addEventListener("change",(function(e){n.currentFood=e.target.value})),r.addEventListener("input",(function(e){i(e,(function(e){u.value=Math.ceil(n.toWaterValue(e)).toString()}))})),u.addEventListener("input",(function(e){i(e,(function(e){u.value=Math.ceil(n.toFoodValue(e)).toString()}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzL2J1bmRsZS5qcyIsIm1hcHBpbmdzIjoibUJBRUEsSUFBTUEsRUFBZSxJQUFJQyxJQUV6QkQsRUFBYUUsSUFBSSxVQUFXLENBQzFCQyxZQUFhLGVBQ2JDLE1BQU8sTUFHVEosRUFBYUUsSUFBSSxVQUFXLENBQzFCQyxZQUFhLGVBQ2JDLE1BQU8sTUNSVCxJQ0k4QkMsRUFDeEJDLEVETEFDLEdDSXdCRixFRk85QixFRWFTLENBQ0xHLG1CQWxCRixXQUNFLE9BQU9DLE1BQU1DLEtBQUtMLEdBQVksU0FBQyxHQUs3QixNQUorQixDQUM3Qk0sR0FGK0IsS0FHL0JSLFlBSHNDLEtBR25CQSxpQkFldkJTLGFBVkYsU0FBc0JDLEdBQ3BCLE9BQU9BLEVBQWFQLEVBQVlGLE9BVWhDVSxZQVBGLFNBQXFCQyxHQUNuQixPQUFPQSxFQUFjVCxFQUFZRixPQU83QkUsZ0JBQVlVLEdBQ2RWLEVBQWNELEVBQVdZLElBQUlELE1EM0I3QkUsRUFBaUJDLFNBQVNDLGVBQWUsYUFDekNDLEVBQWtCRixTQUFTQyxlQUFlLFVBQzFDRSxFQUFtQkgsU0FBU0MsZUFBZSxTQUVqRGIsRUFBVUMscUJBQXFCZSxLQUFJLFNBQUMsRyxJQUFDWixFQUFFLEtBQUVSLEVBQVcsY0FDOUNxQixFQUFTTCxTQUFTTSxjQUFjLFVBQ3BDRCxFQUFPRSxNQUFRZixFQUNmYSxFQUFPRyxLQUFPeEIsRUFDZGUsRUFBZVUsUUFBUUMsSUFBSUwsTUFJN0JOLEVBQWVZLGNBQWdCLEVBQy9CVCxFQUFnQkssTUFBUSxLQUN4QkosRUFBaUJJLE1BQVEsS0FDekJuQixFQUFVRCxZQUFjWSxFQUFlUSxNQUV2QyxJQUFNSyxFQUE2QixTQUFDQyxFQUFjQyxHQUNoRCxJQUFJQyxFQUFxQkMsT0FBUUgsRUFBTUksT0FBNEJWLFNBQzlEVyxPQUFTSCxFQUFxQixJQUNqQ0QsRUFBU0ssS0FBS0MsS0FBS0wsS0FJdkJoQixFQUFlc0IsaUJBQWlCLFVBQVUsU0FBQ1IsR0FDekN6QixFQUFVRCxZQUFlMEIsRUFBTUksT0FBNkJWLFNBRzlETCxFQUFnQm1CLGlCQUFpQixTQUFTLFNBQUNSLEdBQ3pDRCxFQUEyQkMsR0FBTyxTQUFDbkIsR0FDakNTLEVBQWlCSSxNQUFRWSxLQUFLQyxLQUFLaEMsRUFBVUssYUFBYUMsSUFBYTRCLGlCQUkzRW5CLEVBQWlCa0IsaUJBQWlCLFNBQVMsU0FBQ1IsR0FDMUNELEVBQTJCQyxHQUFPLFNBQUNqQixHQUNqQ08sRUFBaUJJLE1BQVFZLEtBQUtDLEtBQUtoQyxFQUFVTyxZQUFZQyxJQUFjMEIsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1zaW1wbGUtd2F0ZXItcmF0aW8tY2FsY3VsYXRvci8uL3NyYy9idXNpbmVzcyBfbG9naWMvU3RhdGljRm9vZEl0ZW1zLnRzIiwid2VicGFjazovL3N1cGVyLXNpbXBsZS13YXRlci1yYXRpby1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3N1cGVyLXNpbXBsZS13YXRlci1yYXRpby1jYWxjdWxhdG9yLy4vc3JjL2J1c2luZXNzIF9sb2dpYy9Gb29kVG9XYXRlckNvbnZlcnRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kSXRlbSB9IGZyb20gXCIuL2NvbnZlcnNpb24taW50ZXJhY2VzXCI7XG5cbmNvbnN0IGZvb2RJdGVtc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBGb29kSXRlbT4oKTtcblxuZm9vZEl0ZW1zTWFwLnNldChcImJhc21hdGlcIiwge1xuICBkaXNwbGF5TmFtZTogXCJCYXNtYXRpIFJpY2VcIixcbiAgcmF0aW86IDIuMlxufSk7XG5cbmZvb2RJdGVtc01hcC5zZXQoXCJhcmJvcmlvXCIsIHtcbiAgZGlzcGxheU5hbWU6IFwiQXJib3JpbyBSaWNlXCIsXG4gIHJhdGlvOiA0LjJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmb29kSXRlbXNNYXA7IiwiaW1wb3J0IGZvb2RUb1dhdGVyQ29udmVydGVyIGZyb20gXCIuL2J1c2luZXNzIF9sb2dpYy9Gb29kVG9XYXRlckNvbnZlcnRlclwiO1xuaW1wb3J0IGZvb2RJdGVtc01hcCBmcm9tIFwiLi9idXNpbmVzcyBfbG9naWMvU3RhdGljRm9vZEl0ZW1zXCI7XG5cbmNvbnN0IGNvbnZlcnRlciA9IGZvb2RUb1dhdGVyQ29udmVydGVyKGZvb2RJdGVtc01hcCk7XG5cbmNvbnN0IGZvb2RUeXBlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb29kLXR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5jb25zdCBmb29kQW1vdW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3Qgd2F0ZXJBbW91bnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0ZXJcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuY29udmVydGVyLmdldEZvb2RTb3VyY2VOYW1lcygpLm1hcCgoe2lkLCBkaXNwbGF5TmFtZX0pID0+IHtcbiAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbi52YWx1ZSA9IGlkLFxuICBvcHRpb24udGV4dCA9IGRpc3BsYXlOYW1lXG4gIGZvb2RUeXBlU2VsZWN0Lm9wdGlvbnMuYWRkKG9wdGlvbik7XG59KTtcblxuLy8gRGVmYXVsdCB0byBmaXJzdCBpdGVtIGZvciBub3cuLi5cbmZvb2RUeXBlU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuZm9vZEFtb3VudElucHV0LnZhbHVlID0gbnVsbDtcbndhdGVyQW1vdW50SW5wdXQudmFsdWUgPSBudWxsO1xuY29udmVydGVyLmN1cnJlbnRGb29kID0gZm9vZFR5cGVTZWxlY3QudmFsdWU7XG5cbmNvbnN0IEdldElucHV0QW5kRGlzcGF0Y2hJZlZhbGlkID0gKGV2ZW50OiBFdmVudCwgY2FsbGJhY2s6IChudW1iZXI6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICBsZXQgaW5wdXR0ZWRGb29kQW1vdW50ID0gTnVtYmVyKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICBpZiAoIWlzTmFOIHx8IGlucHV0dGVkRm9vZEFtb3VudCA+IDApIHtcbiAgICBjYWxsYmFjayhNYXRoLmNlaWwoaW5wdXR0ZWRGb29kQW1vdW50KSk7IFxuICB9XG59XG5cbmZvb2RUeXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnZlcnRlci5jdXJyZW50Rm9vZCA9IChldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xufSk7XG5cbmZvb2RBbW91bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIEdldElucHV0QW5kRGlzcGF0Y2hJZlZhbGlkKGV2ZW50LCAoZm9vZEFtb3VudCkgPT4ge1xuICAgIHdhdGVyQW1vdW50SW5wdXQudmFsdWUgPSBNYXRoLmNlaWwoY29udmVydGVyLnRvV2F0ZXJWYWx1ZShmb29kQW1vdW50KSkudG9TdHJpbmcoKTtcbiAgfSk7XG59KTtcblxud2F0ZXJBbW91bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gIEdldElucHV0QW5kRGlzcGF0Y2hJZlZhbGlkKGV2ZW50LCAod2F0ZXJBbW91bnQpID0+IHtcbiAgICB3YXRlckFtb3VudElucHV0LnZhbHVlID0gTWF0aC5jZWlsKGNvbnZlcnRlci50b0Zvb2RWYWx1ZSh3YXRlckFtb3VudCkpLnRvU3RyaW5nKCk7XG4gIH0pO1xufSk7IiwiaW1wb3J0IHsgRm9vZEl0ZW0gfSBmcm9tIFwiLi9jb252ZXJzaW9uLWludGVyYWNlc1wiXG5cbmludGVyZmFjZSBGb29kU291cmNlTmFtZSB7XG4gIGlkOiBzdHJpbmcsXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IGZvb2RUb1dhdGVyQ29udmVydGVyID0gKGZvb2RTb3VyY2U6IE1hcDxzdHJpbmcsIEZvb2RJdGVtPikgPT4ge1xuICBsZXQgY3VycmVudEZvb2Q6IEZvb2RJdGVtO1xuXG4gIGZ1bmN0aW9uIGdldEZvb2RTb3VyY2VOYW1lcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShmb29kU291cmNlLCAoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2U6IEZvb2RTb3VyY2VOYW1lID0ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICBkaXNwbGF5TmFtZTogdmFsdWUuZGlzcGxheU5hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9XYXRlclZhbHVlKGZvb2RBbW91bnQ6IG51bWJlcikge1xuICAgIHJldHVybiBmb29kQW1vdW50ICogY3VycmVudEZvb2QucmF0aW87XG4gIH1cblxuICBmdW5jdGlvbiB0b0Zvb2RWYWx1ZSh3YXRlckFtb3VudDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHdhdGVyQW1vdW50IC8gY3VycmVudEZvb2QucmF0aW87XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEZvb2RTb3VyY2VOYW1lcyxcbiAgICB0b1dhdGVyVmFsdWUsXG4gICAgdG9Gb29kVmFsdWUsXG4gICAgc2V0IGN1cnJlbnRGb29kKGZvb2ROYW1lOiBzdHJpbmcpIHtcbiAgICAgIGN1cnJlbnRGb29kID0gZm9vZFNvdXJjZS5nZXQoZm9vZE5hbWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmb29kVG9XYXRlckNvbnZlcnRlcjsiXSwibmFtZXMiOlsiZm9vZEl0ZW1zTWFwIiwiTWFwIiwic2V0IiwiZGlzcGxheU5hbWUiLCJyYXRpbyIsImZvb2RTb3VyY2UiLCJjdXJyZW50Rm9vZCIsImNvbnZlcnRlciIsImdldEZvb2RTb3VyY2VOYW1lcyIsIkFycmF5IiwiZnJvbSIsImlkIiwidG9XYXRlclZhbHVlIiwiZm9vZEFtb3VudCIsInRvRm9vZFZhbHVlIiwid2F0ZXJBbW91bnQiLCJmb29kTmFtZSIsImdldCIsImZvb2RUeXBlU2VsZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvb2RBbW91bnRJbnB1dCIsIndhdGVyQW1vdW50SW5wdXQiLCJtYXAiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0Iiwib3B0aW9ucyIsImFkZCIsInNlbGVjdGVkSW5kZXgiLCJHZXRJbnB1dEFuZERpc3BhdGNoSWZWYWxpZCIsImV2ZW50IiwiY2FsbGJhY2siLCJpbnB1dHRlZEZvb2RBbW91bnQiLCJOdW1iZXIiLCJ0YXJnZXQiLCJpc05hTiIsIk1hdGgiLCJjZWlsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==