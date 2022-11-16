// Generated from server/src/grammar/GroovyParser.g4 by ANTLR 4.9.0-SNAPSHOT




import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IdentifierPrmrAltContext } from "./GroovyParser";
import { LiteralPrmrAltContext } from "./GroovyParser";
import { GstringPrmrAltContext } from "./GroovyParser";
import { NewPrmrAltContext } from "./GroovyParser";
import { ThisPrmrAltContext } from "./GroovyParser";
import { SuperPrmrAltContext } from "./GroovyParser";
import { ParenPrmrAltContext } from "./GroovyParser";
import { ClosureOrLambdaExpressionPrmrAltContext } from "./GroovyParser";
import { ListPrmrAltContext } from "./GroovyParser";
import { MapPrmrAltContext } from "./GroovyParser";
import { BuiltInTypePrmrAltContext } from "./GroovyParser";
import { IntegerLiteralAltContext } from "./GroovyParser";
import { FloatingPointLiteralAltContext } from "./GroovyParser";
import { StringLiteralAltContext } from "./GroovyParser";
import { BooleanLiteralAltContext } from "./GroovyParser";
import { NullLiteralAltContext } from "./GroovyParser";
import { CastExprAltContext } from "./GroovyParser";
import { PostfixExprAltContext } from "./GroovyParser";
import { SwitchExprAltContext } from "./GroovyParser";
import { UnaryNotExprAltContext } from "./GroovyParser";
import { PowerExprAltContext } from "./GroovyParser";
import { UnaryAddExprAltContext } from "./GroovyParser";
import { MultiplicativeExprAltContext } from "./GroovyParser";
import { AdditiveExprAltContext } from "./GroovyParser";
import { ShiftExprAltContext } from "./GroovyParser";
import { RelationalExprAltContext } from "./GroovyParser";
import { EqualityExprAltContext } from "./GroovyParser";
import { RegexExprAltContext } from "./GroovyParser";
import { AndExprAltContext } from "./GroovyParser";
import { ExclusiveOrExprAltContext } from "./GroovyParser";
import { InclusiveOrExprAltContext } from "./GroovyParser";
import { LogicalAndExprAltContext } from "./GroovyParser";
import { LogicalOrExprAltContext } from "./GroovyParser";
import { ConditionalExprAltContext } from "./GroovyParser";
import { MultipleAssignmentExprAltContext } from "./GroovyParser";
import { AssignmentExprAltContext } from "./GroovyParser";
import { BlockStmtAltContext } from "./GroovyParser";
import { ConditionalStmtAltContext } from "./GroovyParser";
import { LoopStmtAltContext } from "./GroovyParser";
import { TryCatchStmtAltContext } from "./GroovyParser";
import { SynchronizedStmtAltContext } from "./GroovyParser";
import { ReturnStmtAltContext } from "./GroovyParser";
import { ThrowStmtAltContext } from "./GroovyParser";
import { BreakStmtAltContext } from "./GroovyParser";
import { ContinueStmtAltContext } from "./GroovyParser";
import { YieldStmtAltContext } from "./GroovyParser";
import { LabeledStmtAltContext } from "./GroovyParser";
import { AssertStmtAltContext } from "./GroovyParser";
import { LocalVariableDeclarationStmtAltContext } from "./GroovyParser";
import { ExpressionStmtAltContext } from "./GroovyParser";
import { EmptyStmtAltContext } from "./GroovyParser";
import { CommandExprAltContext } from "./GroovyParser";
import { ForStmtAltContext } from "./GroovyParser";
import { WhileStmtAltContext } from "./GroovyParser";
import { DoWhileStmtAltContext } from "./GroovyParser";
import { CompilationUnitContext } from "./GroovyParser";
import { ScriptStatementsContext } from "./GroovyParser";
import { ScriptStatementContext } from "./GroovyParser";
import { PackageDeclarationContext } from "./GroovyParser";
import { ImportDeclarationContext } from "./GroovyParser";
import { TypeDeclarationContext } from "./GroovyParser";
import { ModifierContext } from "./GroovyParser";
import { ModifiersOptContext } from "./GroovyParser";
import { ModifiersContext } from "./GroovyParser";
import { ClassOrInterfaceModifiersOptContext } from "./GroovyParser";
import { ClassOrInterfaceModifiersContext } from "./GroovyParser";
import { ClassOrInterfaceModifierContext } from "./GroovyParser";
import { VariableModifierContext } from "./GroovyParser";
import { VariableModifiersOptContext } from "./GroovyParser";
import { VariableModifiersContext } from "./GroovyParser";
import { TypeParametersContext } from "./GroovyParser";
import { TypeParameterContext } from "./GroovyParser";
import { TypeBoundContext } from "./GroovyParser";
import { TypeListContext } from "./GroovyParser";
import { ClassDeclarationContext } from "./GroovyParser";
import { ClassBodyContext } from "./GroovyParser";
import { EnumConstantsContext } from "./GroovyParser";
import { EnumConstantContext } from "./GroovyParser";
import { ClassBodyDeclarationContext } from "./GroovyParser";
import { MemberDeclarationContext } from "./GroovyParser";
import { MethodDeclarationContext } from "./GroovyParser";
import { CompactConstructorDeclarationContext } from "./GroovyParser";
import { MethodNameContext } from "./GroovyParser";
import { ReturnTypeContext } from "./GroovyParser";
import { FieldDeclarationContext } from "./GroovyParser";
import { VariableDeclaratorsContext } from "./GroovyParser";
import { VariableDeclaratorContext } from "./GroovyParser";
import { VariableDeclaratorIdContext } from "./GroovyParser";
import { VariableInitializerContext } from "./GroovyParser";
import { VariableInitializersContext } from "./GroovyParser";
import { EmptyDimsContext } from "./GroovyParser";
import { EmptyDimsOptContext } from "./GroovyParser";
import { TypeContext } from "./GroovyParser";
import { ClassOrInterfaceTypeContext } from "./GroovyParser";
import { PrimitiveTypeContext } from "./GroovyParser";
import { TypeArgumentsContext } from "./GroovyParser";
import { TypeArgumentContext } from "./GroovyParser";
import { AnnotatedQualifiedClassNameContext } from "./GroovyParser";
import { QualifiedClassNameListContext } from "./GroovyParser";
import { FormalParametersContext } from "./GroovyParser";
import { FormalParameterListContext } from "./GroovyParser";
import { ThisFormalParameterContext } from "./GroovyParser";
import { FormalParameterContext } from "./GroovyParser";
import { MethodBodyContext } from "./GroovyParser";
import { QualifiedNameContext } from "./GroovyParser";
import { QualifiedNameElementContext } from "./GroovyParser";
import { QualifiedNameElementsContext } from "./GroovyParser";
import { QualifiedClassNameContext } from "./GroovyParser";
import { QualifiedStandardClassNameContext } from "./GroovyParser";
import { LiteralContext } from "./GroovyParser";
import { GstringContext } from "./GroovyParser";
import { GstringValueContext } from "./GroovyParser";
import { GstringPathContext } from "./GroovyParser";
import { StandardLambdaExpressionContext } from "./GroovyParser";
import { StandardLambdaParametersContext } from "./GroovyParser";
import { LambdaBodyContext } from "./GroovyParser";
import { ClosureContext } from "./GroovyParser";
import { ClosureOrLambdaExpressionContext } from "./GroovyParser";
import { BlockStatementsOptContext } from "./GroovyParser";
import { BlockStatementsContext } from "./GroovyParser";
import { AnnotationsOptContext } from "./GroovyParser";
import { AnnotationContext } from "./GroovyParser";
import { ElementValuesContext } from "./GroovyParser";
import { AnnotationNameContext } from "./GroovyParser";
import { ElementValuePairsContext } from "./GroovyParser";
import { ElementValuePairContext } from "./GroovyParser";
import { ElementValuePairNameContext } from "./GroovyParser";
import { ElementValueContext } from "./GroovyParser";
import { ElementValueArrayInitializerContext } from "./GroovyParser";
import { BlockContext } from "./GroovyParser";
import { BlockStatementContext } from "./GroovyParser";
import { LocalVariableDeclarationContext } from "./GroovyParser";
import { VariableDeclarationContext } from "./GroovyParser";
import { TypeNamePairsContext } from "./GroovyParser";
import { TypeNamePairContext } from "./GroovyParser";
import { VariableNamesContext } from "./GroovyParser";
import { ConditionalStatementContext } from "./GroovyParser";
import { IfElseStatementContext } from "./GroovyParser";
import { SwitchStatementContext } from "./GroovyParser";
import { LoopStatementContext } from "./GroovyParser";
import { ContinueStatementContext } from "./GroovyParser";
import { BreakStatementContext } from "./GroovyParser";
import { YieldStatementContext } from "./GroovyParser";
import { TryCatchStatementContext } from "./GroovyParser";
import { AssertStatementContext } from "./GroovyParser";
import { StatementContext } from "./GroovyParser";
import { CatchClauseContext } from "./GroovyParser";
import { CatchTypeContext } from "./GroovyParser";
import { FinallyBlockContext } from "./GroovyParser";
import { ResourcesContext } from "./GroovyParser";
import { ResourceListContext } from "./GroovyParser";
import { ResourceContext } from "./GroovyParser";
import { SwitchBlockStatementGroupContext } from "./GroovyParser";
import { SwitchLabelContext } from "./GroovyParser";
import { ForControlContext } from "./GroovyParser";
import { EnhancedForControlContext } from "./GroovyParser";
import { ClassicalForControlContext } from "./GroovyParser";
import { ForInitContext } from "./GroovyParser";
import { ForUpdateContext } from "./GroovyParser";
import { CastParExpressionContext } from "./GroovyParser";
import { ParExpressionContext } from "./GroovyParser";
import { ExpressionInParContext } from "./GroovyParser";
import { ExpressionListContext } from "./GroovyParser";
import { ExpressionListElementContext } from "./GroovyParser";
import { EnhancedStatementExpressionContext } from "./GroovyParser";
import { StatementExpressionContext } from "./GroovyParser";
import { PostfixExpressionContext } from "./GroovyParser";
import { SwitchExpressionContext } from "./GroovyParser";
import { SwitchBlockStatementExpressionGroupContext } from "./GroovyParser";
import { SwitchExpressionLabelContext } from "./GroovyParser";
import { ExpressionContext } from "./GroovyParser";
import { CommandExpressionContext } from "./GroovyParser";
import { CommandArgumentContext } from "./GroovyParser";
import { PathExpressionContext } from "./GroovyParser";
import { PathElementContext } from "./GroovyParser";
import { NamePartContext } from "./GroovyParser";
import { DynamicMemberNameContext } from "./GroovyParser";
import { IndexPropertyArgsContext } from "./GroovyParser";
import { NamedPropertyArgsContext } from "./GroovyParser";
import { PrimaryContext } from "./GroovyParser";
import { ListContext } from "./GroovyParser";
import { MapContext } from "./GroovyParser";
import { MapEntryListContext } from "./GroovyParser";
import { MapEntryContext } from "./GroovyParser";
import { MapEntryLabelContext } from "./GroovyParser";
import { CreatorContext } from "./GroovyParser";
import { DimContext } from "./GroovyParser";
import { ArrayInitializerContext } from "./GroovyParser";
import { AnonymousInnerClassDeclarationContext } from "./GroovyParser";
import { CreatedNameContext } from "./GroovyParser";
import { NonWildcardTypeArgumentsContext } from "./GroovyParser";
import { TypeArgumentsOrDiamondContext } from "./GroovyParser";
import { ArgumentsContext } from "./GroovyParser";
import { EnhancedArgumentListInParContext } from "./GroovyParser";
import { EnhancedArgumentListElementContext } from "./GroovyParser";
import { StringLiteralContext } from "./GroovyParser";
import { ClassNameContext } from "./GroovyParser";
import { IdentifierContext } from "./GroovyParser";
import { BuiltInTypeContext } from "./GroovyParser";
import { KeywordsContext } from "./GroovyParser";
import { RparenContext } from "./GroovyParser";
import { NlsContext } from "./GroovyParser";
import { SepContext } from "./GroovyParser";
import { Aws_string_statementContext } from "./GroovyParser";
import { Aws_scope_statementContext } from "./GroovyParser";
import { Aws_scopeContext } from "./GroovyParser";
import { Nextflow_configContext } from "./GroovyParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GroovyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GroovyParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `identifierPrmrAlt`
	 * labeled alternative in `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPrmrAlt?: (ctx: IdentifierPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrmrAlt`
	 * labeled alternative in `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrmrAlt?: (ctx: LiteralPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `gstringPrmrAlt`
	 * labeled alternative in `GroovyParser.commandPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPrmrAlt?: (ctx: GstringPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `newPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewPrmrAlt?: (ctx: NewPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrmrAlt?: (ctx: ThisPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrmrAlt?: (ctx: SuperPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenPrmrAlt`
	 * labeled alternative in `GroovyParser.namedPropertyArgPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenPrmrAlt?: (ctx: ParenPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `closureOrLambdaExpressionPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpressionPrmrAlt?: (ctx: ClosureOrLambdaExpressionPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `listPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPrmrAlt?: (ctx: ListPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `mapPrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapPrmrAlt?: (ctx: MapPrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `builtInTypePrmrAlt`
	 * labeled alternative in `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInTypePrmrAlt?: (ctx: BuiltInTypePrmrAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteralAlt?: (ctx: IntegerLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatingPointLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointLiteralAlt?: (ctx: FloatingPointLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralAlt?: (ctx: StringLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralAlt?: (ctx: BooleanLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteralAlt`
	 * labeled alternative in `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteralAlt?: (ctx: NullLiteralAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExprAlt`
	 * labeled alternative in `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExprAlt?: (ctx: CastExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfixExprAlt`
	 * labeled alternative in `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExprAlt?: (ctx: PostfixExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `switchExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExprAlt?: (ctx: SwitchExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryNotExprAlt`
	 * labeled alternative in `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNotExprAlt?: (ctx: UnaryNotExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `powerExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExprAlt?: (ctx: PowerExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryAddExprAlt`
	 * labeled alternative in `GroovyParser.castOperandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryAddExprAlt?: (ctx: UnaryAddExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplicativeExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExprAlt?: (ctx: MultiplicativeExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `additiveExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExprAlt?: (ctx: AdditiveExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `shiftExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExprAlt?: (ctx: ShiftExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExprAlt?: (ctx: RelationalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExprAlt?: (ctx: EqualityExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `regexExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexExprAlt?: (ctx: RegexExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `andExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExprAlt?: (ctx: AndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `exclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExprAlt?: (ctx: ExclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `inclusiveOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExprAlt?: (ctx: InclusiveOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExprAlt?: (ctx: LogicalAndExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExprAlt?: (ctx: LogicalOrExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExprAlt?: (ctx: ConditionalExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleAssignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleAssignmentExprAlt?: (ctx: MultipleAssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignmentExprAlt`
	 * labeled alternative in `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExprAlt?: (ctx: AssignmentExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmtAlt?: (ctx: BlockStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStmtAlt?: (ctx: ConditionalStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `loopStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStmtAlt?: (ctx: LoopStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `tryCatchStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStmtAlt?: (ctx: TryCatchStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `synchronizedStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStmtAlt?: (ctx: SynchronizedStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmtAlt?: (ctx: ReturnStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `throwStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStmtAlt?: (ctx: ThrowStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `breakStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmtAlt?: (ctx: BreakStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `continueStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmtAlt?: (ctx: ContinueStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `yieldStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStmtAlt?: (ctx: YieldStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `labeledStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStmtAlt?: (ctx: LabeledStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `assertStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStmtAlt?: (ctx: AssertStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `localVariableDeclarationStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStmtAlt?: (ctx: LocalVariableDeclarationStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStmtAlt?: (ctx: ExpressionStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyStmtAlt`
	 * labeled alternative in `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStmtAlt?: (ctx: EmptyStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `commandExprAlt`
	 * labeled alternative in `GroovyParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExprAlt?: (ctx: CommandExprAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `forStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmtAlt?: (ctx: ForStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmtAlt?: (ctx: WhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by the `doWhileStmtAlt`
	 * labeled alternative in `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStmtAlt?: (ctx: DoWhileStmtAltContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.scriptStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatements?: (ctx: ScriptStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.scriptStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptStatement?: (ctx: ScriptStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.modifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiersOpt?: (ctx: ModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiersOpt?: (ctx: ClassOrInterfaceModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifiers?: (ctx: ClassOrInterfaceModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifiersOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiersOpt?: (ctx: VariableModifiersOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifiers?: (ctx: VariableModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.compactConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactConstructorDeclaration?: (ctx: CompactConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableInitializers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializers?: (ctx: VariableInitializersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.emptyDims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDims?: (ctx: EmptyDimsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.emptyDimsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyDimsOpt?: (ctx: EmptyDimsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.annotatedQualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedQualifiedClassName?: (ctx: AnnotatedQualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedClassNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassNameList?: (ctx: QualifiedClassNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.thisFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisFormalParameter?: (ctx: ThisFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedNameElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElement?: (ctx: QualifiedNameElementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedNameElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameElements?: (ctx: QualifiedNameElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedClassName?: (ctx: QualifiedClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.qualifiedStandardClassName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedStandardClassName?: (ctx: QualifiedStandardClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.gstring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstring?: (ctx: GstringContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.gstringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringValue?: (ctx: GstringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.gstringPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGstringPath?: (ctx: GstringPathContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.standardLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaExpression?: (ctx: StandardLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.standardLambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardLambdaParameters?: (ctx: StandardLambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure?: (ctx: ClosureContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.closureOrLambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureOrLambdaExpression?: (ctx: ClosureOrLambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatementsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatementsOpt?: (ctx: BlockStatementsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.annotationsOpt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationsOpt?: (ctx: AnnotationsOptContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValues?: (ctx: ElementValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValuePairName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairName?: (ctx: ElementValuePairNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeNamePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePairs?: (ctx: TypeNamePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamePair?: (ctx: TypeNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.variableNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableNames?: (ctx: VariableNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.ifElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseStatement?: (ctx: IfElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.yieldStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYieldStatement?: (ctx: YieldStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.tryCatchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStatement?: (ctx: TryCatchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.classicalForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassicalForControl?: (ctx: ClassicalForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.castParExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastParExpression?: (ctx: CastParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.expressionInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionInPar?: (ctx: ExpressionInParContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.expressionListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionListElement?: (ctx: ExpressionListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedStatementExpression?: (ctx: EnhancedStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpression?: (ctx: SwitchExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchBlockStatementExpressionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementExpressionGroup?: (ctx: SwitchBlockStatementExpressionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.switchExpressionLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchExpressionLabel?: (ctx: SwitchExpressionLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.commandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandExpression?: (ctx: CommandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.commandArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandArgument?: (ctx: CommandArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.pathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathExpression?: (ctx: PathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.pathElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathElement?: (ctx: PathElementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.namePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamePart?: (ctx: NamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.dynamicMemberName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDynamicMemberName?: (ctx: DynamicMemberNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.indexPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexPropertyArgs?: (ctx: IndexPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.namedPropertyArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedPropertyArgs?: (ctx: NamedPropertyArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryList?: (ctx: MapEntryListContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntry?: (ctx: MapEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.mapEntryLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntryLabel?: (ctx: MapEntryLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.dim`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim?: (ctx: DimContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.anonymousInnerClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousInnerClassDeclaration?: (ctx: AnonymousInnerClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedArgumentListInPar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListInPar?: (ctx: EnhancedArgumentListInParContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.enhancedArgumentListElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedArgumentListElement?: (ctx: EnhancedArgumentListElementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.keywords`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywords?: (ctx: KeywordsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.rparen`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRparen?: (ctx: RparenContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.nls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNls?: (ctx: NlsContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.sep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSep?: (ctx: SepContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.aws_string_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAws_string_statement?: (ctx: Aws_string_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.aws_scope_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAws_scope_statement?: (ctx: Aws_scope_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.aws_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAws_scope?: (ctx: Aws_scopeContext) => Result;

	/**
	 * Visit a parse tree produced by `GroovyParser.nextflow_config`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNextflow_config?: (ctx: Nextflow_configContext) => Result;
}

