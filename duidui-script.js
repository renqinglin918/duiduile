const roastTemplates = {
    work: {
        northeast: [
            "你可真是咸吃萝卜淡操心，我升职不升职关你屁事！",
            "我加班是为了给老板打工，你操心是为了给自己添堵！",
            "我升不升职不知道，你再这么酸可就该升血压了！",
            "方案不行？来来来，笔给你，你行你上！",
            "您提醒得真及时，要不您把测试报告先签个字？",
            "我工资够不够花不知道，但肯定比你操的心少！",
            "你行你上啊，在这叭叭啥呢？",
            "我做的不好？那你来做啊，别光说不练！",
            "你这是指点江山呢还是吃饱了撑的？",
            "有这功夫挑我毛病，不如多想想怎么把自己的活干好！"
        ],
        shanghai: [
            "侬管得真多，关侬啥事体啦？",
            "我加班是我的事，侬勿要搞七捻三！",
            "侬酸什么啦？有本事侬自己升上去呀！",
            "方案勿好？侬来做呀，光说勿练！",
            "侬提醒得老及时个，侬先签个字好伐？",
            "我工资够不够花，勿用侬操心！",
            "侬行侬上呀，勿要瞎指挥！",
            "侬自家管好自家，勿要多管闲事！"
        ],
        cantonese: [
            "你做乜嘢多管闲事啊？关你鬼事！",
            "我加班关你屁事啊？你系咪得闲过头？",
            "你酸乜嘢啊？有本事自己升啦！",
            "方案唔好？你嚟做啊，咪喺度吹水！",
            "你识条铁咩？唔好喺度指手画脚！",
            "我人工够唔够使，唔使你担心！",
            "你叻你上啦，咪喺度讲嘢！",
            "管好你自己啦，唔好搞搞震！"
        ],
        sichuan: [
            "你龟儿硬是吃多了没得事干！",
            "我加班关你锤子事？你硬是闲得慌！",
            "你酸啥子？有本事自己升上去嘛！",
            "方案不行？你行你上噻，光说不练！",
            "你批垮啥子？有本事把报告签了！",
            "我工资够不够用，关你屁事！",
            "你凶啥子凶？有本事自己来！",
            "管好你自己嘛，莫多管闲事！"
        ],
        universal: [
            "管好你自己的事吧，别多管闲事！",
            "我怎么做是我的事，不需要你指点！",
            "有本事你上，别站着说话不腰疼！",
            "你这么厉害，怎么没见你做出什么成绩？",
            "与其挑别人毛病，不如先看看自己！",
            "我的事不用你操心，管好你自己吧！",
            "少在这指手画脚，有本事拿出真本事！",
            "你这是嫉妒还是羡慕？直说吧！"
        ]
    },
    family: {
        northeast: [
            "结婚是我的事，您这么着急要不您替我结了？",
            "小王生二胎跟我有啥关系？他也没替我过日子啊！",
            "我赚的钱够不够花，反正不花您的，操那心干啥！",
            "女孩子怎么了？我自己赚钱自己花，比谁都硬气！",
            "这东西再没用也没您的唠叨没用！",
            "您这是为我好还是为您面子好啊？",
            "我吃过的盐不比您少，不用您教我怎么过日子！",
            "我这么大个人了，知道自己在做什么！",
            "您要是实在闲得慌，不如跳广场舞去！",
            "我的人生我自己做主，轮不到您来安排！"
        ],
        shanghai: [
            "结婚是我个事，侬急啥啦？",
            "隔壁小王生二胎跟我啥关系啦？",
            "我赚个钱够不够花，勿用侬操心！",
            "女孩子为啥不能拼啦？我自己赚钱自己花！",
            "侬唠叨得比啥都没用！",
            "侬到底是为我好还是为侬面子啦？",
            "我晓得自己做啥，勿用侬教！",
            "侬闲得慌去跳广场舞好伐！"
        ],
        cantonese: [
            "结婚系我个事，你急乜嘢啊？",
            "隔离小王生二胎关我屁事啊？",
            "我揾个钱够唔够使，唔使你担心！",
            "女仔点解唔可以拼啊？我自己赚钱自己使！",
            "你咁多嘢讲，不如唔好讲啦！",
            "你系为我好定系为你面子啊？",
            "我识得自己做啥，唔使你教！",
            "你闲得慌去跳广场舞啦！"
        ],
        sichuan: [
            "结婚是我自己的事，你急啥子急？",
            "隔壁小王生二胎关我锤子事？",
            "我赚的钱够不够花，又不花你的！",
            "女孩子咋个了？我自己赚钱自己花，硬气得很！",
            "你唠叨个没完，烦不烦嘛！",
            "你到底是为我好还是为了你面子？",
            "我自己晓得该咋个做，不用你教！",
            "你要是闲得慌，就去跳广场舞嘛！"
        ],
        universal: [
            "结婚是我自己的事，请不要干涉！",
            "别人怎么样跟我没关系，我有自己的节奏！",
            "我自己赚钱自己花，不需要别人操心！",
            "女孩子也可以有自己的事业，这不是你的私事！",
            "请尊重我的选择，不要老是唠叨！",
            "到底是为我好还是为了你的面子？",
            "我已经长大了，知道自己在做什么！",
            "请给我一点私人空间，不要管太多！"
        ]
    },
    friend: {
        northeast: [
            "土不土不知道，至少比你那张嘴好看！",
            "嫌我厨艺不好？那你倒是别吃啊！",
            "我对象再不好也比你单身强！",
            "手机过时总比人过时强！",
            "我胖怎么了？吃你家大米了？",
            "你这嘴这么毒，是家里没给你吃饱饭吗？",
            "你这发型才叫丑，跟鸡窝似的！",
            "我工作有没有前途，比你在这说风凉话强！",
            "我唱歌再难听也比你说话好听！",
            "你这么会挑毛病，怎么不去当评委啊？"
        ],
        shanghai: [
            "土唔土勿晓得，至少比侬好看！",
            "嫌我烧得勿好？那侬勿要吃呀！",
            "我对象再勿好也比侬单身强！",
            "手机过时总比人过时强！",
            "我胖关侬啥事？吃侬家饭啦？",
            "侬嘴咁毒，屋里厢没给侬吃饱饭啊？",
            "侬自家发型像鸡窝，还好意思说我！",
            "我工作有没前途，比侬讲风凉话强！"
        ],
        cantonese: [
            "土唔土唔知，至少比你好看！",
            "嫌我煮得唔好？咁你咪唔好食啦！",
            "我对象再唔好都比你单身好！",
            "手机过时好过你人过时！",
            "我肥关你屁事？食你家米啊？",
            "你嘴咁毒，系咪屋企没饭食？",
            "你自己发型先似鸡窝！",
            "我工作有没前途，好过你讲风凉话！"
        ],
        sichuan: [
            "土不土不晓得，至少比你好看！",
            "嫌我煮得不好？那你就别吃嘛！",
            "我对象再不好也比你单身强！",
            "手机过时总比人过时强！",
            "我胖关你啥子事？吃你家米了？",
            "你嘴这么毒，是不是没吃饱饭？",
            "你自己发型才像鸡窝！",
            "我工作有没有前途，比你说风凉话强！"
        ],
        universal: [
            "好不好看不是你说了算！",
            "嫌不好吃就别吃，没人强迫你！",
            "我的对象我喜欢就好，不用你评价！",
            "手机只是工具，人好才最重要！",
            "我胖不胖跟你没关系！",
            "说话这么难听，小心没人跟你做朋友！",
            "你的审美也不怎么样！",
            "我的工作我喜欢，比你说三道四强！"
        ]
    },
    stranger: {
        northeast: [
            "我素质好不好不知道，但比你会好好说话！",
            "路是你家开的？我站这碍你眼了？",
            "我像不像好人不知道，但你肯定不像！",
            "你为大家好？先管好你自己吧！",
            "我不算老几，但也轮不到你管！",
            "你说话这么横，是家里有矿还是脑子有病？",
            "你挡着我路了，没长眼睛吗？",
            "你算老几，凭什么管我？",
            "你这种人就是欠收拾！",
            "我就这样，你爱咋咋地！"
        ],
        shanghai: [
            "我素质好不好勿晓得，但比侬会讲闲话！",
            "马路系侬家开个？我站着碍侬眼啦？",
            "我像不像好人勿晓得，但侬肯定不像！",
            "侬为大家好？先管好侬自己！",
            "我算老几勿晓得，但轮勿到侬管！",
            "侬说话咁冲，系勿系脑子有毛病？",
            "侬挡我路了，没长眼睛啊？",
            "侬算老几？凭啥管我？"
        ],
        cantonese: [
            "我素质好唔好唔知，但比你识讲嘢！",
            "马路系你家开啊？我企喺度阻你眼？",
            "我似唔似好人唔知，但你肯定唔似！",
            "你为大家好？先管好你自己啦！",
            "我算老几唔知，但轮唔到你管！",
            "你说话咁串，系咪脑子有问题？",
            "你阻我路啦，没长眼啊？",
            "你算老几？凭咩管我？"
        ],
        sichuan: [
            "我素质好不好不晓得，但比你会说话！",
            "马路是你家开的？我站这碍你眼了？",
            "我像不像好人不晓得，但你肯定不像！",
            "你为大家好？先管好你自己嘛！",
            "我算老几不晓得，但也轮不到你管！",
            "你说话这么冲，是不是脑子有毛病？",
            "你挡我路了，没长眼睛啊？",
            "你算老几？凭啥子管我？"
        ],
        universal: [
            "请尊重别人，也尊重自己！",
            "路是公共的，请不要霸道！",
            "不要随便评价别人！",
            "先管好你自己再说！",
            "你没有权利管我！",
            "说话客气点，没人欠你的！",
            "你挡路了，请让一下！",
            "你算什么东西，凭什么管我？"
        ]
    },
    love: {
        northeast: [
            "你以为你是谁啊？离了你我就活不了了？",
            "别把自己太当回事，地球离了谁都照转！",
            "你要走就走，别在这磨磨唧唧的！",
            "我当初真是瞎了眼才看上你！",
            "你觉得你很厉害？其实啥也不是！",
            "谁离开谁不行啊？别在这装深情！",
            "你爱咋咋地，我不伺候了！",
            "别再来烦我，我看见你就恶心！",
            "你以为你是太阳啊？谁都得围着你转！",
            "分就分，谁怕谁！"
        ],
        shanghai: [
            "侬以为侬是谁啊？离了侬我就活勿成啦？",
            "别把自家太当回事，地球离了谁都照转！",
            "侬要走就走，别喺度磨磨唧唧！",
            "我当初真是瞎了眼才看上侬！",
            "侬觉得侬老厉害？其实啥也勿是！",
            "谁离开谁不行啊？别喺度装深情！",
            "侬爱咋咋地，我勿伺候了！",
            "别再来烦我，我看见侬就恶心！"
        ],
        cantonese: [
            "你以为你系边个啊？离咗你我就活唔成啦？",
            "唔好将自己太当回事，地球离咗边个都照转！",
            "你要走就走，唔好喺度磨磨唧唧！",
            "我当初真系瞎咗眼先睇上你！",
            "你觉得你好叻？其实乜都唔系！",
            "边个离开边个唔得啊？唔好喺度装深情！",
            "你爱咋咋地，我唔伺候啦！",
            "唔好再来烦我，我见到你就恶心！"
        ],
        sichuan: [
            "你以为你是哪个？离了你我就活不成了？",
            "别把自己太当回事，地球离了哪个都照转！",
            "你要走就走，别在这磨磨唧唧的！",
            "我当初真是瞎了眼才看上你！",
            "你觉得你很厉害？其实啥也不是！",
            "哪个离开哪个不行啊？别在这装深情！",
            "你爱咋咋地，我不伺候了！",
            "别再来烦我，我看见你就恶心！"
        ],
        universal: [
            "别太把自己当回事！",
            "离了你我照样过得很好！",
            "要走就走，别拖拖拉拉！",
            "我当初真是看错你了！",
            "别装了，你没那么重要！",
            "谁离开谁都能活！",
            "我受够了，拜拜！",
            "请不要再打扰我！"
        ]
    },
    universal: {
        northeast: [
            "你算老几啊？轮得到你在这指手画脚？",
            "我乐意，关你屁事！",
            "你管好你自己吧，别多管闲事！",
            "有这功夫不如想想怎么把自己的日子过好！",
            "你说话这么难听，是没刷牙吗？",
            "我就这样，你不爱看可以不看！",
            "别以为你很了不起，其实啥也不是！",
            "你是不是吃饱了撑的，没事找事！",
            "少在这阴阳怪气的，有话直说！",
            "我听你的？你算哪根葱啊？"
        ],
        shanghai: [
            "侬算老几啊？轮得到侬喺度指手画脚？",
            "我乐意，关侬啥事体！",
            "侬管好侬自家，别多管闲事！",
            "有咁多功夫不如想想自家！",
            "侬说话咁难听，没刷牙啊？",
            "我就咁样子，侬勿爱看可以勿看！",
            "别以为侬老了不起，其实啥也勿是！",
            "侬系勿系吃饱了撑个？"
        ],
        cantonese: [
            "你算老几啊？轮得到你喺度指手画脚？",
            "我中意，关你屁事！",
            "你管好你自己，咪多管闲事！",
            "有咁多功夫不如谂下自己！",
            "你说话咁难听，没刷牙啊？",
            "我就咁样，你唔中意睇可以唔睇！",
            "唔好以为你好叻，其实乜都唔系！",
            "你系咪吃饱咗撑？"
        ],
        sichuan: [
            "你算老几啊？轮得到你在这指手画脚？",
            "我乐意，关你屁事！",
            "你管好你自己，别多管闲事！",
            "有这么多功夫不如想想自己！",
            "你说话这么难听，没刷牙啊？",
            "我就这样，你不爱看可以不看！",
            "别以为你很了不起，其实啥也不是！",
            "你是不是吃饱了撑的？"
        ],
        universal: [
            "请不要随便评价别人！",
            "这是我的事，与你无关！",
            "管好你自己吧！",
            "别多管闲事！",
            "说话客气点！",
            "我喜欢就好，不用你管！",
            "别太自以为是！",
            "没事找事！"
        ]
    }
};

const scenes = {
    workplace: [
        "你天天加班有啥用啊，还不是没升职？",
        "哟，这么晚还在卷啊？真努力，不像我们躺平了",
        "这方案不行，重做吧，太业余了",
        "我早就提醒过你要提前测试，你非不听",
        "你那点工资够干啥的，还不如回家种地",
        "你一个新人懂什么，听我的准没错",
        "就你这水平，还敢跟我争？",
        "你做的这个数据分析太浅了，我上我也行"
    ],
    family: [
        "你都多大了还不结婚，想当老姑娘/光棍吗？",
        "隔壁小王都生二胎了，你还单身呢",
        "你赚那点钱够花吗？我看你就是不会过日子",
        "女孩子家，那么拼干嘛，早点嫁人才是正经事",
        "你买这个东西有什么用？浪费钱",
        "我说不行就不行，我是为了你好",
        "你怎么这么不听话呢？",
        "我吃过的盐比你吃过的米还多"
    ],
    friend: [
        "你这衣服在哪买的，真土",
        "就你这厨艺，还敢请客？",
        "你对象长得不咋地啊，眼光不行",
        "你这手机都过时了，换一个吧",
        "你怎么这么胖了，还吃？",
        "你这发型太丑了，跟鸡窝似的",
        "你这工作有什么前途啊，赶紧换了",
        "你唱歌真难听，别唱了"
    ],
    stranger: [
        "你这人怎么这样，没素质！",
        "你挡着我路了，没长眼睛吗？",
        "一看你就不像好人",
        "你懂什么，我这是为大家好",
        "你算老几，凭什么管我？",
        "你这种人就是欠收拾",
        "我说话就这样，你爱听不听",
        "你是不是故意的？"
    ]
};

const suggestions = {
    workplace: [
        ["你可真是咸吃萝卜淡操心，我升职不升职关你屁事！", "东北式直球攻击，一针见血"],
        ["我加班是为了给老板打工，你操心是为了给自己添堵！", "幽默反讽，让对方无语"],
        ["我升不升职不知道，你再这么酸可就该升血压了！", "精准打击痛点"],
        ["方案不行？来来来，笔给你，你行你上！", "反将一军"],
        ["您提醒得真及时，要不您把测试报告先签个字？", "用事实说话"],
        ["我工资够不够花不知道，但肯定比你操的心少！", "轻松化解"]
    ],
    family: [
        ["结婚是我的事，您这么着急要不您替我结了？", "幽默化解催婚"],
        ["小王生二胎跟我有啥关系？他也没替我过日子啊！", "直击要害"],
        ["我赚的钱够不够花，反正不花您的，操那心干啥！", "直接回怼"],
        ["女孩子怎么了？我自己赚钱自己花，比谁都硬气！", "霸气回应"],
        ["这东西再没用也没您的唠叨没用！", "东北式幽默"],
        ["您这是为我好还是为您面子好啊？", "灵魂拷问"]
    ],
    friend: [
        ["土不土不知道，至少比你那张嘴好看！", "怼得漂亮"],
        ["嫌我厨艺不好？那你倒是别吃啊！", "反将一军"],
        ["我对象再不好也比你单身强！", "直击痛处"],
        ["手机过时总比人过时强！", "神回复"],
        ["我胖怎么了？吃你家大米了？", "经典反问"],
        ["你这嘴这么毒，是家里没给你吃饱饭吗？", "幽默反击"]
    ],
    stranger: [
        ["我素质好不好不知道，但比你会好好说话！", "怼回去"],
        ["路是你家开的？我站这碍你眼了？", "霸气回应"],
        ["我像不像好人不知道，但你肯定不像！", "镜像攻击"],
        ["你为大家好？先管好你自己吧！", "一针见血"],
        ["我不算老几，但也轮不到你管！", "直接回怼"],
        ["你说话这么横，是家里有矿还是脑子有病？", "犀利反问"]
    ]
};

const feedbackMessages = {
    success: [
        "怼得漂亮！这口才不去说相声可惜了！",
        "完美！对方已经被你怼得说不出话了！",
        "东北老铁附体了！怼得对方哑口无言！",
        "漂亮！这波操作给满分！"
    ],
    good: [
        "不错不错！有东北那味儿了！",
        "可以可以！对方已经开始怀疑人生了！",
        "有进步！继续努力！",
        "怼得挺到位，再接再厉！"
    ],
    needsWork: [
        "差那么点意思，再练练！",
        "还不够狠，想想东北话怎么说！",
        "力度不够，再来！",
        "对方还能反击，加油！"
    ]
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateScene(scene) {
    const sceneSuggestions = suggestions[scene];
    const suggestionButtons = document.getElementById('suggestions-list');
    suggestionButtons.innerHTML = '';
    
    const shuffled = [...sceneSuggestions].sort(() => Math.random() - 0.5);
    shuffled.slice(0, 3).forEach(([text, tip]) => {
        const btn = document.createElement('button');
        btn.className = 'suggest-btn';
        btn.textContent = text;
        btn.addEventListener('click', () => {
            document.getElementById('response-input').value = text;
            evaluateResponse(text, scene);
        });
        suggestionButtons.appendChild(btn);
    });
    
    document.getElementById('result-feedback').style.display = 'none';
}

function evaluateResponse(response, scene) {
    const feedback = document.getElementById('result-feedback');
    
    const length = response.length;
    const hasNortheastWords = /(咋|啥|瞅|怼|整|唠|嗑|嘚瑟|瘪犊子|玩意儿|唠嗑|扯犊子|磨叽)/i.test(response);
    const hasHumorousElements = /(笑|哈哈|笑死|逗|搞笑|滑稽)/i.test(response);
    const hasStrongLanguage = /(关你屁事|你算老几|你行你上|爱咋咋地)/i.test(response);
    
    let score = 0;
    
    if (length >= 10) score += 1;
    if (length >= 20) score += 1;
    if (hasNortheastWords) score += 2;
    if (hasHumorousElements) score += 1;
    if (hasStrongLanguage) score += 2;
    
    let type, message;
    if (score >= 6) {
        type = 'success';
        message = getRandomItem(feedbackMessages.success);
    } else if (score >= 4) {
        type = 'good';
        message = getRandomItem(feedbackMessages.good);
    } else {
        type = 'needs-work';
        message = getRandomItem(feedbackMessages.needsWork);
    }
    
    feedback.className = `result-feedback ${type}`;
    feedback.innerHTML = `<strong>🔥 ${message}</strong>`;
    feedback.style.display = 'block';
    
    setTimeout(() => {
        updateScene(scene);
        document.getElementById('response-input').value = '';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const sceneButtons = document.querySelectorAll('.scene-btn');
    const sendBtn = document.getElementById('send-btn');
    const responseInput = document.getElementById('response-input');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(t => t.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    sceneButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const scene = btn.dataset.scene;
            
            sceneButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            updateScene(scene);
        });
    });
    
    sendBtn.addEventListener('click', () => {
        const roastGenerateBtn = document.getElementById('roast-generate-btn');
        roastGenerateBtn.click();
    });
    
    responseInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    updateScene('workplace');
    
    initRoastGenerator();
    initMemeGenerator();
});

function initRoastGenerator() {
    const scenarioTags = document.querySelectorAll('.scenario-tag');
    const styleTags = document.querySelectorAll('.style-tag');
    const roastGenerateBtn = document.getElementById('roast-generate-btn');
    const roastResults = document.getElementById('roast-results');
    
    let selectedScenario = 'work';
    let selectedStyle = 'northeast';
    
    scenarioTags.forEach(btn => {
        btn.addEventListener('click', () => {
            scenarioTags.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedScenario = btn.dataset.scenario;
        });
    });
    
    styleTags.forEach(btn => {
        btn.addEventListener('click', () => {
            styleTags.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedStyle = btn.dataset.style;
        });
    });
    
    roastGenerateBtn.addEventListener('click', () => {
        const dailyCount = checkDailyLimit();
        const dailyLimit = getDailyLimit();
        
        if (dailyCount >= dailyLimit) {
            roastResults.innerHTML = `
                <div class="empty-state" style="color: #e74c3c;">
                    <span>⚠️</span>
                    <p>今日生成次数已用完！</p>
                    <p>当前是${userPlan === 'free' ? '免费版' : userPlan}，每日限${dailyLimit === Infinity ? '无限' : dailyLimit}次</p>
                    <p>升级会员解锁更多次数！</p>
                </div>
            `;
            return;
        }
        
        if (userPlan === 'free' && selectedStyle !== 'northeast' && selectedStyle !== 'universal') {
            roastResults.innerHTML = `
                <div class="empty-state" style="color: #e74c3c;">
                    <span>🔒</span>
                    <p>该风格仅限会员使用！</p>
                    <p>免费版仅支持东北话和通用版</p>
                </div>
            `;
            return;
        }
        
        const templates = roastTemplates[selectedScenario] && roastTemplates[selectedScenario][selectedStyle] 
            ? roastTemplates[selectedScenario][selectedStyle] 
            : roastTemplates.universal.universal;
        
        const shuffled = [...templates].sort(() => 0.5 - Math.random());
        const roasts = shuffled.slice(0, userPlan === 'free' ? 3 : 6);
        
        incrementDailyCount();
        
        roastResults.innerHTML = '';
        
        roasts.forEach((roast, index) => {
            const item = document.createElement('div');
            item.className = 'roast-result-item';
            item.innerHTML = `
                <div class="roast-result-text">${index + 1}. ${roast}</div>
            `;
            
            item.addEventListener('click', () => {
                document.getElementById('response-input').value = roast;
            });
            
            roastResults.appendChild(item);
        });
        
        const remaining = dailyLimit - (dailyCount + 1);
        const limitText = document.createElement('div');
        limitText.className = 'limit-info';
        limitText.style.fontSize = '0.9rem';
        limitText.style.color = '#555';
        limitText.style.marginTop = '10px';
        limitText.style.textAlign = 'center';
        limitText.textContent = `今日剩余次数：${remaining === Infinity ? '无限' : remaining}`;
        roastResults.appendChild(limitText);
    });
}

function initMemeGenerator() {
    const imageUpload = document.getElementById('image-upload');
    const uploadArea = document.getElementById('upload-area');
    const previewContainer = document.getElementById('preview-container');
    const canvas = document.getElementById('meme-canvas');
    const canvasPlaceholder = document.getElementById('canvas-placeholder');
    const topTextInput = document.getElementById('top-text');
    const bottomTextInput = document.getElementById('bottom-text');
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const jokeButtons = document.querySelectorAll('.joke-btn');
    const templateItems = document.querySelectorAll('.template-item');
    
    let uploadedImage = null;
    let canvasCtx = canvas.getContext('2d');
    
    imageUpload.addEventListener('change', handleImageUpload);
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            processImageFile(files[0]);
        }
    });
    
    jokeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.text;
            topTextInput.value = '';
            bottomTextInput.value = text;
            if (uploadedImage) {
                drawMeme();
            }
        });
    });
    
    templateItems.forEach(item => {
        item.addEventListener('click', () => {
            const templateUrl = item.querySelector('img').src;
            loadTemplateImage(templateUrl);
        });
    });
    
    generateBtn.addEventListener('click', () => {
        if (uploadedImage) {
            drawMeme();
        } else {
            alert('请先上传图片！');
        }
    });
    
    downloadBtn.addEventListener('click', () => {
        if (uploadedImage) {
            const link = document.createElement('a');
            link.download = 'roast-meme.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } else {
            alert('请先生成图片！');
        }
    });
    
    topTextInput.addEventListener('input', () => {
        if (uploadedImage) drawMeme();
    });
    
    bottomTextInput.addEventListener('input', () => {
        if (uploadedImage) drawMeme();
    });
    
    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            processImageFile(file);
        }
    }
    
    function processImageFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                uploadedImage = img;
                setupCanvas();
                drawMeme();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
    function loadTemplateImage(url) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            uploadedImage = img;
            setupCanvas();
            drawMeme();
        };
        img.src = url;
    }
    
    function setupCanvas() {
        const maxWidth = 500;
        const maxHeight = 500;
        
        let width = uploadedImage.width;
        let height = uploadedImage.height;
        
        if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
        }
        
        if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
        }
        
        canvas.width = width;
        canvas.height = height;
        canvas.style.display = 'block';
        canvasPlaceholder.style.display = 'none';
    }
    
    function drawMeme() {
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        canvasCtx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);
        
        canvasCtx.font = 'bold 24px Impact, sans-serif';
        canvasCtx.fillStyle = 'white';
        canvasCtx.strokeStyle = 'black';
        canvasCtx.lineWidth = 3;
        canvasCtx.textAlign = 'center';
        canvasCtx.textBaseline = 'top';
        
        const topText = topTextInput.value.toUpperCase();
        const bottomText = bottomTextInput.value.toUpperCase();
        
        const lineHeight = 30;
        const margin = 10;
        
        if (topText) {
            const lines = wrapText(topText, canvas.width - margin * 2);
            lines.forEach((line, index) => {
                const y = margin + index * lineHeight;
                canvasCtx.strokeText(line, canvas.width / 2, y);
                canvasCtx.fillText(line, canvas.width / 2, y);
            });
        }
        
        canvasCtx.textBaseline = 'bottom';
        if (bottomText) {
            const lines = wrapText(bottomText, canvas.width - margin * 2);
            lines.forEach((line, index) => {
                const y = canvas.height - margin - lines.length * lineHeight + index * lineHeight + lineHeight;
                canvasCtx.strokeText(line, canvas.width / 2, y);
                canvasCtx.fillText(line, canvas.width / 2, y);
            });
        }
        
        // 添加水印
        canvasCtx.font = 'bold 14px Arial, sans-serif';
        canvasCtx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        canvasCtx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        canvasCtx.lineWidth = 2;
        canvasCtx.textAlign = 'right';
        canvasCtx.textBaseline = 'bottom';
        
        const watermarkText = '怼怼乐生成';
        const padding = 10;
        const x = canvas.width - padding;
        const y = canvas.height - padding;
        
        canvasCtx.strokeText(watermarkText, x, y);
        canvasCtx.fillText(watermarkText, x, y);
    }
    
    function wrapText(text, maxWidth) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];
        
        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = canvasCtx.measureText(currentLine + ' ' + word).width;
            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }
}

let currentUser = null;
let userPlan = 'free';

function initAuth() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const authForm = document.getElementById('auth-form');
    const authSwitchBtn = document.getElementById('auth-switch-btn');
    const authSwitchText = document.getElementById('auth-switch-text');
    const modalTitle = document.getElementById('modal-title');
    const authSubmit = document.getElementById('auth-submit');
    const passwordConfirm = document.getElementById('auth-password-confirm');
    
    let isLoginMode = true;
    
    loginBtn.addEventListener('click', () => {
        openModal(true);
    });
    
    registerBtn.addEventListener('click', () => {
        openModal(false);
    });
    
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    authSwitchBtn.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            modalTitle.textContent = '登录';
            authSubmit.textContent = '登录';
            authSwitchText.textContent = '还没有账号？';
            authSwitchBtn.textContent = '立即注册';
            passwordConfirm.style.display = 'none';
        } else {
            modalTitle.textContent = '注册';
            authSubmit.textContent = '注册';
            authSwitchText.textContent = '已有账号？';
            authSwitchBtn.textContent = '立即登录';
            passwordConfirm.style.display = 'block';
        }
    });
    
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const account = document.getElementById('auth-account').value.trim();
        const password = document.getElementById('auth-password').value;
        const confirmPassword = document.getElementById('auth-password-confirm').value;
        
        if (!account || !password) {
            alert('请填写完整信息');
            return;
        }
        
        if (!isLoginMode && password !== confirmPassword) {
            alert('两次输入的密码不一致');
            return;
        }
        
        if (isLoginMode) {
            login(account, password);
        } else {
            register(account, password);
        }
    });
    
    logoutBtn.addEventListener('click', () => {
        logout();
    });
    
    loadUserFromStorage();
}

function openModal(isLogin) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const authSubmit = document.getElementById('auth-submit');
    const authSwitchText = document.getElementById('auth-switch-text');
    const authSwitchBtn = document.getElementById('auth-switch-btn');
    const passwordConfirm = document.getElementById('auth-password-confirm');
    
    modalOverlay.style.display = 'flex';
    
    if (isLogin) {
        modalTitle.textContent = '登录';
        authSubmit.textContent = '登录';
        authSwitchText.textContent = '还没有账号？';
        authSwitchBtn.textContent = '立即注册';
        passwordConfirm.style.display = 'none';
    } else {
        modalTitle.textContent = '注册';
        authSubmit.textContent = '注册';
        authSwitchText.textContent = '已有账号？';
        authSwitchBtn.textContent = '立即登录';
        passwordConfirm.style.display = 'block';
    }
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const authForm = document.getElementById('auth-form');
    modalOverlay.style.display = 'none';
    authForm.reset();
}

function login(account, password) {
    const users = JSON.parse(localStorage.getItem('duidui_users') || '[]');
    const user = users.find(u => u.account === account && u.password === password);
    
    if (user) {
        currentUser = user;
        userPlan = user.plan || 'free';
        saveUserToStorage();
        updateUserUI();
        closeModal();
        alert('登录成功！');
    } else {
        alert('账号或密码错误');
    }
}

function register(account, password) {
    const users = JSON.parse(localStorage.getItem('duidui_users') || '[]');
    
    if (users.some(u => u.account === account)) {
        alert('该账号已被注册');
        return;
    }
    
    const newUser = {
        account: account,
        password: password,
        plan: 'free',
        dailyCount: 0,
        lastDate: new Date().toDateString()
    };
    
    users.push(newUser);
    localStorage.setItem('duidui_users', JSON.stringify(users));
    
    currentUser = newUser;
    userPlan = 'free';
    saveUserToStorage();
    updateUserUI();
    closeModal();
    alert('注册成功！');
}

function logout() {
    currentUser = null;
    userPlan = 'free';
    localStorage.removeItem('duidui_current_user');
    updateUserUI();
    alert('已退出登录');
}

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('duidui_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        userPlan = currentUser.plan || 'free';
        updateUserUI();
    }
}

function saveUserToStorage() {
    if (currentUser) {
        localStorage.setItem('duidui_current_user', JSON.stringify(currentUser));
    }
}

function updateUserUI() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const userInfo = document.getElementById('user-info');
    const username = document.getElementById('username');
    const memberBadge = document.getElementById('member-badge');
    
    if (currentUser) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userInfo.style.display = 'flex';
        
        const displayName = currentUser.account.includes('@') 
            ? currentUser.account.split('@')[0] 
            : currentUser.account;
        username.textContent = displayName;
        
        const planNames = {
            'free': '免费版',
            'monthly': '月卡会员',
            'quarterly': '季卡会员',
            'yearly': '年卡会员'
        };
        memberBadge.textContent = planNames[userPlan] || '免费版';
        
        const planColors = {
            'free': '#27ae60',
            'monthly': '#3498db',
            'quarterly': '#9b59b6',
            'yearly': '#e74c3c'
        };
        memberBadge.style.background = planColors[userPlan] || '#ffeaa7';
    } else {
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        userInfo.style.display = 'none';
    }
}

function checkDailyLimit() {
    if (!currentUser) return 0;
    
    const today = new Date().toDateString();
    if (currentUser.lastDate !== today) {
        currentUser.dailyCount = 0;
        currentUser.lastDate = today;
        saveUserToStorage();
    }
    
    return currentUser.dailyCount;
}

function incrementDailyCount() {
    if (!currentUser) return;
    
    const today = new Date().toDateString();
    if (currentUser.lastDate !== today) {
        currentUser.dailyCount = 0;
        currentUser.lastDate = today;
    }
    
    currentUser.dailyCount++;
    saveUserToStorage();
}

function getDailyLimit() {
    const limits = {
        'free': 3,
        'monthly': 30,
        'quarterly': 100,
        'yearly': Infinity
    };
    return limits[userPlan] || 3;
}

function initMemberPlans() {
    const freePlanBtn = document.getElementById('free-plan-btn');
    const monthlyPlanBtn = document.getElementById('monthly-plan-btn');
    const quarterlyPlanBtn = document.getElementById('quarterly-plan-btn');
    const yearlyPlanBtn = document.getElementById('yearly-plan-btn');
    
    freePlanBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('请先登录');
            openModal(true);
            return;
        }
        subscribePlan('free');
    });
    
    monthlyPlanBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('请先登录');
            openModal(true);
            return;
        }
        subscribePlan('monthly');
    });
    
    quarterlyPlanBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('请先登录');
            openModal(true);
            return;
        }
        subscribePlan('quarterly');
    });
    
    yearlyPlanBtn.addEventListener('click', () => {
        if (!currentUser) {
            alert('请先登录');
            openModal(true);
            return;
        }
        subscribePlan('yearly');
    });
}

function subscribePlan(plan) {
    const planNames = {
        'free': '免费版',
        'monthly': '月卡会员',
        'quarterly': '季卡会员',
        'yearly': '年卡会员'
    };
    
    const planPrices = {
        'free': 0,
        'monthly': 19,
        'quarterly': 49,
        'yearly': 128
    };
    
    const price = planPrices[plan];
    
    if (price > 0) {
        if (confirm(`确认订阅${planNames[plan]}？价格：¥${price}`)) {
            currentUser.plan = plan;
            currentUser.dailyCount = 0;
            saveUserToStorage();
            userPlan = plan;
            updateUserUI();
            alert(`订阅${planNames[plan]}成功！`);
        }
    } else {
        currentUser.plan = plan;
        saveUserToStorage();
        userPlan = plan;
        updateUserUI();
        alert(`已切换到${planNames[plan]}！`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initMemberPlans();
});